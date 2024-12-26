import React from 'react'

function Hero() {
  return (
    <div className='bg-slate-100 text-gray-900 py-72'>
        <div className='container mx-auto text-center animate-fadeUp'>
            <h1 className='text-5xl font-extrabold'>Welcome To My Website</h1>
            <p className='text-lg mt-8'>This is my Responsive Website with React and Tailwind</p>
            <a href="#" className='bg-gray-700 text-white px-8 py-4 rounded-full mt-8 inline-block hover:bg-cyan-500 transition duration-200 ease'>Get Started</a>
        </div>
    </div>
  )
}

export default Hero