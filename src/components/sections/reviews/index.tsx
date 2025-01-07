import { ReviewsHeader } from './reviews-header';
import { ReviewsScroll } from './reviews-scroll';

export function Reviews() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black" id="reviews">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '32px 32px' }} 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <ReviewsHeader />
        <div className="space-y-12">
          <ReviewsScroll direction="rtl" />
          <ReviewsScroll direction="ltr" />
        </div>
      </div>
    </section>
  );
}