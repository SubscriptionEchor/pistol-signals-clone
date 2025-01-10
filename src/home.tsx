import { Hero } from './components/sections/hero';
import { Features } from './components/sections/features';
import { CryptoSignals } from './components/sections/knowledge-base';
import { OneSimpleShortcut } from './components/sections/one-simple-shortcut';
import { Integrations } from './components/sections/integrations';
import { Documentation } from './components/sections/documentation';
import { Pricing } from './components/sections/pricing';
import { CTA } from './components/sections/cta';
import { Footer } from './components/sections/footer';
import { FAQ } from './components/sections/faq';
import Navbar from './components/layout/navbar';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CryptoSignals />
        <OneSimpleShortcut />
        <Integrations />
        <Documentation />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;