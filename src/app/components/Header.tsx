'use client'
import React, { useState } from 'react';
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-opacity-30 bg-black/60">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link href="/#top" className="text-2xl font-mono text-white py-3">Vitaurus</Link>

                {/* Hamburger Icon */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden flex flex-col justify-center items-center p-2">
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                {/* Navigation Menu */}
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center sm:space-x-10 absolute sm:relative top-full left-0 w-full sm:w-auto bg-black/80 sm:bg-transparent py-5 sm:py-0`}>
                    <ul className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-x-0 sm:space-x-4">
                        <li className="my-1 sm:my-0 w-full text-center"><Link href="/#services" className="text-lg text-white py-2 sm:py-0">Услуги</Link></li>
                        <li className="my-1 sm:my-0 w-full text-center"><Link href="/#about" className="text-lg text-white py-2 sm:py-0">О нас</Link></li>
                        <li className="my-1 sm:my-0 w-full text-center"><Link href="/portfolio" className="text-lg text-white py-2 sm:py-0">Портфолио</Link></li>
                        <li className="my-1 sm:my-0 w-full text-center"><Link href="/#contact" className="text-lg text-white py-2 sm:py-0">Связаться</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
