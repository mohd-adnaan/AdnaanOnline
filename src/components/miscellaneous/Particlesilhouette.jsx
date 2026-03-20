import React, { useRef, useEffect, useState } from "react";

const TEAL = "60, 221, 154";

function drawMaleSilhouette(ctx, w, h) {
  const cx = w / 2;
  const scale = Math.min(w, h);

  ctx.fillStyle = "#fff";

  // Head
  const headR = scale * 0.09;
  const headY = h * 0.14;
  ctx.beginPath();
  ctx.arc(cx, headY, headR, 0, Math.PI * 2);
  ctx.fill();

  // Neck
  const neckW = scale * 0.07;
  const neckH = scale * 0.055;
  const neckTop = headY + headR - 2;
  ctx.fillRect(cx - neckW / 2, neckTop, neckW, neckH);

  // Shoulders + chest
  const shoulderY = neckTop + neckH;
  const shoulderW = scale * 0.42;
  const chestBottomW = scale * 0.32;
  const torsoH = scale * 0.42;

  ctx.beginPath();
  ctx.moveTo(cx - shoulderW / 2, shoulderY);
  ctx.lineTo(cx + shoulderW / 2, shoulderY);
  ctx.lineTo(cx + chestBottomW / 2, shoulderY + torsoH);
  ctx.lineTo(cx - chestBottomW / 2, shoulderY + torsoH);
  ctx.closePath();
  ctx.fill();

  // Left upper arm
  const armW = scale * 0.06;
  const armLen = torsoH * 0.75;
  ctx.beginPath();
  ctx.moveTo(cx - shoulderW / 2, shoulderY);
  ctx.lineTo(cx - shoulderW / 2 - armW, shoulderY + scale * 0.02);
  ctx.lineTo(cx - shoulderW / 2 - armW - scale * 0.01, shoulderY + armLen);
  ctx.lineTo(cx - shoulderW / 2 + scale * 0.005, shoulderY + armLen);
  ctx.closePath();
  ctx.fill();

  // Right upper arm
  ctx.beginPath();
  ctx.moveTo(cx + shoulderW / 2, shoulderY);
  ctx.lineTo(cx + shoulderW / 2 + armW, shoulderY + scale * 0.02);
  ctx.lineTo(cx + shoulderW / 2 + armW + scale * 0.01, shoulderY + armLen);
  ctx.lineTo(cx + shoulderW / 2 - scale * 0.005, shoulderY + armLen);
  ctx.closePath();
  ctx.fill();
}

const ParticleSilhouette = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particlesRef = useRef([]);
  const imageLoadedRef = useRef(false);
  const startTimeRef = useRef(null);
  const [size, setSize] = useState({ w: 320, h: 280 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw <= 480) setSize({ w: 200, h: 180 });
      else if (vw <= 768) setSize({ w: 260, h: 230 });
      else setSize({ w: 320, h: 280 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { w, h } = size;
    canvas.width = w;
    canvas.height = h;

    let animationId;

    // Draw silhouette offscreen to sample pixels
    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext("2d");
    drawMaleSilhouette(offCtx, w, h);

    const imageData = offCtx.getImageData(0, 0, w, h);
    const pixels = imageData.data;
    const particles = [];
    const rowGap = 5;

    for (let y = 0; y < h; y += rowGap) {
      let x = 0;
      while (x < w) {
        const i = (y * w + x) * 4;
        const a = pixels[i + 3];
        if (a > 128) {
          const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
          const brightness = (r + g + b) / (3 * 255);
          const lineLength = Math.floor(3 + brightness * 10);

          particles.push({
            x: x + (Math.random() - 0.5) * 400,
            y: y + (Math.random() - 0.5) * 400,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
            length: lineLength,
            baseAlpha: 0.4 + brightness * 0.6,
            currentAlpha: 0,
            delay: Math.random() * 0.5,
            shimmerOffset: Math.random() * Math.PI * 2,
            shimmerSpeed: 0.5 + Math.random() * 1.5,
          });
          x += lineLength + 3;
        } else {
          x += 3;
        }
      }
    }

    particlesRef.current = particles;
    imageLoadedRef.current = true;
    startTimeRef.current = performance.now();

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      if (!imageLoadedRef.current) return;

      const ps = particlesRef.current;
      const mouse = mouseRef.current;
      const elapsed = (performance.now() - startTimeRef.current) / 1000;

      ps.forEach((p) => {
        const pt = elapsed - p.delay;
        if (pt < 0) return;

        const fade = Math.min(pt / 1.8, 1);
        const easedFade = 1 - Math.pow(1 - fade, 2);
        const shimmer = 0.85 + 0.15 * Math.sin(elapsed * p.shimmerSpeed + p.shimmerOffset);
        p.currentAlpha = p.baseAlpha * easedFade * shimmer;

        const move = Math.min(pt / 3.0, 1);
        const easedMove = 1 - Math.pow(1 - move, 3);

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70 && dist > 0) {
            const force = (1 - dist / 70) * 2.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx += (p.targetX - p.x) * (0.01 + easedMove * 0.08);
        p.vy += (p.targetY - p.y) * (0.01 + easedMove * 0.08);
        p.vx *= 0.91;
        p.vy *= 0.91;
        p.x += p.vx;
        p.y += p.vy;

        ctx.strokeStyle = `rgba(${TEAL}, ${p.currentAlpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();
      });
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };
    const onTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top, active: true };
    };
    const onLeave = () => { mouseRef.current.active = false; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onLeave);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onLeave);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${size.w}px`,
        height: `${size.h}px`,
        cursor: "crosshair",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
};

export default ParticleSilhouette;