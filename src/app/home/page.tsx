"use client"
import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden w-full">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url(https://pbs.twimg.com/media/Glt9EvQbgAAoFED?format=jpg&name=large)" }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      />

      {/* Header */}
      <header className="text-center py-10 w-full">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          InRequiem
        </motion.h1>
        <motion.p 
          className="text-gray-400 mt-4 text-base sm:text-lg max-w-full sm:max-w-2xl mx-auto" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience performance telemetry without expensive sensors—just your smartphone.
        </motion.p>
      </header>

      {/* Sections */}
      <section className="mt-10 max-w-full sm:max-w-2xl md:max-w-4xl text-center px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Analyze Every Drive
        </motion.h2>
        <motion.p 
          className="text-gray-300 mt-4 text-sm sm:text-lg" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Measure real-time speed, distance, top speed, and acceleration (0-100 km/h). 
          Advanced features like G-force measurement, braking efficiency, and lap timing coming soon!
        </motion.p>
      </section>

      <section className="mt-10 max-w-full sm:max-w-2xl md:max-w-4xl text-center px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Join or Create a Crew
        </motion.h2>
        <motion.p 
          className="text-gray-300 mt-4 text-sm sm:text-lg" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Build your crew, track performance, and compete against others. 
          Rank up based on driving skills and strategy. 
          Climb both individual and crew leaderboards!
        </motion.p>
      </section>

      <section className="mt-10 max-w-full sm:max-w-2xl md:max-w-4xl text-center px-4">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          No Equipment Needed
        </motion.h2>
        <motion.p 
          className="text-gray-300 mt-4 text-sm sm:text-lg" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Forget expensive sensors—your smartphone’s GPS and accelerometer do the job. 
          Accurate, real-time telemetry at your fingertips.
        </motion.p>
      </section>

      {/* Empty Motion Section Placeholder */}
      <motion.section 
        className="mt-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
      </motion.section>

    </div>
  );
}
