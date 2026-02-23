import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-[#050A18] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F1E3D 1px, transparent 1px), linear-gradient(to bottom, #0F1E3D 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Horizontal Pulse */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
      />

      {/* Center Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-[0.4em] bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,191,255,0.6)]"
        >
          COMING SOON
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10"
        >
          <img
            src="/SPALOGOWHITE.jpeg"
            alt="SparksByAura Logo"
            className="mx-auto max-w-[320px] md:max-w-[420px] object-contain drop-shadow-[0_0_25px_rgba(0,191,255,0.5)]"
          />
          <div className="w-32 h-[1px] bg-cyan-400 mx-auto mt-4 mb-4 opacity-60"></div>
          <p className="text-sm md:text-base tracking-[0.3em] text-cyan-200 uppercase">
            Powering NYC
          </p>
        </motion.div>
      </div>

      {/* Edge Glow */}
      <div className="absolute inset-0 border border-cyan-500 opacity-20 pointer-events-none"></div>
    </div>
  );
}
