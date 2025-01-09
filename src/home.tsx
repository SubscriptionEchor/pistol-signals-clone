import Navbar from './components/layout/navbar';
import { Hero } from './components/sections/hero';
import { Footer } from './components/sections/footer';

function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;