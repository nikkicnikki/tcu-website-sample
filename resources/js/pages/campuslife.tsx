import Header from '@/components/header';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
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

            <div className="min-h-screen bg-gray-100 pt-32">
                {/* Hero Section */}
                <section className="relative bg-white py-20 text-center text-red-900">
                    <h1 className="mb-4 text-5xl font-bold">Campus Life</h1>
                    <p className="mx-auto max-w-2xl text-lg">
                        Explore the vibrant student culture, engaging events,
                        and thriving campus community at Taguig City University.
                    </p>
                </section>

                {/* Dynamic Sections */}
                <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="relative h-150 overflow-hidden shadow-lg"
                        >
                            <div className="animate-slide flex">
                                {[...section.images, ...section.images].map(
                                    (img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${section.title} ${idx + 1}`}
                                            className="h-150 w-full flex-shrink-0 cursor-pointer object-cover"
                                            style={{
                                                width: `${100 / section.images.length}%`,
                                            }}
                                            onClick={() => setModalImage(img)}
                                        />
                                    ),
                                )}
                            </div>

                            {/* Overlay */}
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h2 className="mb-2 text-3xl font-bold drop-shadow-lg md:text-4xl">
                                    {section.title}
                                </h2>
                                <p className="text-lg drop-shadow-md md:text-xl">
                                    {section.desc}
                                </p>
                            </div>
                        </div>
                    ))}
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
                        animation: slide 30s linear infinite;
                    }
                `}
            </style>
        </>
    );
}
