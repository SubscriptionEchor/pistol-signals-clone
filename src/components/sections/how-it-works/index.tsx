'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Step 1: Plan your week/day',
    description: 'Start by organizing your tasks and setting priorities for maximum productivity.',
    videoUrl: '/videos/step1.mp4'
  },
  {
    title: 'Step 2: Go into Focus mode',
    description: 'Eliminate distractions and concentrate on your most important tasks.',
    videoUrl: '/videos/step2.mp4'
  },
  {
    title: 'Step 3: Get momentum',
    description: 'Build a steady rhythm and maintain your productive flow state.',
    videoUrl: '/videos/step3.mp4'
  },
  {
    title: 'Step 4: Win the day & relax',
    description: 'Accomplish your goals and enjoy well-deserved rest.',
    videoUrl: '/videos/step4.mp4'
  }
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id='how-it-works' className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            So how does it work?
          </h2>
        </motion.div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-4 max-w-full">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm whitespace-nowrap transition-all duration-300",
                  activeStep === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Preview Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden border border-gray-800">
              {/* Window Header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0D0D0D] flex items-center px-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Window Content */}
              <div className="absolute inset-0 pt-8">
                <video
                  key={steps[activeStep].videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={steps[activeStep].videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Description Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg text-white">{steps[activeStep].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}