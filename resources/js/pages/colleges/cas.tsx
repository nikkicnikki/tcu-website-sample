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
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

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
            logo: '/storage/images/CAS.png',
            name: 'College of Arts & Sciences',
            description:
                'The Arts and the Sciences have been the foundation of college education for centuries. This is the college that can blend basic sciences, arts and the humanities. It offers liberal education courses like the general education courses which integrate learning across the curriculum, and between academic and experiential learning. Studying the arts and sciences can expose an individual to the ideas and cultures of people from across and around the world, from ancient times until today.',
            courses: [
                {
                    name: 'Bachelor of Science in Psychology',
                    description: [
                        'Psychology is the scientific study of behavior and mental processes. In general, the emphasis is on the individual person and how the person’s mental processes and behavior are affected by internal, relational, and social factors. Psychology as a discipline and professional practice contributes to national development through basic and applied research and interventions aimed at solving problems and promoting optimal development and functioning at the individual, family, group, organizations/institutions, community, and national levels.',
                        'The undergraduate programs in psychology prepare students for jobs that may involve training, testing, and research, and provide preparation for graduate studies in psychology. Furthermore, it provides preparation for other professions such as medicine, law, and business management.',
                    ],
                    tags: [
                        'psychology',
                        'behavioral-science',
                        'mental-health',
                        'research',
                        'counseling',
                    ],
                    details: [
                        {
                            name: 'Learning Experiences',
                            content: [
                                'Students will be exposed to a wide range of specialized topics and acquire knowledge of a wide range of psychological principles and empirically validated procedures. The application of skills and core knowledge will be developed and honed in advanced seminars and independent study experiences.',
                                'Students seeking careers in psychology will be prepared in several ways. Those aspiring to graduate education in the field will receive sufficient broad training in course work and research experience to succeed in gaining admission to outstanding graduate programs in their field of interest. Students seeking entry level research positions in the field will become sufficiently well versed in the basic principles of conducting research to be competitive for positions in a wide range of labs.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Public Administration',
                    description: [
                        'A degree program that prepares people for careers in public administration and governance for the public interest. It is also a formation course for students who want to devout their life to public services.',
                        'The government being the country’s largest employer needs to have a continuing supply of personnel who will be committed and dedicated public servants. At the same time, civil society organizations need staff and volunteers imbued with the same values who can head and manage their advocacy and service delivery programs to pursue causes directed for the public good.',
                    ],
                    tags: [
                        'governance',
                        'public-service',
                        'policy',
                        'management',
                        'administration',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To familiarize students with the mechanisms operating in the major political institutions and agencies for the creation and implementation of public policies.',
                                'To actively engage in the policymaking process, including expert communities, interest groups, the media, agency bureaucrats, and elected officials.',
                                'To familiarize students on with the dominant ideas presently used in the social sciences for understanding the impetus for the creation of public policy and the means for its successful implementation.',
                                'To apply this understanding of the various components of social policy making to effectively introduce new aspects to the existing consideration of a specific area of recent public policy interest.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Social Work',
                    description: [
                        'Social Work Education in the undergraduate level shall be geared towards the preparation of students for generalist social work practice. Professional education in social work requires the acquisition and application of beginning level of knowledge, attitudes, values and skills in enhancing the social functioning of individuals, families, groups, and communities, linking people [client systems] with needed resources, improving the  operation of social service delivery networks, and promoting social justice through organizing and advocacy.',
                        'The BSSW curriculum must emphasize the integrative character of social work within the context of a micro to macro practice continuum, focusing on human development and social transformation. Underpinning social work education is the formation and inculcation of values, attitudes, and behaviors that are deeply rooted in the profession’s core values, philosophy, principles, and code of ethics.',
                    ],
                    tags: [
                        'social-work',
                        'community',
                        'welfare',
                        'advocacy',
                        'outreach',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To provide an atmosphere that is participation liberating.',
                                'To train students for leadership roles in the field of social welfare and social work.',
                                'To develop competence in problem solving, matching needs with resources, and documenting the processes.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/buildingbg1.jpg',
            featuredImage: '/storage/images/casfaculty.png',
            objective: [
                'To develop well-rounded persons who are proud of their cultural heritage and responsive to national and international concerns.',
                'To develop the capability for research, committed to scholarly works with dignity and integrity.',
                'To cultivate the right understanding of the nature of man.',
                'To intensify the formation of good values towards sound intrapersonal and interpersonal relations.',
                'To promote intellectual leadership and to sustain a humane and technologically-advanced community where people of diverse orientation work and learn together to attain unity, cooperation, and excellence in a changing world.',
                'To enhance the analytical, evaluative, and critical thinking to arrive at an independent and right judgment, course of action, and sound decision.',
            ],
            link: '/colleges/cas',
        },
        {
            name: 'Business & Management',
            link: '/colleges/cbm',
        },

        {
            name: 'Criminal Justice',
            link: '/colleges/ccj',
        },

        {
            name: 'Education',
            link: '/colleges/ced',
        },

        {
            name: 'Hospitality & Tourism',
            link: '/colleges/chtm',
        },

        {
            name: 'Information Technology',
            link: '/colleges/cict',
        },

        {
            name: 'Graduate School',
            link: '/colleges/cas',
        },
    ];
    const college = colleges[0];

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
            <header
                className={`duration-000 fixed left-0 z-50 w-full transition-all ${
                    scrolled
                        ? 'top-0 bg-gradient-to-r from-red-900 to-red-600 shadow-md'
                        : 'top-9 bg-gradient-to-r from-red-900 to-red-600 shadow-md'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                    {/* Logo + Title */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/storage/images/tcu.png"
                            alt="TCU Logo"
                            className={`h-20 w-20 object-contain transition-all duration-500 ${
                                scrolled
                                    ? 'rounded-full border-[0.5px] border-white bg-white'
                                    : ''
                            }`}
                        />
                        <div className="flex flex-col">
                            <h1
                                className="text-5xl font-bold tracking-wide text-white"
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
                                className="text-xs font-light text-white"
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
                                href="#about"
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

            <div className="mt-30 min-h-screen bg-gray-100">
                {/* Hero Section */}
                <section className="relative h-130 bg-white">
                    {/* Campus Building Image */}
                    <img
                        src={college.image} // Campus building
                        alt={college.name}
                        className="pointer-events-none absolute bottom-0 left-0 h-200 w-auto opacity-40"
                    />

                    <img
                        src={college.image} // Campus building
                        alt={college.name}
                        className="pointer-events-none absolute right-0 bottom-0 h-200 w-auto -scale-x-100 opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        {/* Logo */}
                        <img
                            src={college.logo} // Logo
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
                <section className="flex justify-center bg-white py-12">
                    <img
                        src={college.featuredImage}
                        alt="Faculty"
                        className="max-w-4xl bg-white p-2 shadow-lg"
                    />
                </section>

                {/* Objectives */}
                <section
                    id="objectives"
                    className="bg-white px-4 py-12 md:px-20"
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
                                className="cursor-pointer rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
                                onClick={() => setSelectedCourse(course)}
                            >
                                <h3 className="mb-2 text-2xl font-semibold text-red-700">
                                    {course.name}
                                </h3>
                                <p className="line-clamp-3 text-gray-700">
                                    {course.description[0]}
                                </p>
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
                            </div>
                        ))}
                    </div>
                </section>

                {/* Course Modal */}
                {selectedCourse && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                        onClick={() => setSelectedCourse(null)} // Click outside closes modal
                    >
                        <div
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <button
                                className="absolute top-4 right-4 text-2xl font-bold text-red-700"
                                onClick={() => setSelectedCourse(null)}
                            >
                                &times;
                            </button>
                            <h2 className="mb-4 text-3xl font-bold text-red-700">
                                {selectedCourse.name}
                            </h2>
                            {selectedCourse.description.map(
                                (desc: string, i: number) => (
                                    <p key={i} className="mb-4 text-gray-700">
                                        {desc}
                                    </p>
                                ),
                            )}
                            {selectedCourse.details.map(
                                (detail: any, i: number) => (
                                    <div key={i} className="mb-4">
                                        <h3 className="mb-2 text-xl font-semibold text-red-600">
                                            {detail.name}
                                        </h3>
                                        <ul className="list-inside list-disc space-y-1 text-gray-700">
                                            {detail.content.map(
                                                (
                                                    content: string,
                                                    j: number,
                                                ) => (
                                                    <li key={j}>{content}</li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                ),
                            )}
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
                                className={`h-20 w-20 object-contain transition-all duration-500 ${
                                    scrolled
                                        ? 'rounded-full border border-white bg-white'
                                        : ''
                                }`}
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
