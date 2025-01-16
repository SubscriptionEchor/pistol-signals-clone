import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Stats Section */}
      <section className="py-24">
        <Stats />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Why Choose AI Technical Analyst?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Analysis',
                description:
                  'Get instant market insights powered by advanced AI algorithms.',
              },
              {
                title: 'High Accuracy',
                description:
                  'Benefit from our 99% signal accuracy rate backed by machine learning.',
              },
              {
                title: '24/7 Support',
                description:
                  'Access round-the-clock support from our expert team.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1F2D] rounded-2xl p-8 hover:bg-[#252B3B] transition"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#1A1F2D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of traders who are already using AI Technical Analyst to
            make data-driven trading decisions.
          </p>
          <a
            href="/trial"
            className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-medium inline-flex items-center transition"
          >
            Try Now Free
          </a>
        </div>
      </section>
    </main>
  );
}
