"use client";
import { motion } from "framer-motion";

const features = [
    {
        title: "From Chaos to Calendar",
        subtitle: "Automatically arrange your to-dos into a visual daily/weekly calendar. No more wondering “What should I do now?”",
        highlight: "98% stress reduction",
        colSpan: "col-span-2",
    },
    {
        title: "Pomodoro & Beyond",
        subtitle: "Choose between classic Pomodoro, custom focus timers, or deep work sessions. Stay on track without burning out.",
        highlight: "+42% focus boost",
        colSpan: "col-span-1",
    },
    {
        title: "Anxiety-Free Planning",
        subtitle: "See exactly when each task will be done. Replace uncertainty with clarity.",
        highlight: "70% less planning time",
        colSpan: "col-span-1",
    },
    {
        title: "Your Productivity Dashboard",
        subtitle: "Track completed tasks, focus hours, and break patterns to improve your time habits over time.",
        highlight: "Streak tracker included",
        colSpan: "col-span-2",
    },
];

export default function Features() {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8 text-center"
            >
                Master Your Time, Conquer Your Day
            </motion.h1>

            <div className="grid grid-cols-3 gap-6 max-w-6xl w-full">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`${f.colSpan} rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition`}
                    >
                        <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
                        <p className="text-sm text-white/70 mb-4">{f.subtitle}</p>
                        <p className="text-lg font-bold text-green-400">{f.highlight}</p>
                    </motion.div>
                ))}
            </div>

            <p className="mt-8 text-white/50 text-sm">
                Plan it. Time it. Do it. Repeat — with calm confidence.
            </p>
        </section>
    );
}