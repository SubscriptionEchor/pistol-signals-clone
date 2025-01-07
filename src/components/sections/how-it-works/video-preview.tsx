'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface VideoPreviewProps {
  videoUrl: string;
}

export function VideoPreview({ videoUrl }: VideoPreviewProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Card className="relative aspect-[16/9] overflow-hidden bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-blue-500/20" />

        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse" />

        <Image
          src="/app-preview.png"
          alt="Feature preview"
          fill
          className="object-cover"
        />

        {/* Play button with enhanced styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
