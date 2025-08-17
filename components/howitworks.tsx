'use client';
import { CheckCircle, Clock, Target } from "lucide-react";

export default function StepsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Add Your Tasks</h3>
            <p className="text-gray-400">
              Simply drop in everything you need to do — big or small — into the app.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Get a Realistic Plan</h3>
            <p className="text-gray-400">
              Our smart scheduler creates a plan that fits your day without overloading you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <Target className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Stay on Track</h3>
            <p className="text-gray-400">
              Follow the built-in focus timers and adjust tasks with zero guilt if things change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
