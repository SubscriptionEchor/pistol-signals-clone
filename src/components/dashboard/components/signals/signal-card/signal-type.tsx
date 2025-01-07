interface SignalTypeProps {
  type: 'Long' | 'Short';
}

export function SignalType({ type }: SignalTypeProps) {
  return (
    <span className="px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
      {type}
    </span>
  );
}