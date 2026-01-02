import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import useColorSwitcher from '../../utils/useColorSwitcher';

const InteractivePortrait = () => {
  const canvasRef = useRef(null);
  const { secondary } = useColorSwitcher();
  const [particles, setParticles] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Parse hex color to rgb
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 61, g: 221, b: 154 }; // fallback teal
    };

    const color = hexToRgb(secondary || '#3cdd9a');

    // Boy silhouette shape using particles
    class Particle {
      constructor(x, y, originalX, originalY) {
        this.x = x;
        this.y = y;
        this.originalX = originalX;
        this.originalY = originalY;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update(mouseX, mouseY) {
        // Calculate distance from mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          // Push away from mouse
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 3;
          this.vy -= Math.sin(angle) * force * 3;
        }

        // Return to original position
        this.vx += (this.originalX - this.x) * 0.05;
        this.vy += (this.originalY - this.y) * 0.05;

        // Apply friction
        this.vx *= 0.9;
        this.vy *= 0.9;

        // Update position
        this.x += this.vx;
        this.y += this.vy;
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`;
      }
    }

    // Create boy silhouette shape - ATTRACTIVE PROPORTIONS
    const createBoyShape = () => {
      const particleArray = [];
      const spacing = 3.5; // Slightly denser for smoother look

      // Head (circle) - Proportional head
      const headCenterX = width / 2;
      const headCenterY = height * 0.12;
      const headRadius = 35; // Smaller, more proportional head

      for (let angle = 0; angle < Math.PI * 2; angle += 0.08) {
        for (let r = 0; r < headRadius; r += spacing) {
          const x = headCenterX + Math.cos(angle) * r;
          const y = headCenterY + Math.sin(angle) * r;
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Neck - Slim and natural
      for (let y = height * 0.18; y < height * 0.23; y += spacing) {
        for (let x = width / 2 - 8; x < width / 2 + 8; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Shoulders - Broader shoulders
      const shoulderY = height * 0.23;
      for (let x = width / 2 - 50; x < width / 2 + 50; x += spacing) {
        for (let y = shoulderY; y < shoulderY + 8; y += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Upper Torso - Athletic build
      const upperTorsoTop = height * 0.23;
      const upperTorsoBottom = height * 0.45;
      const shoulderWidth = 45;
      const waistWidth = 32;

      for (let y = upperTorsoTop; y < upperTorsoBottom; y += spacing) {
        const progress = (y - upperTorsoTop) / (upperTorsoBottom - upperTorsoTop);
        const currentWidth = shoulderWidth - (shoulderWidth - waistWidth) * progress;
        
        for (let x = width / 2 - currentWidth; x < width / 2 + currentWidth; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Lower Torso - Slim waist to hips
      const lowerTorsoTop = height * 0.45;
      const lowerTorsoBottom = height * 0.58;
      const hipWidth = 38;

      for (let y = lowerTorsoTop; y < lowerTorsoBottom; y += spacing) {
        const progress = (y - lowerTorsoTop) / (lowerTorsoBottom - lowerTorsoTop);
        const currentWidth = waistWidth + (hipWidth - waistWidth) * progress;
        
        for (let x = width / 2 - currentWidth; x < width / 2 + currentWidth; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Arms - Natural, relaxed position
      const armTop = height * 0.25;
      const armBottom = height * 0.55;
      
      // Left arm
      for (let y = armTop; y < armBottom; y += spacing) {
        const progress = (y - armTop) / (armBottom - armTop);
        const armX = width / 2 - 48 - progress * 8; // Slight angle
        const armThickness = 6 - progress * 1; // Tapers toward hand
        
        for (let x = armX - armThickness; x < armX + armThickness; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Right arm
      for (let y = armTop; y < armBottom; y += spacing) {
        const progress = (y - armTop) / (armBottom - armTop);
        const armX = width / 2 + 48 + progress * 8; // Slight angle
        const armThickness = 6 - progress * 1; // Tapers toward hand
        
        for (let x = armX - armThickness; x < armX + armThickness; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Legs - Long, slim, athletic
      const legTop = height * 0.58;
      const legBottom = height * 0.95;

      // Left leg - tapers toward ankle
      for (let y = legTop; y < legBottom; y += spacing) {
        const progress = (y - legTop) / (legBottom - legTop);
        const legWidth = 12 - progress * 4; // Gets slimmer
        const legX = width / 2 - 20;
        
        for (let x = legX - legWidth; x < legX; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      // Right leg - tapers toward ankle
      for (let y = legTop; y < legBottom; y += spacing) {
        const progress = (y - legTop) / (legBottom - legTop);
        const legWidth = 12 - progress * 4; // Gets slimmer
        const legX = width / 2 + 20;
        
        for (let x = legX; x < legX + legWidth; x += spacing) {
          if (Math.random() > 0.25) {
            particleArray.push(new Particle(x, y, x, y));
          }
        }
      }

      return particleArray;
    };

    const particleArray = createBoyShape();
    setParticles(particleArray);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particleArray.forEach(particle => {
        particle.update(mousePos.current.x, mousePos.current.y);
        particle.draw(ctx);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Mouse leave handler - reset to far away
    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [secondary]);

  return (
    <Box
      position="relative"
      width={{ base: "100%", lg: "350px", xl: "400px" }}
      height={{ base: "350px", md: "400px", lg: "450px", xl: "500px" }}
    >
      <canvas
        ref={canvasRef}
        width={400}
        height={500}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'crosshair'
        }}
      />
    </Box>
  );
};

export default InteractivePortrait;