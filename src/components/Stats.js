export default function Stats() {
  const stats = [
    { value: '99%', label: 'Signal Accuracy' },
    { value: '24/7', label: 'Market Monitoring' },
    { value: '10ms', label: 'Signal Delivery' },
    { value: '50k+', label: 'Active Traders' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-5xl font-bold text-[#3366FF] mb-2">
            {stat.value}
          </div>
          <div className="text-gray-400 text-lg">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}