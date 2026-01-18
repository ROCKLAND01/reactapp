import React from 'react'
import { useState } from 'react'
import {Menu,X} from 'lucide-react'
const Navbar = () => {
    const [mobileMenuOpen, setIsmobileMenuOpen] = useState(false);
  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
               <div className='flex items-center space-x-1 cursor-pointer'>
                <div>
                    <img src="logo.png" alt="Rockflow" className='w-6 h-6 sm:h-8' />
                </div>
                <span className='text-lg sm:text-xl md:text-2xl font-medium'>
                    <span className='text-white'>Rock</span>
                    <span className='text-blue-400'>Flow</span>
                </span>
            </div>
            <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                {[
                    { name: 'features', href: '#features' },
                    { name: 'pricing', href: '#pricing' },
                    { name: 'testimonials', href: '#testimonials' }
                ].map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        className='text-gray-400 hover:text-white text-sm lg:text-base transition-colors duration-300 relative group py-2'
                    >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                ))}
            </div>
            <button className='md:hidden p-2 text-gray-300 hover:text-white' onClick={() => setIsmobileMenuOpen(prev => !prev)}>
               {mobileMenuOpen ? ( <X className='w-5 h-5 sm:w-6 sm:h-6'/> ) : ( 
               <Menu className='w-5 h-5 sm:w-6 sm:h-6'/>
               )}
            </button>
         </div>
         {mobileMenuOpen && (
            <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300'>
                <div className='flex flex-col p-4 space-y-2'>
                    {[
                        { name: 'features', href: '#features' },
                        { name: 'pricing', href: '#pricing' },
                        { name: 'testimonials', href: '#testimonials' }
                    ].map((link) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            onClick={() => setIsmobileMenuOpen(false)}
                            className='block px-4 py-3 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-xl text-sm transition-all duration-300 capitalize'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
         )}
        </div>
    </nav>
  )
}

export default Navbar