import React from 'react'
import { Zap, Shield, Smartphone, Globe, BarChart, Users } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance, ensuring a smooth experience for your entire team."
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    title: "Enterprise Security",
    description: "Advanced encryption and security protocols to keep your data safe and compliant."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-pink-500" />,
    title: "Mobile Ready",
    description: "Access your workflow from anywhere, on any device, with our fully responsive platform."
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    title: "Global Scale",
    description: "Built to support teams of all sizes, from small startups to global enterprises."
  },
  {
    icon: <BarChart className="w-6 h-6 text-orange-500" />,
    title: "Real-time Analytics",
    description: "Gain valuable insights into your workflow with our comprehensive analytics dashboard."
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-500" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in tools for communication and collaboration."
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Powerful Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to manage your projects and grow your business in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features