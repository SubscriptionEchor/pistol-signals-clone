import { Navbar } from '@/components/layout/navbar';

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {children}
    </div>
  );
}