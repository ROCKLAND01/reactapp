import React from 'react'

const testimonials = [
  {
    quote: "RockFlow has completely transformed how our team manages projects. The interface is intuitive and the speed is incredible.",
    author: "Sarah Chen",
    role: "Product Manager at TechFlow",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "Finally a tool that doesn't get in the way. It's clean, fast, and does exactly what we need it to do.",
    author: "Alex Rivera",
    role: "Senior Developer",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    quote: "The best investment we've made this year. Our productivity has skyrocketed since switching to RockFlow.",
    author: "Jessica Knight",
    role: "CEO at Startup Labs",
    avatar: "https://i.pravatar.cc/150?u=jessica"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Loved by Teams Worldwide</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-300"
            >
              <div className="flex mb-6">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
              </div>
              <p className="text-slate-300 italic mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border border-slate-700"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.author}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials