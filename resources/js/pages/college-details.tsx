import Header from '@/components/header';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

interface College {
    name: string;
    description: string;
    logo: string;
    image: string;
    featuredImage: string;
    objective: string[];
    courses: {
        name: string;
        description: string[];
        tags: string[];
        details: {
            name: string;
            content: string[];
        }[];
    }[];
}

interface Props {
    college: College;
}

export default function CollegeDetails({ college, colleges }) {
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

    // ✅ Define selectedCourse with proper typing
    const [selectedCourse, setSelectedCourse] = useState<
        College['courses'][0] | null
    >(null);

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

            <div className="mt-30 min-h-screen bg-gray-100">
                {/* Hero Section */}
                <section className="relative h-130 bg-white">
                    {/* Campus Building Image */}
                    <img
                        src={college.image}
                        alt={college.name}
                        className="pointer-events-none absolute bottom-0 left-0 h-200 w-auto opacity-40"
                    />
                    <img
                        src={college.image}
                        alt={college.name}
                        className="pointer-events-none absolute right-0 bottom-0 h-200 w-auto -scale-x-100 opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        {/* Logo */}
                        <img
                            src={college.logo}
                            alt={`${college.name} Logo`}
                            className="mb-6 h-28 w-28 rounded-full border-4 border-red-700 object-contain shadow-lg"
                        />
                        <h2 className="mb-4 text-4xl font-bold text-red-700 md:text-5xl">
                            {college.name}
                        </h2>
                        <p className="max-w-3xl text-gray-700">
                            {college.description}
                        </p>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="relative flex justify-center bg-white py-12">
                    <img
                        src={college.featuredImage}
                        alt="Faculty"
                        className="absolute -top-20 max-w-4xl bg-red-900 p-2 shadow-lg"
                    />
                </section>

                {/* Objectives */}
                <section
                    id="objectives"
                    className="bg-white px-4 pt-100 pb-12 md:px-20"
                >
                    <h2 className="mb-6 text-3xl font-bold text-red-700">
                        Objectives
                    </h2>
                    <ul className="list-inside list-disc space-y-2 text-gray-700">
                        {college.objective.map((obj, idx) => (
                            <li key={idx}>{obj}</li>
                        ))}
                    </ul>
                </section>

                {/* Courses */}
                <section
                    id="courses"
                    className="bg-gray-50 px-4 py-12 md:px-20"
                >
                    <h2 className="mb-6 text-3xl font-bold text-red-700">
                        Courses
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {college.courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="cursor-pointer bg-white p-6 shadow-md transition hover:shadow-lg"
                                onClick={() => setSelectedCourse(course)} // ✅ works perfectly
                            >
                                <h3 className="mb-2 text-2xl font-semibold text-red-700">
                                    {course.name}
                                </h3>

                                {/* Handle string or array description safely */}
                                <p className="line-clamp-3 text-gray-700">
                                    {Array.isArray(course.description)
                                        ? course.description[0]
                                        : course.description}
                                </p>

                                {/* Render tags if available */}
                                {course.tags?.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {course.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="rounded bg-red-100 px-2 py-1 text-sm text-red-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* ✅ Show nested details like "Careers", "Objectives", etc. */}
                                {course.details?.length > 0 && (
                                    <div className="mt-4 border-t border-gray-200 pt-4">
                                        {course.details.map((detail, i) => (
                                            <div key={i} className="mb-3">
                                                <h4 className="font-semibold text-gray-800">
                                                    {detail.name}
                                                </h4>
                                                {Array.isArray(
                                                    detail.content,
                                                ) ? (
                                                    <ul className="list-inside list-disc text-sm text-gray-700">
                                                        {detail.content.map(
                                                            (item, k) => (
                                                                <li key={k}>
                                                                    {item}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                ) : (
                                                    <p className="text-sm text-gray-700">
                                                        {detail.content}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Course Modal */}
                {selectedCourse && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                        onClick={() => setSelectedCourse(null)}
                    >
                        <div
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-2xl font-bold text-red-700"
                                onClick={() => setSelectedCourse(null)}
                            >
                                &times;
                            </button>

                            {/* Course Title */}
                            <h2 className="mb-2 text-3xl font-bold text-red-700">
                                {selectedCourse.name}
                            </h2>

                            {/* ✅ Tags Section */}
                            {selectedCourse.tags?.length > 0 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {selectedCourse.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Course Description */}
                            {selectedCourse.description.map((desc, i) => (
                                <p key={i} className="mb-4 text-gray-700">
                                    {desc}
                                </p>
                            ))}

                            {/* Course Details */}
                            {selectedCourse.details.map((detail, i) => (
                                <div key={i} className="mb-4">
                                    <h3 className="mb-2 text-xl font-semibold text-red-600">
                                        {detail.name}
                                    </h3>
                                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                                        {detail.content.map((content, j) => (
                                            <li key={j}>{content}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
        </div>
    );
}
