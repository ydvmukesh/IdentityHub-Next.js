'use client'
import { useState } from 'react'
import Link from 'next/link'
import Button from '../common/Button'
import { navigationItems } from '@/utils/common'
import Logo from './Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoChevronForward } from 'react-icons/io5'



const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="mt-3 sticky top-2 z-50">
            <div className="container">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 rounded-xl " aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">

                            <Logo />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <RxHamburgerMenu className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Navigation />
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Button href='/text' title='Start free trial' icon={<IoChevronForward />} />
                    </div>
                </nav>
                {/* Mobile menu, show/hide based on menu open state. */}
                <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                    {/* Background backdrop, show/hide based on slide-over state. */}
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">LOGO</span>
                                <Logo />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <IoMdClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/70">
                                <div className="space-y-2 py-6">
                                    <Navigation className='block' />
                                </div>
                                <div className="py-6">
                                    <Button href='/text' title='Start free trial' icon={<IoChevronForward />} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

// header navigation component



interface NavigationProps {
    className?: string; // Optional className prop
}
const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {

    return (
        <>
            {navigationItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm md:text-base font-normal leading-6 text-gray-300 hover:text-gray-50 ${className}`}

                >
                    {item.label}
                </Link>
            ))}
        </>
    );
}


