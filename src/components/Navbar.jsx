import React, {useState} from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

     return ( 
        <nav className='bg-white p-5'> 
            <div className="container mx-auto flex justify-between item-center px-5">
                <a href="#" className='text-gray-900 text-2xl font-bold'>Chisnucha</a> 

                <div className="md:hidden">
                    <button id='menu-toggle' className='text-gray-900' onClick={toggleMenu}>
                        <svg 
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M4 6h16M4 12h16M4 18h16'>  
                            </path>
                        </svg>
                    </button>
                </div>

                <ul className='text-gray-900 font-medium hidden md:flex  space-x-10'> 
                    <li><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Home </a></li> 
                    <li><a href="#" className='relative text-gray-900 hover:text-cyan-500'>About</a></li> 
                    <li><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Services</a></li> 
                    <li><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Contact</a></li> 
                </ul> 

            </div> 

            {isMenuOpen ? (
                <ul className='text-gray-900 font-medium flex-col md:hidden'> 
                    <li className='py-2'><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Home</a></li> 
                    <li className='py-2'><a href="#" className='relative text-gray-900 hover:text-cyan-500'>About</a></li> 
                    <li className='py-2'><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Services</a></li> 
                    <li className='py-2'><a href="#" className='relative text-gray-900 hover:text-cyan-500'>Contact</a></li> 
                </ul>
            ) : null }


        </nav> 
    ) 
} export default Navbar