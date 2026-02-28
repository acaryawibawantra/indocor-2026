"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const navLinks = [
        { name: "About us", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "Blog", href: "#blog" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                <Image
                                    src="/images/logo/logo-besar.svg"
                                    alt="INDOCOR ITS Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="font-uncut-sans font-bold text-xl sm:text-2xl text-gray-800 tracking-tight hidden sm:block">
                                INDOCOR ITS
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-forest font-medium text-[15px] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Dropdown Menu Item */}
                        <div className="relative">
                            <button
                                onClick={() => setIsPagesOpen(!isPagesOpen)}
                                className="flex items-center gap-1 text-gray-600 hover:text-forest font-medium text-[15px] transition-colors focus:outline-none"
                            >
                                All pages <ChevronDown size={16} className={`transition-transform duration-200 ${isPagesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isPagesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 mt-4 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                                    >
                                        <Link href="#page1" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-forest">Page 1</Link>
                                        <Link href="#page2" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-forest">Page 2</Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="#contact"
                            className="bg-[#9FFF66] hover:bg-[#8cee54] text-forest px-6 py-2.5 rounded-sm font-medium text-[15px] transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-forest focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-forest hover:bg-gray-50 rounded-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="px-4 py-3 text-base font-medium text-gray-800">
                                <span className="flex items-center justify-between">
                                    All pages <ChevronDown size={16} />
                                </span>
                                <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-100">
                                    <Link href="#page1" className="block py-2 text-sm text-gray-600">Page 1</Link>
                                    <Link href="#page2" className="block py-2 text-sm text-gray-600">Page 2</Link>
                                </div>
                            </div>
                            <Button
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-6 w-full"
                                variant="primary"
                            >
                                Contact us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
