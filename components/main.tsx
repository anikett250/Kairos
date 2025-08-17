"use client";
import React from "react";
import { motion, scale } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
    return (
        <div className="bg-black flex flex-col min-h-screen">
            {/* Navbar */}
            <header className="flex justify-between items-center px-8 py-5">
                <div className="text-2xl font-bold text-white">Kairos</div>
                <nav className="hidden font-[600] md:flex space-x-8 bg-[#11120f] rounded-full pt-[10px] pb-[10px] pr-[20px] pl-[20px] text-gray-300">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                    <a href="#login">Login</a>
                </nav>
                <button className="font-[550] text-white px-4 py-2 rounded-full">
                    Create Account
                </button>
            </header>

            {/* Hero Section */}
            <main className="relative flex flex-col flex-grow items-center justify-center text-center px-4 overflow-hidden">

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-medium text-white mb-4">
                        <Typewriter
                            words={[
                                "Beat Time Anxiety",
                                "Organize. Don’t Stress.",
                                "Focus. Plan. Win.",
                                "Plan. Track. Achieve.",
                            ]}
                            loop={true}         // keeps cycling
                            cursor
                            cursorStyle="|"     // blinking cursor
                            typeSpeed={70}      // typing speed
                            deleteSpeed={50}    // deleting speed
                            delaySpeed={2000}   // pause before deleting
                        />
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                        Drop your tasks. Get a realistic plan. Stay on track with built-in
                        focus timers — and no guilt if plans change.
                    </p>
                    <div className="flex gap-[10px] justify-center">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                opacity: { duration: 0.8, ease: "easeOut" }, // only affects fade-in
                            }}
                            whileTap={{
                                scale: 0.85,
                                transition: { duration: 0.15 }, // instant shrink
                            }}
                            className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-white text-black font-[600] rounded-full"
                        >
                            Get Early Access
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                opacity: { delay: 0.1, duration: 0.8, ease: "easeOut" }, // only affects fade-in
                            }}
                            whileTap={{
                                scale: 0.85,
                                transition: { duration: 0.15 }, // instant shrink
                            }}
                            className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#1b1b1b] text-white font-[600] rounded-full"
                        >
                            See How It Works
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    );
}
