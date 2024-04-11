import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-opacity-30 bg-black/60">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link href="/#top" className="text-2xl font-mono text-white py-3">Vitaurus</Link>
                <nav>
                    <ul className="flex space-x-10">
                        <li><Link href="/#services" className="text-lg text-white">Услуги</Link></li>
                        <li><Link href="/#about" className="text-lg text-white">О нас</Link></li>
                        <li><Link href="/portfolio" className="text-lg text-white">Портфолио</Link></li>
                        <li><Link href="/#contact" className="text-lg text-white">Связаться</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;