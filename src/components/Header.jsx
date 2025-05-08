import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button'; // <-- Aqui importa o componente Button

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo + Menu */}
        <div className="flex items-center gap-12">
          <img src={Logo} alt="Logo" className="w-[103px] h-[35px]" />

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Products
            </a>
            <a href="#solutions" className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Solutions
            </a>
            <a href="#pricing" className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Pricing
            </a>
            <div className="relative group w-[85px] h-[48px] flex items-center justify-center">
              <button className="flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
                Resources
              </button>
              <div className="absolute left-0 top-full mt-2 w-40 bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#resource1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Resource 1</a>
                <a href="#resource2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Resource 2</a>
              </div>
            </div>
          </nav>
        </div>

        {/* Login + Signup + Mobile Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Log In
            </a>
            {/* Botão Sign Up usando o componente */}
            <Button>
              Sign Up Now
            </Button>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <a href="#products" className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Products
            </a>
            <a href="#solutions" className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Solutions
            </a>
            <a href="#pricing" className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Pricing
            </a>
            <div>
              <span className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
                Resources
              </span>
              <div className="ml-4 mt-2 space-y-2">
                <a href="#resource1" className="block text-[#0F172A] hover:bg-gray-100 px-2 py-1 rounded">
                  Resource 1
                </a>
                <a href="#resource2" className="block text-[#0F172A] hover:bg-gray-100 px-2 py-1 rounded">
                  Resource 2
                </a>
              </div>
            </div>
            <a href="#login" className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
              Log In
            </a>
            <Button className="w-full text-center">
              Sign Up Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
