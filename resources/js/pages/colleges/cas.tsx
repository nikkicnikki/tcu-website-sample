import { Head } from '@inertiajs/react';
import { Menu, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function cas() {
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [openAcademics, setOpenAcademics] = useState(false); // academic navigator header
    const [openAdmission, setOpenAdmission] = useState(false); // admission navigator header

    const academicsRef = useRef<HTMLDivElement>(null);
    const admissionRef = useRef<HTMLDivElement>(null);

    // ✅ Close dropdowns when clicking outside
    // for navigator header
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                academicsRef.current &&
                !academicsRef.current.contains(event.target as Node)
            ) {
                setOpenAcademics(false);
            }
            if (
                admissionRef.current &&
                !admissionRef.current.contains(event.target as Node)
            ) {
                setOpenAdmission(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300); // Show after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScroll(scrollPercent);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const colleges = [
        {
            src: '/storage/images/CAS.png',
            name: 'College of Arts & Sciences',
            link: '/colleges/cas',
        },
        {
            src: '/storage/images/CBM.png',
            name: 'Business & Management',
            link: '/colleges/cbm',
        },
        {
            src: '/storage/images/CCJ.png',
            name: 'Criminal Justice',
            link: '/colleges/ccj',
        },
        {
            src: '/storage/images/CED.png',
            name: 'Education',
            link: '/colleges/ced',
        },
        {
            src: '/storage/images/CHTM.png',
            name: 'Hospitality & Tourism',
            link: '/colleges/chtm',
        },
        {
            src: '/storage/images/CICT.png',
            name: 'Information Technology',
            link: '/colleges/cict',
        },
        {
            src: '/storage/images/GRADSCHOOL.png',
            name: 'Graduate School',
            link: '/colleges/cas',
        },
    ];

    return (
        <div
            className="flex min-h-screen flex-col bg-white"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            // Open Sans, roboto, Montserrat
        >
            <Head title="Taguig City University" />
            {/* progress bar */}
            <div className="fixed top-0 left-0 z-[60] h-1 w-full bg-gray-200">
                <div
                    className="h-1 bg-red-700 transition-all duration-150"
                    style={{ width: `${scroll}%` }}
                ></div>
            </div>

            {/* Top Info Bar */}
            <div className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-sm text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-end space-x-6 overflow-x-auto px-6 py-2">
                    {/* Facebook Icon + TCU */}
                    <a
                        href="https://www.facebook.com/TaguigCityUniversity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex cursor-pointer items-center space-x-1 decoration-2 underline-offset-9 transition hover:underline">
                            <FaFacebookF className="h-4 w-4 text-white" />
                            <span>Taguig City University</span>
                        </div>
                    </a>

                    {/* Phone */}
                    <div className="flex cursor-pointer items-center space-x-1 decoration-2 underline-offset-9 transition hover:underline">
                        <FaPhone className="h-4 w-4 text-white" />
                        <span>8635-8300</span>
                    </div>

                    {/* Address */}
                    <div className="flex cursor-pointer items-center space-x-1 decoration-2 underline-offset-9 transition hover:underline">
                        <FaMapMarkerAlt className="h-4 w-4 text-white" />
                        <span>
                            Gen. Santos Ave. Central Bicutan, Taguig City
                        </span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header
                className={`fixed top-9 left-0 z-50 w-full bg-gradient-to-r from-red-900 to-red-600 shadow-md transition-colors duration-500`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                    {/* Logo + Title */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/storage/images/tcu.png"
                            alt="TCU Logo"
                            className={`h-20 w-20 rounded-full border-[0.5px] border-white bg-white object-contain transition-all duration-500`}
                        />
                        <div className="flex flex-col">
                            <h1
                                className="text-4xl font-bold tracking-wide text-white"
                                style={{
                                    fontFamily:
                                        "'Times New Roman', Times, serif",
                                    // fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                TCU
                                {/* Taguig City University */}
                            </h1>
                            <span
                                className="text-sm font-light text-white"
                                style={{
                                    fontFamily:
                                        "'Times New Roman', Times, serif",
                                    // fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Taguig City University
                                {/* Transforming Excellence into Purpose */}
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav + Search + Hamburger */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation */}
                        <nav className="hidden space-x-6 lg:flex">
                            <a
                                href="/"
                                className="text-white decoration-2 underline-offset-10 hover:underline"
                            >
                                Home
                            </a>

                            {/* Academics Dropdown */}
                            <div className="relative" ref={academicsRef}>
                                <a href="#academics">
                                    <button
                                        onClick={() => {
                                            setOpenAcademics(!openAcademics);
                                            setOpenAdmission(false);
                                        }}
                                        className="text-white decoration-2 underline-offset-10 hover:underline"
                                    >
                                        Academics ▾
                                    </button>
                                </a>

                                {openAcademics && (
                                    <div className="absolute top-full left-0 mt-2 w-72 flex-col bg-white py-2 text-gray-800 shadow-lg">
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
                                    <div className="absolute top-full left-0 mt-2 w-52 flex-col bg-white py-2 text-gray-800 shadow-lg">
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

                            <a
                                href="#research"
                                className="text-white decoration-2 underline-offset-10 hover:underline"
                            >
                                Research
                            </a>

                            <a
                                href="/#about"
                                className="text-white decoration-2 underline-offset-10 hover:underline"
                            >
                                About
                            </a>
                        </nav>

                        {/* Search Button */}
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="z-20 text-white hover:text-red-400 focus:outline-none"
                        >
                            <Search className="h-7 w-7" />
                        </button>

                        {/* Hamburger */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-white decoration-2 underline-offset-2 hover:underline focus:outline-none"
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
                                href="#home"
                                className="decoration-2 underline-offset-10 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>

                            {/* Mobile Academics Dropdown (Dynamic) */}
                            <details className="w-full">
                                <summary className="cursor-pointer decoration-2 underline-offset-10 hover:underline">
                                    Academics
                                </summary>
                                <div className="mt-2 ml-4 flex flex-col space-y-1 text-sm">
                                    {colleges.map((college) => (
                                        <a
                                            key={college.name}
                                            href={college.link}
                                            onClick={() => setMenuOpen(false)}
                                            className="hover:underline"
                                        >
                                            {college.name}
                                        </a>
                                    ))}
                                </div>
                            </details>

                            <a
                                href="#admission"
                                className="decoration-2 underline-offset-10 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Admission
                            </a>
                            <a
                                href="#research"
                                className="decoration-2 underline-offset-10 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Research
                            </a>

                            <a
                                href="#about"
                                className="decoration-2 underline-offset-10 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            {/* Search Modal */}
            {showSearch && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowSearch(false)} // close when clicking outside
                >
                    <div
                        className="relative w-11/12 max-w-md px-4"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                    >
                        {/* Input + Submit */}
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Type in your search..."
                                className="w-full border-b-2 border-gray-300 bg-transparent pb-2 text-white placeholder-white focus:outline-none"
                            />
                            <button className="w-full rounded-lg bg-red-900 px-4 py-2 text-white hover:bg-red-800">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showTopButton && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="fixed right-6 bottom-6 z-50 rounded-full bg-red-700 p-3 text-white shadow-lg transition hover:bg-red-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
