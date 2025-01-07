import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center bg-[#1A1F2D] rounded-full px-5 py-2.5 mb-12">
          <span className="text-[#3366FF] font-medium">Powered by Advanced AI</span>
          <ArrowRight className="w-5 h-5 ml-2 text-[#3366FF]" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white">AI-Powered Signals, </span>
          <span className="bg-gradient-to-r from-[#3366FF] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
            Simplifying Trading
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let AI handle the complexity of technical analysis—receive tailored
          signals and make informed trading decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/signup"
            className="bg-[#3366FF] hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition flex items-center w-full sm:w-auto justify-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            href="/demo"
            className="bg-[#1A1F2D] hover:bg-[#252B3B] text-white px-8 py-4 rounded-lg text-lg font-medium transition w-full sm:w-auto text-center"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
}