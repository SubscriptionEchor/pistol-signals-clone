'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowItWorksContentProps {
  title: string;
  description: string;
}

export function HowItWorksContent({ title, description }: HowItWorksContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-left space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-3xl font-bold gradient-text">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      </div>
      
      <Button className="gradient-bg hover:opacity-90 mt-6">
        Learn more <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
}