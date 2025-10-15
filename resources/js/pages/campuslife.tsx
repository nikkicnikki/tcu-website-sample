import Header from '@/components/header';
import { Head, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

interface College {
    name: string;
    link: string;
}

interface Section {
    title: string;
    desc: string;
    images: string[];
}

interface PageProps {
    sections: Section[];
    colleges: College[];
}

export default function CampusLife() {
    const { sections, colleges } = usePage<PageProps>().props;
    const [modalImage, setModalImage] = useState<string | null>(null);

    //** SLIDE SHOW */

    /** end of Slide show */

    const [showTopButton, setShowTopButton] = useState(false);
    const [scroll, setScroll] = useState(0);

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

    return (
        <>
            <Head title="Campus Life" />
            {/* progress bar */}
            <div className="fixed top-0 left-0 z-[60] h-1 w-full bg-gray-200">
                <div
                    className="h-1 bg-red-700 transition-all duration-150"
                    style={{ width: `${scroll}%` }}
                ></div>
            </div>

            {/* Top Info Bar */}

            <div
                className={`fixed left-0 z-40 w-full bg-gray-900 text-sm text-white transition-all duration-500`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-end space-x-6 overflow-x-auto px-6 py-2">
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

                    <div className="flex cursor-pointer items-center space-x-1 decoration-2 underline-offset-9 transition hover:underline">
                        <FaPhone className="h-4 w-4 text-white" />
                        <span>8635-8300</span>
                    </div>

                    <div className="flex cursor-pointer items-center space-x-1 decoration-2 underline-offset-9 transition hover:underline">
                        <FaMapMarkerAlt className="h-4 w-4 text-white" />
                        <span>
                            Gen. Santos Ave. Central Bicutan, Taguig City
                        </span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <Header colleges={colleges} />

            <div className="min-h-screen bg-white pt-[90px]">
                {/* Hero Section */}
                <section className="relative flex h-[700px] items-center justify-center border-b-[5px] border-red-700 text-center text-white sm:h-[700px]">
                    {/* Background image */}
                    <img
                        src="/storage/images/campus-life-banner.jpg" // 🖼️ Change this to your actual image path
                        alt="Campus Life Background"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: 'center 50%' }}
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                    {/* Text content */}
                    <div className="relative z-10 px-6">
                        <h1 className="mb-4 text-4xl font-bold drop-shadow-lg sm:text-5xl md:text-6xl">
                            Campus Life
                        </h1>
                        <p className="mx-auto max-w-2xl text-base drop-shadow-md sm:text-lg md:text-xl">
                            Explore the vibrant student culture, engaging
                            events, and thriving campus community at Taguig City
                            University.
                        </p>
                    </div>
                </section>

                {/* Dynamic Sections */}
                <section className="mx-auto max-w-6xl space-y-20 px-6 py-16">
                    {sections.map((section) => {
                        const [currentIndex, setCurrentIndex] =
                            React.useState(0);
                        const carouselRef = React.useRef(null);
                        const total = section.images.length;

                        const scrollToIndex = (index: number) => {
                            if (carouselRef.current) {
                                const container =
                                    carouselRef.current as HTMLDivElement;
                                const itemWidth = container.scrollWidth / total;
                                container.scrollTo({
                                    left: index * itemWidth,
                                    behavior: 'smooth',
                                });
                                setCurrentIndex(index);
                            }
                        };

                        const handleLeft = () => {
                            const newIndex =
                                currentIndex === 0
                                    ? total - 1
                                    : currentIndex - 1;
                            scrollToIndex(newIndex);
                        };

                        const handleRight = () => {
                            const newIndex =
                                currentIndex === total - 1
                                    ? 0
                                    : currentIndex + 1;
                            scrollToIndex(newIndex);
                        };

                        return (
                            <div key={section.title} className="space-y-6">
                                {/* Title Above */}
                                <div className="text-center">
                                    <h2 className="text-3xl font-extrabold tracking-wide text-gray-900 md:text-4xl">
                                        {section.title}
                                    </h2>
                                    {/* <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-pink-500"></div> */}
                                    <div className="relative mx-auto mt-0 h-1 w-100">
                                        {/* Background line */}
                                        <div className="absolute inset-0 -skew-x-12 transform rounded bg-red-700"></div>
                                        {/* Optional graphic: small white triangle on the line */}
                                        <div className="absolute top-0 right-0 h-1 w-2 rotate-45 bg-white"></div>
                                        <div className="absolute top-0 right-2 h-1 w-2 rotate-45 bg-white"></div>
                                        <div className="absolute top-0 right-4 h-1 w-2 rotate-45 bg-white"></div>

                                        <div className="absolute top-0 left-0 h-1 w-2 rotate-45 bg-white"></div>
                                        <div className="absolute top-0 left-2 h-1 w-2 rotate-45 bg-white"></div>
                                        <div className="absolute top-0 left-4 h-1 w-2 rotate-45 bg-white"></div>
                                    </div>
                                    <p className="relative mx-auto mt-1 max-w-3xl bg-red-900 px-4 text-base text-white md:text-lg">
                                        {section.desc}
                                        <div className="absolute bottom-4 left-[-10px] h-1 w-15 rotate-45 bg-white"></div>
                                        <div className="absolute bottom-1 left-[-10px] h-1 w-15 rotate-45 bg-white"></div>
                                        <div className="absolute bottom-[-15px] left-[-13px] h-3 w-15 rotate-45 bg-white"></div>

                                        <div className="absolute right-[-10px] bottom-4 h-1 w-15 rotate-135 bg-white"></div>
                                        <div className="absolute right-[-10px] bottom-1 h-1 w-15 rotate-135 bg-white"></div>
                                        <div className="absolute right-[-13px] bottom-[-15px] h-3 w-15 rotate-135 bg-white"></div>
                                    </p>
                                </div>

                                {/* Carousel */}
                                <div className="relative h-100 overflow-hidden shadow-lg">
                                    <div
                                        ref={carouselRef}
                                        className="scrollbar-hide flex overflow-x-hidden"
                                    >
                                        {section.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="w-72 flex-shrink-0 cursor-pointer sm:w-80 md:w-96"
                                                onClick={() =>
                                                    setModalImage(img)
                                                }
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${section.title} ${idx + 1}`}
                                                    className="h-100 w-full object-cover transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Left arrow */}
                                    <button
                                        onClick={handleLeft}
                                        className="absolute top-0 bottom-0 left-0 flex w-12 items-center justify-center bg-black/30 text-5xl text-white hover:bg-black/50 sm:text-6xl"
                                    >
                                        {/* &lt; */}
                                    </button>

                                    {/* Right arrow */}
                                    <button
                                        onClick={handleRight}
                                        className="absolute top-0 right-0 bottom-0 flex w-12 items-center justify-center bg-black/30 text-5xl text-white hover:bg-black/50 sm:text-6xl"
                                    >
                                        {/* &gt; */}
                                    </button>

                                    {/* Progress bar */}
                                    <div className="absolute right-0 bottom-0 left-0 mb-2 flex gap-1 px-4">
                                        {section.images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-[2px] flex-1 transition-colors duration-300 ${
                                                    idx === currentIndex
                                                        ? 'bg-red-500'
                                                        : 'bg-white/30'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Image Modal */}
                {modalImage && (
                    <div
                        className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/80"
                        onClick={() => setModalImage(null)}
                    >
                        <img
                            src={modalImage}
                            alt="Full size"
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                        />
                    </div>
                )}

                {/* Contact Section */}
                <section
                    id="contact"
                    className="bg-gradient-to-r from-red-900 to-red-600 px-6 py-10 shadow-md"
                >
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 text-white md:grid-cols-3 md:gap-8">
                        {/* Left Column (Contact Info) */}
                        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
                            {/* Logo and University Name */}
                            <div className="flex flex-col items-center md:flex-row md:space-x-3">
                                <img
                                    src="/storage/images/tcu.png"
                                    alt="TCU Logo"
                                    className="h-20 w-20 object-contain transition-all duration-500"
                                />
                                <div className="mt-3 md:mt-0">
                                    <h1
                                        className="text-xl font-bold tracking-wide text-white sm:text-2xl"
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                        }}
                                    >
                                        Taguig City University
                                    </h1>
                                    <span
                                        className="text-xs font-light text-gray-100 sm:text-sm"
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                        }}
                                    >
                                        Transforming Excellence into Purpose
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="max-w-sm text-xs leading-relaxed text-gray-100 sm:text-sm">
                                {`TCU has garnered national recognition for its myriad of academic and extracurricular achievements. As a young institution, TCU showcases exemplary academic performance in board examinations, affirming its dedication to academic excellence.

Reach out to us for inquiries, admissions, or collaborations.`}
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-1 text-xs sm:text-sm">
                                <p>
                                    <span className="font-semibold">
                                        Address:{' '}
                                    </span>
                                    Gen. Santos Ave., Central Bicutan, Taguig
                                    City
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Phone:{' '}
                                    </span>
                                    8635-8300 | Registrar: 8635-8300 (7204) /
                                    0961-887-2644
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Email:{' '}
                                    </span>
                                    info@tcu-university.edu.ph
                                </p>
                            </div>
                        </div>

                        {/* Middle Spacer (hidden on mobile) */}
                        <div className="hidden md:block"></div>

                        {/* Right Column (Logos) */}
                        <div className="flex flex-col items-center justify-center space-y-6 md:items-end">
                            <img
                                src="/storage/images/iltlogo.png"
                                alt="ILT Logo"
                                className="h-16 w-auto object-contain sm:h-20"
                            />
                            <img
                                src="/storage/images/dpodps.png"
                                alt="DPODPS Logo"
                                className="h-16 w-auto object-contain sm:h-20"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-auto bg-red-700 py-2 text-center text-xs text-white">
                    <p>
                        &copy; {new Date().getFullYear()} TCU University. All
                        rights reserved.
                    </p>
                </footer>

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

            {/* Slide Animation */}
            <style>
                {`
                    @keyframes slide {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-slide {
                        display: flex;
                        width: calc(2 * 100%);
                        animation: slide 40s linear infinite;
                    }
                    
                    /* Add this to your global CSS (e.g., app.css or tailwind.css) */
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                    }

                    
                `}
            </style>
        </>
    );
}
