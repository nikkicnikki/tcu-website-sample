import { Menu, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface College {
    name: string;
    link: string;
}

interface HeaderProps {
    colleges: College[];
}

export default function Header({ colleges }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [openAcademics, setOpenAcademics] = useState(false);
    const [openAdmission, setOpenAdmission] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const academicsRef = useRef<HTMLDivElement>(null);
    const admissionRef = useRef<HTMLDivElement>(null);

    // Detect scroll to shrink header
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                academicsRef.current &&
                !academicsRef.current.contains(e.target as Node)
            ) {
                setOpenAcademics(false);
            }
            if (
                admissionRef.current &&
                !admissionRef.current.contains(e.target as Node)
            ) {
                setOpenAdmission(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header
            className={`duration-001 fixed left-0 z-50 w-full transition-all ${
                scrolled
                    ? 'top-0 bg-gradient-to-r from-red-900 to-red-600 shadow-md'
                    : 'top-9 bg-gradient-to-r from-red-900 to-red-600 shadow-md'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                {/* Logo + Title */}
                <div className="flex items-center space-x-3">
                    <a href="/">
                        <img
                            src="/storage/images/tcu.png"
                            alt="TCU Logo"
                            className={`h-20 w-20 object-contain transition-all duration-500 ${
                                scrolled
                                    ? 'rounded-full border-[0.5px] border-white bg-white'
                                    : ''
                            }`}
                        />
                    </a>
                    <div className="flex flex-col">
                        <h1
                            className="text-5xl font-bold tracking-wide text-white"
                            style={{
                                fontFamily: "'Times New Roman', Times, serif",
                            }}
                        >
                            TCU
                        </h1>
                        <span
                            className="text-xs font-light text-white"
                            style={{
                                fontFamily: "'Times New Roman', Times, serif",
                            }}
                        >
                            Taguig City University
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="flex items-center space-x-4">
                    <nav className="hidden space-x-6 lg:flex">
                        <a
                            href="/"
                            className="text-white decoration-2 underline-offset-10 hover:underline"
                        >
                            Home
                        </a>

                        {/* Academics Dropdown */}
                        <div className="relative" ref={academicsRef}>
                            <button
                                onClick={() => {
                                    setOpenAcademics(!openAcademics);
                                    setOpenAdmission(false);
                                }}
                                className="text-white decoration-2 underline-offset-10 hover:underline"
                            >
                                Academics ▾
                            </button>

                            {openAcademics && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white py-2 text-gray-800 shadow-lg">
                                    {colleges.map((college) => (
                                        <a
                                            key={college.name}
                                            href={college.link}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={() =>
                                                setOpenAcademics(false)
                                            }
                                        >
                                            {college.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Admission Dropdown */}
                        <div className="relative" ref={admissionRef}>
                            <button
                                onClick={() => {
                                    setOpenAdmission(!openAdmission);
                                    setOpenAcademics(false);
                                }}
                                className="text-white decoration-2 underline-offset-10 hover:underline"
                            >
                                Admission ▾
                            </button>

                            {openAdmission && (
                                <div className="absolute top-full left-0 mt-2 w-52 bg-white py-2 text-gray-800 shadow-lg">
                                    {[
                                        {
                                            name: 'Freshmen',
                                            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfOII9MxZ5E2rJPE3ghhySBCMtWlqL3PuKCPQcqhFbBQ5CjyQ/closedform',
                                        },
                                        {
                                            name: 'ALS Passers',
                                            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdtUFGeUi7JIV4DAb2LvJmvSg8wJSGO63RSPp2NvOYoR9si_A/closedform',
                                        },
                                    ].map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.link}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={() =>
                                                setOpenAdmission(false)
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a className="text-white hover:underline">Research</a>
                        <a
                            href="/campus-life"
                            className="text-white decoration-2 underline-offset-10 hover:underline"
                        >
                            Campus Life
                        </a>
                        <a className="text-white hover:underline">About</a>
                    </nav>

                    {/* Search + Mobile Menu */}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="z-20 text-white hover:text-red-400"
                    >
                        <Search className="h-7 w-7" />
                    </button>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-25 left-0 w-full bg-gradient-to-r from-red-900 to-red-600 text-white shadow-md lg:hidden">
                    <nav className="flex flex-col items-start space-y-3 px-6 py-4">
                        <a
                            href="/"
                            className="hover:underline"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>

                        <details className="w-full">
                            <summary className="cursor-pointer hover:underline">
                                Academics
                            </summary>
                            <div className="mt-2 ml-4 flex flex-col space-y-1 text-sm">
                                {colleges.map((college) => (
                                    <a
                                        key={college.name}
                                        href={college.link}
                                        className="hover:underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {college.name}
                                    </a>
                                ))}
                            </div>
                        </details>

                        <a className="hover:underline">Admission</a>
                        <a className="hover:underline">Research</a>
                        <a
                            href="/campus-life"
                            className="hover:underline"
                            onClick={() => setMenuOpen(false)}
                        >
                            Campus Life
                        </a>
                        <a className="hover:underline">About</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
