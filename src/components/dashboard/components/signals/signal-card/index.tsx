import { GradientCard } from '@/components/ui/gradient-card';
import { SignalHeader } from './header';
import { SignalMetrics } from './metrics';
import { SignalFooter } from './footer';
import type { SignalCardProps } from './types';

const WatermarkPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-widest opacity-[0.04] ">
          <img src="/assets/favicons/apple-touch-icon.png" alt="Logo" className="h-9" />
          Pistol Signals
        </div>
      </div>
    </div>
  );
};
const Shimmer: React.FC = () => {
  return (
    <div className="relative p-1 overflow-hidden  rounded-lg animate-pulse">
      <div className='flex justify-between items-center mb-5'>
        <div className="h-4 bg-zinc-700 rounded mb-3 py-6 w-1/3"></div>
        <div className="h-4 bg-zinc-700 rounded mb-3 py-4 w-1/3"></div>
      </div>
      <div className="h-5 bg-zinc-700 py-6 rounded mb-3 w-3/4"></div>
      <div className="h-5 bg-zinc-700  py-6 mb-4 rounded mb-3 w-3/4"></div>
      <div className="flex justify-between mt-6">
        <div className="h-5 bg-zinc-700 px-16 py-8 rounded w-1/4"></div>
        <div className="h-5 bg-zinc-700 px-16  w-50 py-8 rounded w-1/4"></div>
      </div>
      <div className="h-18 bg-zinc-700 rounded mt-3"></div>
    </div>
  );
};



interface SignalCardPropsWithLoading extends SignalCardProps {
  loading: boolean;
}

export function SignalCard(props: SignalCardPropsWithLoading) {

  return (
    <GradientCard>
      <div className="relative p-6 overflow-hidden">
        <WatermarkPattern />
        {props?.loading ? <Shimmer /> :
          <div className="relative z-10">
            <SignalHeader
              coin={props.coin}
              symbol={props.symbol}
              image={props.image}
              timestamp={props.timestamp}
              type={props.signalType}
            />

            <SignalMetrics
              entry={props.entry}
              exit={props.exit}
            />

            <SignalFooter
              stopLoss={props.stop_loss}
              leverage={props.leverage}
              type={props.signalType}
            />
          </div>}
      </div>
    </GradientCard>
  );
}