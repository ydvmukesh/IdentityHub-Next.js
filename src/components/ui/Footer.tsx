import Link from 'next/link'
import { footerMenu, socialLinks } from '@/utils/common'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            {footerMenu.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="mx-2 sm:mx-3 my-2 text-xs font-semibold te text-slate-300 hover:text-gray-50 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-800  pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0 text-slate-300 text-xs sm:text-sm">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
            <div className="flex space-x-4">
            {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-gray-50  w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full flex  items-center justify-center bg-[#1B1530]  p-2 sm:p-0"
        >
          <link.icon size={17} />  {/* Render the component */}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

