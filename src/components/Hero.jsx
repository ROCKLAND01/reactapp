import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full text-sm text-blue-400 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Version 2.0 is now live</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Streamline Your Workflow <br className="hidden md:block" />
          <span className="text-blue-500">with RockFlow</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one platform for modern teams to collaborate, build, and scale faster than ever before. Experience the future of work today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg shadow-blue-600/25">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
            View Demo
          </button>
        </div>

        {/* Hero Image Mockup Placeholder */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10"></div>
          <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-2xl backdrop-blur-sm shadow-2xl">
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 aspect-video md:aspect-[21/9] flex items-center justify-center">
                    <div className="text-slate-500 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin mb-4"></div>
                        <p>Dashboard Preview Loading...</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero