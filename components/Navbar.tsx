"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-white/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900 transition hover:opacity-80"
                >
                    Event<span className="text-blue-600">Flow</span>
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/sign-in"
                        className="ml-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/sign-up"
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center rounded-full p-2 text-gray-800 transition hover:bg-gray-100 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${
                    isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
                }`}
            >
                <div className="space-y-2 px-4 py-4 bg-white/95 backdrop-blur-md">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-2 pt-2">
                        <Link
                            href="/sign-in"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/sign-up"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}