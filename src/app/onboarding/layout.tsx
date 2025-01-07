import { GoogleOAuthProvider } from '@react-oauth/google';
import { configure } from '@/lib/config';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={configure.clientId}>
      <main className="min-h-screen bg-black text-white">
        {children}
      </main>
    </GoogleOAuthProvider>
  );
}