import React from "react";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import MobileBottomNav from "./components/Navbar/MobileBottomNav";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      >
        <Box
          maxW="1400px"
          mx="auto"
          px={{ base: "20px", md: "40px", lg: "60px", xl: "80px" }}
          pb={{ base: "80px", md: "0" }} // Add padding bottom on mobile for bottom nav
        >
          <Navbar />
          <AnimatedRoutes />
        </Box>
        
        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
      </motion.div>
      <Analytics />
    </>
  );
}

export default App;