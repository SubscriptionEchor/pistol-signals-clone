'use client';

import { Features } from '@/components/features';
import { Container } from '@/components/ui/container';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smarter Trading
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of trading tools and features designed to give you the edge in the market.
          </p>
        </div>
        <Features />
      </Container>
    </main>
  );
}