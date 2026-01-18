import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individuals and small side projects.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB Storage"
    ],
    cta: "Start for free",
    highlighted: false
  },
  {
    name: "Pro",
    price: "29",
    description: "Ideal for growing teams and scaling startups.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority email support",
      "10GB Storage",
      "Custom domains"
    ],
    cta: "Get Started Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large organizations with advanced needs.",
    features: [
      "Unlimited Everything",
      "24/7 Dedicated support",
      "SSO & Security",
      "Unlimited Storage",
      "Custom onboarding"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that's right for you and start building today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted 
                ? 'bg-slate-900 border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10' 
                : 'bg-slate-900/50 border-slate-800'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlighted 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing