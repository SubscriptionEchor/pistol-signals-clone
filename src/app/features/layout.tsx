import { ReactNode } from 'react';
import Navbar from '@/components/layout/navbar';

export default function FeaturesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {children}
    </div>
  );
}