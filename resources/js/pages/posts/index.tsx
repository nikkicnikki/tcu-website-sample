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

    const { type, posts } = usePage().props;

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

            <div className="min-h-screen bg-white pt-[190px] pb-[190px]">
                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="mb-10 bg-red-900 text-center text-4xl font-bold text-white uppercase shadow-lg">
                        {type === 'news' ? 'News & Updates' : 'Events'}
                    </h1>

                    {posts.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No {type} available at the moment.
                        </p>
                    ) : (
                        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Sort posts by date ascending (oldest → newest) */}
                            {[...posts]
                                .sort(
                                    (a, b) =>
                                        new Date(a.date).getTime() -
                                        new Date(b.date).getTime(),
                                )
                                .map((post) => {
                                    const postDate = new Date(post.date);
                                    const day = postDate.toLocaleString(
                                        'en-US',
                                        { day: '2-digit' },
                                    );
                                    const month = postDate.toLocaleString(
                                        'en-US',
                                        { month: 'short' },
                                    );
                                    const year = postDate.getFullYear();

                                    const today = new Date();
                                    const isActive =
                                        today.toDateString() ===
                                        postDate.toDateString();
                                    const isUpcoming = postDate > today;

                                    // Color logic
                                    const calendarColor = isActive
                                        ? 'bg-green-600'
                                        : isUpcoming
                                          ? 'bg-yellow-500'
                                          : 'bg-red-700';

                                    return (
                                        <a
                                            key={post.id}
                                            href={`/posts/${type}/${post.slug}`}
                                            className="group relative block overflow-hidden bg-white shadow transition-all duration-300 hover:shadow-lg"
                                        >
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                            {/* Calendar-style date box */}
                                            <div className="absolute top-3 left-3 w-14 overflow-hidden rounded-md bg-white text-center shadow-md">
                                                <div
                                                    className={`${calendarColor} px-2 py-1 text-xs font-bold text-white uppercase`}
                                                >
                                                    {month}
                                                </div>
                                                <div className="bg-white px-2 py-1">
                                                    <div className="text-xl leading-none font-extrabold text-gray-800">
                                                        {day}
                                                    </div>
                                                    <div className="text-[10px] text-gray-500">
                                                        {year}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <h2 className="text-lg font-bold text-gray-800">
                                                    {post.title}
                                                </h2>
                                                <p className="mt-1 line-clamp-3 text-sm text-gray-500">
                                                    {post.description}
                                                </p>
                                                <p className="mt-2 text-sm font-medium text-red-700">
                                                    View →
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                        </div>
                    )}
                </div>
            </div>
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
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}
                                >
                                    Taguig City University
                                </h1>
                                <span
                                    className="text-xs font-light text-gray-100 sm:text-sm"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
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
                                <span className="font-semibold">Address: </span>
                                Gen. Santos Ave., Central Bicutan, Taguig City
                            </p>
                            <p>
                                <span className="font-semibold">Phone: </span>
                                8635-8300 | Registrar: 8635-8300 (7204) /
                                0961-887-2644
                            </p>
                            <p>
                                <span className="font-semibold">Email: </span>
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
                    &copy; {new Date().getFullYear()} TCU University. All rights
                    reserved.
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
        </>
    );
}
