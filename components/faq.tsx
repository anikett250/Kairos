"use client";
import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Timeblocker?",
      answer:
        "Timeblocker helps you plan your day realistically, using smart scheduling and built-in focus timers so you can work without feeling overwhelmed."
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! You can sign up for a free trial and explore all the features before deciding on a paid plan."
    },
    {
      question: "Do I need to install anything?",
      answer:
        "No installation required — Timeblocker is fully web-based and works on any modern browser."
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely. You can upgrade, downgrade, or cancel anytime without hidden charges."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-[#11120f] hover:bg-[#1b1b1b] transition-colors flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-300 bg-[#0d0d0d] border-t border-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
