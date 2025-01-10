import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_AUTH_API_KEY } from '@/lib/config';
import { ReactNode } from 'react';

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_AUTH_API_KEY}>
      <main className="min-h-screen bg-black text-white">
        {children}
      </main>
    </GoogleOAuthProvider>
  );
}