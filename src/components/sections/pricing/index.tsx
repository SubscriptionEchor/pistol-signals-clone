// Update the Button onClick handler in the pricing section
<Button
  onClick={() => navigate('/payment', { 
    state: { 
      plan: {
        id: index,
        name: plan.name,
        price: plan.price,
        period: plan.period
      }
    }
  })}
  variant="gradient"
  className="w-full"
>
  Get Started
</Button>