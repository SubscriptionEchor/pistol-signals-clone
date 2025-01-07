import Navbar from './components/layout/navbar';
import { Hero } from './components/sections/hero';
import { Features } from './components/sections/features';
import { Stats } from './components/sections/stats';
import { MarketOverview } from './components/sections/market-overview';
import { VideoSection } from './components/sections/video-section';
import { Testimonials } from './components/sections/testimonials';
import { Pricing } from './components/sections/pricing';
import { TelegramSignals } from './components/sections/telegram-signals';
import { CTA } from './components/sections/cta1';
import { Footer } from './components/sections/footer';
import { HowItWorksSection } from './components/sections/how-it-works';
// import MarketOverview from './components/sections/market-overview';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        {/* <HowItWorksSection /> */}
        <MarketOverview />
        <Features />
        <TelegramSignals />
        {/* <VideoSection /> */}
        <Testimonials />
        <Pricing />
        {/* <CTA /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;