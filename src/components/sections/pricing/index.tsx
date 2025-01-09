{/* Update the gradient classes in the pricing cards */}
<div className={`relative rounded-2xl p-8 transition-colors duration-300 flex flex-col h-full ${
  plan.isPopular
    ? 'bg-gradient-to-br from-[#4F46E5]/10 via-[#6366F1]/10 to-[#8B5CF6]/10 border border-white/20'
    : 'bg-white/5 border border-white/10'
} hover:bg-white/[0.15]`}>
  {plan.isPopular && (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] rounded-full text-sm font-medium">
      Most Popular
    </div>
  )}