import { useState } from "react";

import Button from "./Button";

import Logo from "../assets/logo.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-12">
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[103px] h-[35px]"
              loading="lazy"
            />
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            <motion.a
              href="#products"
              className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#solutions"
              className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Solutions
            </motion.a>
            <motion.a
              href="#pricing"
              className="w-[85px] h-[48px] flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Pricing
            </motion.a>
            <div className="relative group w-[85px] h-[48px] flex items-center justify-center">
              <button
                className="flex items-center justify-center text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </button>
              <div className="absolute left-0 top-full mt-2 w-40 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Resource 1
                </motion.a>
                <motion.a
                  href="#resource2"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Resource 2
                </motion.a>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#login"
              className="text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Log In
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button>Sign Up Now</Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t"
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-4 space-y-4">
            <motion.a
              href="#products"
              className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#solutions"
              className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Solutions
            </motion.a>
            <motion.a
              href="#pricing"
              className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Pricing
            </motion.a>
            <div>
              <span className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]">
                Resources
              </span>
              <div className="ml-4 mt-2 space-y-2">
                <motion.a
                  href="#resource1"
                  className="block text-[#0F172A] hover:bg-gray-100 px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Resource 1
                </motion.a>
                <motion.a
                  href="#resource2"
                  className="block text-[#0F172A] hover:bg-gray-100 px-2 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Resource 2
                </motion.a>
              </div>
            </div>
            <motion.a
              href="#login"
              className="block text-[#0F172A] font-roboto font-medium text-[16px] leading-6 tracking-[0.5px]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Log In
            </motion.a>
            <Button className="w-full text-center">Sign Up Now</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
