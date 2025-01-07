'use client'
import StaticHeader from '@/components/StaticHeader';
import StaticFooter from '@/components/staticFooter';
import Image from 'next/image';
import './features.scss';

export default function FeaturesPage() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze market patterns 24/7',
      icon: '/svg/brain.svg'
    },
    {
      title: 'Real-time Signals',
      description: 'Get instant notifications for market movements and trading opportunities',
      icon: '/svg/signal.svg'
    },
    {
      title: 'Risk Management',
      description: 'Built-in risk assessment and position sizing recommendations',
      icon: '/svg/shield.svg'
    }
  ];

  return (
    <div className="features-page">
      <StaticHeader />
      
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section text-center py-5">
          <h1 className="features-title">Powerful Features for Smarter Trading</h1>
          <p className="features-subtitle">
            Discover our comprehensive suite of trading tools designed to give you the edge in the market
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid row">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="feature-card p-4">
                <div className="icon-container p-3 rounded mb-3">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={40} 
                    height={40}
                  />
                </div>
                <h3 className="feature-title mb-3">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Features Section */}
        <div className="advanced-features py-5">
          <h2 className="section-title text-center mb-5">Advanced Trading Features</h2>
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="feature-highlight p-4">
                <h3 className="highlight-title mb-3">Market Analysis</h3>
                <p className="highlight-description">
                  Our AI algorithms analyze vast amounts of market data to provide you with accurate, 
                  timely trading signals.
                </p>
                <button className="get-started-btn mt-4">
                  Start Trading Now
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <div className="feature-preview p-4">
                {/* Add feature preview/demo content */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StaticFooter />
    </div>
  );
}