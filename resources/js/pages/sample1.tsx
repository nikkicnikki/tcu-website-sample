import { Head } from '@inertiajs/react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, Search, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Sample1() {
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [activeInsProf, setActiveInsProf] = useState('about');

    const [openAcademics, setOpenAcademics] = useState(false); // academic navigator header
    const [openAdmission, setOpenAdmission] = useState(false); // admission navigator header
    const [selectedImage, setSelectedImage] = React.useState<string | null>(
        null,
    );
    const [selectedResearch, setSelectedResearch] = React.useState<any>(null);

    const academicsRef = useRef<HTMLDivElement>(null);
    const admissionRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<
        'Overview' | 'Courses' | 'Faculty' | 'College Events'
    >('Overview');

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

    // academics picstures
    const [activeImage, setActiveImage] = useState<string | null>(null);

    // Example static images (replace with your actual paths)
    const eventImages = [
        '/storage/images/casevent1.png',
        '/storage/images/casevent2.png',
        '/storage/images/casevent3.png',
        '/storage/images/casevent4.png',
    ];

    const researchData = [
        {
            title: 'Best Practices in Thesis Advising and Paneling Techniques',
            image: '/storage/images/research1.png',
            tags: ['Thesis', 'Advising', 'Education', 'Best Practices'],
        },
        {
            title: 'How to Write a Literature Review using Artificial Intelligence (AI) Tools',
            image: '/storage/images/research2.png',
            tags: [
                'AI',
                'Literature Review',
                'Academic Writing',
                'Research Tools',
                'Technology',
            ],
        },
        {
            title: 'Responsible Research: Balancing Artificial Intelligence (AI) and Ethics',
            image: '/storage/images/research3.png',
            tags: ['AI', 'Ethics', 'Responsible Research'],
        },
    ];

    // Allow closing with ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
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

    useEffect(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300); // Show after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const news = [
        {
            title: 'Intramurals 2025',
            date: '2025-10-15',
            tag: 'Student Life',
            description:
                'Sports competitions and cultural activities are ongoing.',
            image: '/storage/images/intramurals.png',
            link: '#',
        },
        {
            title: 'Mechanical Engineering Licensure Examination Passers',
            date: '2025-11-10',
            tag: 'Passers',
            description:
                'The City of Taguig expresses its pride and congratulations to the four graduates from Taguig City University who successfully passed the August 2025 Licensure Examination for Mechanical Engineering',
            image: '/storage/images/engexampass.jpg',
            link: '#',
        },
        {
            title: 'Job Fair 2025',
            date: '2025-12-15',
            tag: 'Career',
            description: 'Meet recruiters and explore career opportunities.',
            image: '/storage/images/jobfair.jpg',
            link: '#',
        },
        {
            title: 'Application for Freshmen Admission AY 2024-2025',
            date: '2025-7-13',
            tag: 'Enrollment',
            description:
                'TCU Online Application for Freshmen Admission (for Incoming First Year College Academic Year 2024-2025)',
            image: '/storage/images/2526enrl.jpg',
            link: '#',
        },
        {
            title: 'Science Fair 2026',
            date: '2026-01-26',
            tag: 'STEM',
            description:
                'A showcase of innovative projects from science students.',
            image: '/storage/images/sciencefair.jpg',
            link: '#',
        },
    ];

    // By default, select the first (latest)
    const [activeIndex, setActiveIndex] = useState(0);
    const activeNews = news[activeIndex];

    // Auto-transition every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % news.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [news.length]);

    const events = {
        upcoming: [
            {
                title: 'Research Conference',
                date: '2025-11-10',
                tag: 'Research & Innovation',
                description:
                    'Explore groundbreaking studies and presentations.',
                image: '/storage/images/research.jpg',
                link: '#',
            },
            {
                title: 'Job Fair 2025',
                date: '2025-12-15',
                tag: 'Career Development',
                description:
                    'Meet recruiters and explore career opportunities for graduating students.',
                image: '/storage/images/jobfair.jpg',
                link: '#',
            },
            {
                title: 'Christmas Concert',
                date: '2025-12-23',
                tag: 'Culture & Arts',
                description:
                    'Celebrate the holidays with music and performances by students and faculty.',
                image: '/storage/images/christmas-concert.jpg',
                link: '#',
            },
            {
                title: 'Science Fair 2026',
                date: '2026-01-26',
                tag: 'STEM & Innovation',
                description:
                    'A showcase of innovative projects from our science and engineering students.',
                image: '/storage/images/sciencefair.jpg',
                link: '#',
            },
        ],

        current: [
            {
                title: 'Intramurals 2025',
                date: '2025-10-15',
                tag: 'Sports & Wellness',
                description:
                    'Sports competitions and cultural activities are ongoing.',
                image: '/storage/images/intramurals.png',
                link: '#',
            },
        ],

        all: [
            {
                title: "Founder's Day 2024",
                date: '2024-10-05',
                tag: 'University Celebration',
                description:
                    'Celebrating 19 years of excellence with alumni reunions and festivities.',
                image: '/storage/images/FoundersDay.jpg',
                link: '#',
            },
            {
                title: 'Enrollment for A.Y 2025-2026',
                date: '2024-01-17',
                tag: 'Admissions',
                description:
                    'Admission and enrollment are open! Apply now through the registrar’s office or online portal.',
                image: '/storage/images/enrollment2526.jpg',
                link: '#',
            },
            {
                title: 'Graduation Rites 2024',
                date: '2024-07-23',
                tag: 'Commencement',
                description:
                    'Honoring the Class of 2024 for their hard work and dedication to excellence.',
                image: '/storage/images/gradrites.png',
                link: '#',
            },
            {
                title: 'Community Outreach 2024',
                date: '2024-03-12',
                tag: 'Community Engagement',
                description:
                    'Student and faculty extended help to nearby communities through outreach programs.',
                image: '/storage/images/outreach.jpg',
                link: '#',
            },
            {
                title: 'Cultural Festival',
                date: '2025-02-26',
                tag: 'Student Life',
                description:
                    'Experience the diversity of traditions and performances by different student groups.',
                image: '/storage/images/cuturalfes.png',
                link: '#',
            },
        ],
    };

    // Helper to format date like "19 Sep"
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        return { day, month };
    }

    const colleges = [
        {
            src: '/storage/images/CAS.png',
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
            image: '/storage/images/cas_building.jpg',
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
            src: '/storage/images/CBM.png',
            name: 'Business & Management',
            description:
                'Business Management is the discipline devoted to organizing, analyzing, and planning various types of business operations.',
            courses: [
                {
                    name: 'Bachelor of Science in Business Administration Major in Human Resource Management',
                    description: [
                        'The Human Resource Management Program prepares the graduate for a career in Human Resources Department of any organization, handling the diverse human capital requirements of the organization, including recruitment, staffing, training and career development.',
                    ],
                    tags: [
                        'business',
                        'human-resource',
                        'recruitment',
                        'training',
                        'labor-relations',
                        'organizational-behavior',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To understand the concepts, principles, theories, and philosophies in human resource management;',
                                'To assist students seek employment and facilitate the integration process in the corporate environment so they can be immediately productive once employed.',
                                'To appreciate the HR role in the organization and how they can make meaningful contributions as strategic partners in building the organization to become globally competitive.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Business Administration Major in Marketing Management',
                    description: [
                        'The Marketing Management Program prepares the graduate for careers in marketing, market research, advertising and public relations. The curriculum provides the graduate not only with both technical skills and competencies required in the field, but also the flexible mindset that is necessary to stay competitive in a constantly changing business environment.',
                    ],
                    tags: [
                        'marketing',
                        'branding',
                        'sales',
                        'digital-marketing',
                        'advertising',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To equip students with solid foundation in marketing and help them develop critical thinking, analytical, and problem-solving skills.',
                                'To foster students ability to create customer-center solutions.',
                                'To enhance the skills of marketing students in strategy development, marketing communications, advance use of marketing technology that they can use in real work settings.',
                                'To establish knowledge in the role of marketing in creating value for society through teaching of social responsibility and ethics.',
                                'To encourage creativity and innovation by providing students the opportunity to develop new products and services to satisfy market needs.',
                                'To enhance the intellectual and emotional skills of marketing students to prepare them in diverse and global environments.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Entrepreneurship',
                    description: [
                        'Many entrepreneurs have achieved great success without the benefit of formal training. However, for every successful new business that we see, there are many more failed ventures that we never hear about. Through its combination of classroom training and experiential learning, the BS Entrepreneurship program will help aspiring entrepreneurs acquire the skills, values, and attitudes that will increase their chances of success.',
                        'After completion of all academic requirements of the program, graduates of BS Entrepreneurship should be able to set up and manage their own business or work in any organization where entrepreneurial competencies are required. They should also be able to pursue other careers appropriate to a BS Entrepreneurship graduate such as Entrepreneurs, Business Development or Corporate Planning Development Staff/Assistant, Marketing Assistant or Staff.',
                    ],
                    tags: [
                        'entrepreneurship',
                        'startup',
                        'innovation',
                        'business-development',
                        'management',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To maintain academic excellence and effective skills development programs and projects in all curricular program offerings.',
                                'To enhance and continuously sustain quality teaching and learning process with utmost focus on students.',
                                'To create plans and guidelines for entrepreneurial ventures.',
                                'To initiate quality research that will develop the institution and the local communities in Taguig City and other regions.',
                                'To provide efficient and responsive community extension services.',
                                'To develop quality manpower resources for better delivery of academic and non-academic services.',
                                'To provide modern and adequate facilities for more effective and efficient management of services.',
                                'To intensify the development of Filipino values for social transformation.',
                                'To establish linkages with government and non-government agencies, institutions, and individuals in and out of the country.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Office Administration',
                    description: [
                        'The Bachelor of Science in Office Administration program is a four-year course that prepares the students for a career in an outcome-focused, technology rich, and professional environment. Courses in the curriculum are those that will thoroughly familiarize the students with current techniques in office practice and procedures, developments in office systems and technology, good team-working and management skills, and application of the principles of good human relations and communications to prepare them to be key players in day-to-day office operations. Lessons in writing routine reports and correspondence and speaking effectively to employers, employees, and the general public are provided in selected courses. The BSOA program also trains the students to work independently, without need for on-site supervision.',
                    ],
                    tags: [
                        'office-admin',
                        'clerical',
                        'communication',
                        'management-support',
                        'documentation',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To improve students leadership skills in the workplace by learning the organizational, administrative, and business communication skills needed to be dynamic managers and supervisors.',
                                'To equip its graduates with the information, abilities, and attitudes—as well as the values and skills—that will enable them to meet the needs of the ever-changing global office administration marke.',
                                'To instill a strong feeling of nationalism and pride in the Filipino identity.',
                                'To provide the students a strong desire to succeed and take leadership roles in the community and in the field of office administration.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cbm_building.jpg',
            featuredImage: '/storage/images/cbmfaculty.png',
            objective: [
                'To apply analytically the fundamental concepts, theories, principles, and practices of business management within the context of regulatory and legal framework.',
                'To perform simple arithmetic and mathematical operations relevant to the field of business management.',
                'To become proficient in the use of information and communications technology in solving problems in the business environment.',
                'To demonstrate skills and competencies in the performance of specific tasks in business enterprises.',
                'To deliver excellent oral and written communication skills in business transactions, negotiations, and presentations of business ideas and proposals.',
                'To conduct research activities among faculty and students including but not limited to business research, marketing research, feasibility study, project proposal, and thesis.',
                'To present research outputs in local, national, and international conferences and publish the same in peer-reviewed journals.',
                'To provide learning experiences to students by engaging in on-the-job training and community extension services.',
                'To demonstrate the values of excellence, moral values, and professionalism in dealing with clients and people in the business world.',
                'To contribute to nation-building by demonstrating corporate social responsibility',
            ],
            link: '/colleges/cbm',
        },
        {
            src: '/storage/images/CCJ.png',
            name: 'Criminal Justice',
            description:
                'The field of criminology is the study of crime and the various agencies of justice as they operate and react to crime, criminals and victims. It is, therefore, the mission of Criminology program to provide the community with professionally competent and morally upright graduates who can deliver efficient and effective services in crime prevention, crime detection and investigation, law enforcement, public safety, custody and rehabilitation of offenders, criminological research, among others. \n \n Higher Education Institutions (HEIs) offering the Criminology program are envisioned as significant educational institutions actively and continually involved in producing graduates who have the knowledge, skills, attitude and values in addressing the problem of criminality in the country and the character and competence to meet the challenges of globalization in the field of criminology.',
            courses: [
                {
                    name: 'Bachelor of Science in Criminology',
                    description: [
                        'Pursuant to CHED Memorandum Order No. 5 Series of 2018, the Bachelor of Science in Criminology is the study of crime and the various agencies of justice as they operate and react to crime, criminals and victims. It is therefore, the mission of the criminology program to provide the community with professionally competent and morally upright graduates who can deliver efficient and effective services in crime prevention, crime detection and investigation, law enforcement, public safety, custody and rehabilitation of offenders, criminological research, among others.',
                    ],
                    tags: [
                        'criminology',
                        'law-enforcement',
                        'forensics',
                        'justice',
                        'security',
                    ],
                    details: [
                        {
                            name: 'Careers',
                            content: [
                                'Pursuant to RA 11131 otherwise known as “The Philippine Criminology Profession Act of 2018”, the graduates of Bachelor of Science in Criminology who successful passed the licensure examination for criminologists shall enjoy priority of appointment and shall not be required to take any qualifying or entrance examinations in the: PNP, NBI, BJMP, BFP and LTO.',
                                'Other government positions related to criminology, police and law enforcement work, investigations and security, corrections and public safety of the following bureaus, departments, institutions or agencies of the government: DOJ, CHR, PPA, COMELEC, BoT(Bureau of Treasury), PAGCOR, DENR, DOT, DTI, AFP, BI, BoC, DOTr, Air Transportation Office, CAAP, BSP, BIR, CHED, City/Munisipality Office, Provincial Jail, Provincial Security Office, MMDA, Supreme Court and Lower Courts, Security Consultation, SSS, NAPOLCOM, ARMM, OMB, Intellectual Property Rights Office, PDEA, PAO, PPC and Government-Owned and Controlled Corporations and other government agencies hire licensed criminologists involving the practice of criminology.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cas_building.jpg',
            featuredImage: '/storage/images/ccjfaculty.png',
            objective: [
                'To encourage students to conduct research on criminal behavior, criminal justice agencies, and responses to crime, criminals, and victims through mentorship programs, seminars, and workshops.',
                'To prepare students for diverse careers in crime prevention, law enforcement, scientific crime detection, correctional administration, public safety, and allied fields by offering specialized tracks, hands-on experience opportunities, and career-focused events.',
                'To foster values of leadership, integrity, accountability, and responsibility among students through integrating ethics and leadership modules, engagement in service-learning projects, establishment of mentoring programs, and recognition of student achievements.',
            ],
            link: '/colleges/ccj',
        },
        {
            src: '/storage/images/CED.png',
            name: 'Education',
            description:
                'College of Education is a division within the university that is devoted to scholarship in the field of education, which is an interdisciplinary branch of the social sciences encompassing sociology, psychology, linguistics, economics, political science, public policy, history, and others, all applied to the topic of elementary and secondary education.',
            courses: [
                {
                    name: 'Bachelor in Elementary Education',
                    description: [
                        'Bachelor in Elementary Education (BEED) is an undergraduate teacher education degree program designed to prepare individuals intending to teach in the elementary program.',
                    ],
                    tags: [
                        'education',
                        'elementary',
                        'teaching',
                        'pedagogy',
                        'curriculum',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'Develop highly motivated and competent teachers specializing in the content and pedagogy for elementary education.',
                                'Demonstrate in-depth understanding of the diversity of learners in various learning areas.',
                                'Manifest meaningful and comprehensive pedagogical content knowledge (PCK) on the different subject areas.',
                                'Utilize appropriate assessment and evaluation tools to measure learning outcomes',
                                'Manifest skills in communication, higher order thinking and use of tools and technology to accelerate learning and teaching.',
                                'Demonstrate positive attributes of a model teacher, both as an individual and as a professional.',
                                'Manifest a desire to continuously pursue personal and professional development.',
                            ],
                        },
                    ],
                },

                {
                    name: 'Bachelor of Secondary Education Major in English',
                    description: [
                        'BSE English is an undergraduate teacher education degree program aimed at developing and enhancing future secondary teachers’ field of expertise in implementing content and pedagogy in education, specifically in teaching communication skills in English.',
                    ],
                    tags: [
                        'english',
                        'literature',
                        'linguistics',
                        'communication',
                        'writing',
                    ],
                    details: [
                        {
                            name: 'Objective',
                            content: [
                                'To produce holistically capable secondary teachers who are fully exercising the duties and responsibilities of effective, efficient, innovative,and creative educators.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Secondary Education Major in Math',
                    description: [
                        'BSE Mathematics is a four-year degree program designed to prepare students in teaching different branches of Mathematics such as Algebra, Geometry, Trigonometry, Calculus and Statistics to secondary school students.',
                    ],
                    tags: [
                        'mathematics',
                        'algebra',
                        'geometry',
                        'statistics',
                        'problem-solving',
                    ],
                    details: [
                        {
                            name: 'Objective',
                            content: [
                                'To produce well-equipped graduates to demonstrate comprehensive and up-to-date knowledge in teaching mathematics in the secondary education curriculum.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Secondary Education Major in Science',
                    description: [
                        'The Bachelor of Science in Education (BSED) major in Science is a four-year teacher education program designed to equip students with the necessary competencies to pursue careers as science educators at the secondary level.',
                        'Emphasizing courses in chemistry and physics, the curriculum ensures that graduates possess the requisite knowledge and skills to effectively teach physical sciences. Complementary course works in biology and environmental science, alongside professional and general education studies, provide students with a comprehensive foundation.',
                        'Furthermore, the program aims to cultivate successful professionals prepared to contribute to both the educational and research domains within the field of science.',
                    ],
                    tags: [
                        'science',
                        'biology',
                        'physics',
                        'chemistry',
                        'education',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'Demonstrate competent knowledge across Biology, Chemistry, Physics, Earth Science, and Research, essential for effective teaching at the secondary level.',
                                'Facilitate scientific learning by employing a diverse range of teaching methodologies and delivery modes tailored to specific learners and their respective environments.',
                                'Innovate curricula, utilization of ICT, instructional plans, teaching approaches, and resources that foster engagement in scientific discourse, catering to the diverse needs of learners.',
                                'Apply professional and ethical teaching standards, demonstrating a heightened sensitivity to the intricate dynamics of local, national, and global contexts.',
                                'Pursue lifelong scientific learning, fostering personal and professional growth through varied experiential and field-based opportunities, ensuring a commitment to continuous improvement and adaptability in the ever-evolving field of science education.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cas_building.jpg',
            featuredImage: '/storage/images/cedfaculty.png',
            objective: [
                'To strengthen scientific literacy, enhancing precision in numerical expression, logical thinking and problem solving and conveying a general understanding of arts and science as a way of looking at the world.',
                'To acquire deeper understanding on the totality of human experience and empowering students to formulate for themselves a human perspective that integrates all branches of knowledge in a profound understanding of the individual and society.',
                'To offer a broad range of academic opportunities leading to a career in education. The college aims to produce highly competent educators founded on technology and values.',
                'To create a strong awareness of the general social problems and issues with relevance to the Philippines and the global society.',
                'To develop effective communication skills both in English and Filipino and fostering critical understanding and appreciation of how people give expression to their intellectual products and their experiences in the world.',
                'To promote intellectual leadership and sustain a humane and technologically advanced community where people of diverse orientation work and learn together to attain unity, cooperation, and excellence in a changing world.',
            ],
            link: '/colleges/ced',
        },
        {
            src: '/storage/images/CHTM.png',
            name: 'Hospitality & Tourism',
            description:
                'The programs related to the fields of hospitality and tourism education will equip students with competencies that are needed to execute operational tasks and management functions in food production (culinary), accommodation, food and beverage service, tourism planning and product development, events planning, transportation services, travel and tour operations and other emerging sectors of hospitality and tourism industry.',
            courses: [
                {
                    name: 'Bachelor of Science in Hospitality Management',
                    description: [
                        'The Bachelor of Science in Hospitality Management is a four-year degree program that equips students with the necessary knowledge, skills, and attitude to provide quality service in the hospitality industry. It contains subjects that will address the needs of different sectors in the hospitality industry such as culinary, front office, tourism, resort, and hotel operations. The program also helps students to develop effective communication and interpersonal skills which are essential in establishing positive customer relations.',
                        'Graduates of this program are expected to apply basic techniques in performing prescribed range of specific functions in the areas of Food and Beverage, Front Office, and Housekeeping Operations as required in accommodation, food and beverages enterprises; undertake planning and initiation of alternative approaches to skills and knowledge applications across a broad range of technical and procedural requirements.',
                    ],
                    tags: [
                        'hospitality',
                        'culinary',
                        'food-service',
                        'hotel-management',
                        'event-management',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To train students to be fully equipped not only with the knowledge and skills in Front Office Services, Housekeeping, Bartending, Food and Beverage Services, Baking and Pastry Production and Commercial Cooking',
                                'Tour Skills from the Technical Education, Skills and Development Authority (TESDA).',
                                'To enable the students to have attained the competencies in any of the technical courses in the BSHM program to land a job even before finishing the degree program.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Tourism Management',
                    description: [
                        'The tourism industry is a vast system consisting of several sectors with airlines, hotels, resorts, travel agencies and tour operators constituting the greater bulk. The myriad of smaller entities that thrive and wane with tourism’s upswings and downturns include souvenir shops, restaurants, bars and the like. The industry also goes beyond its business realm; it covers government and non-government organizations as well as educational institutions.',
                        'Tourism generates both positive and negative impacts on the culture, economy, and environment of generating and receiving countries. It can uplift country’s living standards, instill greater pride in one’s identity and make people more aware of their cultural and natural heritage.',
                    ],
                    tags: [
                        'tourism',
                        'travel',
                        'events',
                        'tour-operations',
                        'destination-management',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To provide comprehensive knowledge and critical awareness of the main ideas, concepts and principles in tourism management.',
                                'To develop skills in planning, developing and sustaining a tourism product.',
                                'To fortify skills in the field of research, leadership, entrepreneurship, travel agency management, resort management, event management and transportation management.',
                                'To cultivate skills in planning, packaging, and pricing domestic or international tourism products based on market requirements and number of participants in a particular tour program.',
                                'To hone reportorial and communication skills specifically in the field of tourism.',
                                'To sharpen skills in the application of work related technology including information handling and skills for lifelong learning.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cas_building.jpg',
            featuredImage: '/storage/images/chtmfaculty.png',
            objective: [
                'To Develop globally competent professionals with the knowledge, skills, and values essential for success in the hospitality and tourism industries.',
                'To Foster innovation and excellence in service operations, event management, and sustainable tourism practices.',
                'To Promote cultural awareness and ethical responsibility among students to uphold quality service and respect for diversity.',
                'To Encourage research and community engagement that contribute to the growth and sustainability of local and international tourism.',
                'To Strengthen industry partnerships to provide experiential learning and career opportunities through internships and collaborations.',
            ],
            link: '/colleges/chtm',
        },
        {
            src: '/storage/images/CICT.png',
            name: 'Information Technology',
            description:
                'The College of Information and Communication Technology equips students with comprehensive knowledge and hands-on experience in software development, system analysis, network administration, and emerging technologies. It fosters critical thinking, problem-solving, and innovation, preparing graduates to excel in dynamic IT and communication environments. The college emphasizes research, industry collaboration, and ethical practices to develop competent professionals capable of leading in the digital age.',
            courses: [
                {
                    name: 'Bachelor of Science in Computer Science',
                    description: [
                        'The BS Computer Science program includes the study of computing concepts and theories, algorithmic foundations and new developments in computing. The program prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving computing problems.',
                        'The program also includes the study of the standards and practices in Software Engineering. It prepares students to acquire skills and disciplines required for designing, writing and modifying software components, modules and applications that comprise software solutions.',
                        'The BSCS graduates are expected to become globally competent, innovative and socially and ethically responsible computing professionals engaged in life-long learning endeavors. They are capable of contributing to the country’s local and national development goals.',
                    ],
                    tags: [
                        'computer-science',
                        'programming',
                        'algorithms',
                        'software',
                        'data-structures',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To articulate and discuss the latest developments in the specific field of practice.',
                                'To effectively communicate orally and in writing using both English and Filipino.',
                                'To work effectively and independently in multi-disciplinary and multi-cultural teams.',
                                'To act in recognition of professional, social and ethical responsibility.',
                                'To preserve and promote “Filipino historical and cultural heritage".',
                            ],
                        },
                    ],
                },
                {
                    name: 'Bachelor of Science in Information System',
                    description: [
                        'The BS Information Systems includes the study of application and effect of information technology to organizations. Graduates of the program should be able to implement an information system which considers complex technological and organizational factors affecting it.  These include components, tools, techniques, strategies, methodologies, etc.',
                        'Graduates are able to help an organization determine how information and technology-enabled business processes can be used as strategic tool to achieve a competitive advantage. As a result, IS professionals require a sound understanding of organizational principles and practices so that they can serve as an effective bridge between the technical and management/users communities within an organization. This enables them to ensure that the organization has the information and the system it needs to support its operations.',
                        'The BSIS graduates are expected to become globally competent, innovative and socially and ethically responsible computing professionals engaged in life-long learning endeavors. They are capable of contributing to the country’s local and national development goals.',
                    ],
                    tags: [
                        'information-systems',
                        'database',
                        'it-management',
                        'system-analysis',
                        'technology',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To analyze complex problems, and identify and define the computing requirements needed to design an appropriate solution.',
                                'To apply computing and other knowledge domains to address real-world problems.',
                                'To design and develop computing solutions using a system-level perspective.',
                                'To utilize modern computing tools.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cas_building.jpg',
            featuredImage: '/storage/images/cictfaculty.png',
            objective: [
                'To be able to provide competent learning in software engineering, system design, system development and project implementation.',
                'To prepare stakeholders in a research and development environment.',
                'To serve as an avenue of IT related learning for continuous personnel and professional development.',
                'To ensure sustainable growth and collaboration in providing appropriate technical support to its clients.',
                'To engage in technopreneur and practice professional ethics.',
                'To produce students and faculty that act as an enabler, innovator, achiever and leader towards transforming into a globally competitive and responsible IT in the digital economy.',
                'To support the local government administration in fully achieving its ICT goals.',
            ],
            link: '/colleges/cict',
        },
        {
            src: '/storage/images/GRADSCHOOL.png',
            name: 'Graduate School',
            description:
                'The Taguig City University Graduate School awards advanced academic degrees in education, business, criminal justice, and public administration. \n \n Taguig City University does not only provide its graduate students the practical skills needed in the workforce, but makes sure that its students are imbibed with a good sense of social justice.',
            courses: [
                {
                    name: 'Master of Art in Education major in Educational Management',
                    description: [
                        'The Master of Arts in Education major in Educational Management (MAED) is a two-year graduate program that enhances the knowledge of students in the basic principles of planning supervisory programs at all levels – elementary, secondary, and tertiary. It teaches management theories, process-planning, organizing, leading and controlling applicable to educational agencies and academic institutions.',
                        'It educates and trains globally competitive educators who can effectively design ideal learning experiences and efficiently manage educational enterprises through experiential and research-based learning process.',
                    ],
                    tags: [
                        'graduate',
                        'education',
                        'leadership',
                        'management',
                        'research',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To offer an integrated program of Educational Management and Leadership.',
                                'To provide students with leadership knowledge and management skills.',
                                'To make students become confident leaders / managers in an academic institution.',
                                'To prepare students for effective organization and administration of schools and educational institutions.',
                                'To prepare training executives who act creatively and productively.',
                                'To strengthen students’ knowledge and skills in research evaluation and analysis.',
                                'To familiarize students with leadership and management models that can be adopted by academic institutions.',
                                'To provide students with knowledge, attitudes and skills necessary in serving educational community.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Master in Business Administration',
                    description: [
                        'The Master in Business Administration (MBA) program is a two-year graduate program usually taken by mid-career professionals to gain an advantage in their professional careers. The curriculum is designed to equip students with the skills that will make them qualified and competent to occupy higher-level management positions. The program centers on the current management techniques, functional areas in the field of business, relevant concepts in economics, applied mathematics, statistics, and behavioral science, and their practical applications. It does not only teach students about theories and applications of business concepts, processes, tools, and techniques but also teaches students about managerial tools and right decision-making processes in a business.',
                        'The Master in Business Administration (MBA) program is intended for graduates and executives who wish to specialize in the advanced level of administrative and management functions of the general business environment.',
                    ],
                    tags: [
                        'mba',
                        'business',
                        'leadership',
                        'finance',
                        'management',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To develop high quality leadership and expertise in the field of business management to meet global standards.',
                                'To enhance conceptual and analytical research skills in the field of business management through the use of state-of-the-art technologies.',
                                'To strengthen research capabilities to meet national, regional, and global growth and development.',
                                'To cultivate a culture of scholarship, mentoring, professionalism, ethical and social responsibility, and humanism.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Master in Public Administration',
                    description: [
                        'The MPA program focuses on the practice of public administration at the local, national and supranational levels; providing advanced training in the field of public policy as well as public management. It provides a comprehensive background for those in careers in government agencies, non-government organizations, management in hospitals, consulting in private firms, school brands and human relations.',
                        'Students who wish to pursue a Master of Public Administration should have an undergraduate degree in the administration field. However, students who do not hold an undergraduate program in those fields but still wish to pursue the program are encouraged to take at least 18 units of courses in the relevant fields. Some universities and colleges do consider relevant work experience in lieu of relevant academic background.',
                    ],
                    tags: [
                        'public-admin',
                        'policy',
                        'governance',
                        'public-service',
                        'leadership',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To develop high quality leadership and expertise in the field of Public Administration.',
                                'To enhance the conceptual, analytical and research skills in the field of Public Administration.',
                                'To strengthen research capabilities towards national growth and development.',
                            ],
                        },
                    ],
                },
                {
                    name: 'Master in Science in Criminal Justice',
                    description: [
                        'Criminal justice is a broad term that covers the laws used to define and prosecute crimes and those institutions established to maintain social order, prevent crime, and administer justice. Programs may include courses such as criminology, legal issues, international criminal justice, forensics, human rights, and more.',
                        'The benefits of completing the Master of Science in Criminal Justice program involve access to better paying jobs and an edge when it comes to competing for preferred jobs. However, the benefits of completion extend beyond financial gain. Graduates often develop a better understanding of the complexities that face modern society. As they gain this understanding, graduates are prepared to work in this field with both compassion and fairness.',
                        'The job opportunities that follow completion of the Master of Science in Criminal Justice spread across the legal and criminal justice spectrum. Positions might include those of lawyer, judge, or policy official. Some graduates become criminologists, politicians, or international policy makers. Graduates from the master’s program might choose to work in the field of economic crime management or as human rights advocates.',
                    ],
                    tags: [
                        'criminology',
                        'justice',
                        'law',
                        'security',
                        'research',
                    ],
                    details: [
                        {
                            name: 'Objectives',
                            content: [
                                'To prepare the students to excel in the field of Criminology.',
                                'To equip them with advanced knowledge and skills necessary in the practice of Criminology profession.',
                                'To prepare and encourage the students to do advanced and/or independent research in Criminology.',
                                'To train professionals to be more globally competitive in the field of Criminology.',
                            ],
                        },
                    ],
                },
            ],
            image: '/storage/images/cas_building.jpg',
            featuredImage: '/storage/images/gradschoolfaculty.png',
            objective: [
                'To provide advanced academic and professional training in education, business, criminal justice, and public administration.',
                'To develop research skills and critical thinking necessary for scholarly and practical contributions in various fields.',
                'To prepare graduates for leadership roles and managerial responsibilities in public and private sectors.',
                'To instill ethical standards, social responsibility, and commitment to community service.',
                'To foster lifelong learning and continuous professional development among graduate students.',
            ],
            link: '/colleges/cas',
        },
    ];

    const [selected, setSelected] = useState(0);

    const insProfSections = [
        { id: 'about', label: 'About TCU' },
        { id: 'identity', label: 'Institutional Identity' },
        { id: 'campus-life', label: 'Campus Life' },
        { id: 'sports', label: 'Sports & Development' },
        { id: 'TCU-Hymn', label: 'TCU Hymn' },
        { id: 'administration', label: 'Administration' },
    ];

    // const [selectedCollege, setSelectedCollege] = useState(0);
    // const [collegeList, setCollegeList] = useState(colleges);

    const [openCourses, setOpenCourses] = React.useState<boolean[]>([]);

    React.useEffect(() => {
        setOpenCourses(colleges[selected]?.courses.map(() => false) || []);
    }, [selected]);

    const controls = useAnimation();

    // --- Safe modal DOM access ---
    React.useEffect(() => {
        if (selectedImage) {
            // Generic modal
            const genericEl =
                document.querySelector<HTMLImageElement>('#modal-image');
            if (genericEl)
                console.log('Generic modal dataset:', genericEl.dataset.value);

            // Sports modal
            const sportsEl = document.querySelector<HTMLImageElement>(
                '#sports-modal-image',
            );
            if (sportsEl)
                console.log('Sports modal dataset:', sportsEl.dataset.value);
        }
    }, [selectedImage]);

    /* Safe DOM access useEffect */
    React.useEffect(() => {
        if (activeImage) {
            const imgEl = document.querySelector<HTMLImageElement>(
                '#faculty-event-modal-image',
            );
            if (imgEl) {
                console.log(
                    'Faculty/Event modal dataset:',
                    imgEl.dataset.value,
                );
                // Safe to access dataset or other DOM properties here
            }
        }
    }, [activeImage]);

    // Safe DOM access for Research modal
    React.useEffect(() => {
        if (selectedResearch) {
            const imgEl = document.querySelector<HTMLImageElement>(
                '#research-modal-image',
            );
            if (imgEl) {
                console.log('Research modal dataset:', imgEl.dataset.value);
                // you can safely access dataset or other properties here
            }
        }
    }, [selectedResearch]);

    return (
        <div
            className="flex min-h-screen flex-col bg-white"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            // Open Sans, roboto, Montserrat
        >
            <Head title="Taguig City University" />
            {/* progress bar */}
            <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-gray-200">
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
                        <div className="underline-offset-9 flex cursor-pointer items-center space-x-1 decoration-2 transition hover:underline">
                            <FaFacebookF className="h-4 w-4 text-white" />
                            <span>Taguig City University</span>
                        </div>
                    </a>

                    <div className="underline-offset-9 flex cursor-pointer items-center space-x-1 decoration-2 transition hover:underline">
                        <FaPhone className="h-4 w-4 text-white" />
                        <span>8635-8300</span>
                    </div>

                    <div className="underline-offset-9 flex cursor-pointer items-center space-x-1 decoration-2 transition hover:underline">
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
                        : 'top-9 bg-gradient-to-b from-black/50 to-transparent'
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
                                className="underline-offset-10 text-white decoration-2 hover:underline"
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
                                        className="underline-offset-10 text-white decoration-2 hover:underline"
                                    >
                                        Academics ▾
                                    </button>
                                </a>

                                {openAcademics && (
                                    <div className="absolute left-0 top-full mt-2 w-72 flex-col bg-white py-2 text-gray-800 shadow-lg">
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
                                    className="underline-offset-10 text-white decoration-2 hover:underline"
                                >
                                    Admission ▾
                                </button>

                                {openAdmission && (
                                    <div className="absolute left-0 top-full mt-2 w-52 flex-col bg-white py-2 text-gray-800 shadow-lg">
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
                                className="underline-offset-10 text-white decoration-2 hover:underline"
                            >
                                Research
                            </a>

                            <a
                                href="#about"
                                className="underline-offset-10 text-white decoration-2 hover:underline"
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
                    <div className="top-25 absolute left-0 w-full bg-gradient-to-r from-red-900 to-red-600 text-white shadow-md lg:hidden">
                        <nav className="flex flex-col items-start space-y-3 px-6 py-4">
                            <a
                                href="#home"
                                className="underline-offset-10 decoration-2 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>

                            {/* Mobile Academics Dropdown (Dynamic) */}
                            <details className="w-full">
                                <summary className="underline-offset-10 cursor-pointer decoration-2 hover:underline">
                                    Academics
                                </summary>
                                <div className="ml-4 mt-2 flex flex-col space-y-1 text-sm">
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
                                className="underline-offset-10 decoration-2 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Admission
                            </a>
                            <a
                                href="#research"
                                className="underline-offset-10 decoration-2 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Research
                            </a>

                            <a
                                href="#about"
                                className="underline-offset-10 decoration-2 hover:underline"
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

            {/* Hero Section with Video Background — hidden on mobile */}
            <section
                id="home"
                className="relative hidden h-screen flex-col items-center justify-center overflow-hidden md:flex"
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute left-0 top-0 h-full w-full object-cover"
                >
                    <source src="/storage/videos/tcuavp.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Optional overlay for readability */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}
            </section>

            {/* Quotes Section — visible on all devices */}
            <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 md:py-28">
                {/* Cursive Line Background */}
                {/* Top-left curved lines */}
                <svg
                    className="pointer-events-none absolute left-0 top-[-150px] -z-0 h-[40%] w-[70%] opacity-80"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="8"
                        strokeLinecap="round"
                        opacity="1"
                        d="M0,200 C300,60 600,300 1100,150"
                    />
                    <path
                        fill="none"
                        stroke="#b91c1c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.7"
                        d="M0,220 C250,100 650,320 1350,100"
                    />
                    <path
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.4"
                        d="M0,180 C280,50 580,280 1050,130"
                    />
                </svg>

                {/* Bottom-right curved lines */}
                <svg
                    className="pointer-events-none absolute bottom-[-150px] right-[-20px] -z-0 h-[40%] w-[97%] rotate-[170deg] opacity-80"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="8"
                        strokeLinecap="round"
                        opacity="1"
                        d="M0,150 C520,-50 500,400 1200,180"
                    />
                    <path
                        fill="none"
                        stroke="#b91c1c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.7"
                        d="M0,170 C500,0 550,380 1180,200"
                    />
                    <path
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.4"
                        d="M0,130 C540,-80 480,420 1220,160"
                    />
                </svg>

                {/* Quotes Content */}
                <div className="mx-auto max-w-5xl text-center">
                    <div className="relative flex flex-col items-center justify-center space-y-2 overflow-hidden bg-transparent py-12">
                        {/* Quotation Mark (appears first) */}
                        <motion.span
                            initial={{ opacity: 0, scale: 1.5, y: -50 }}
                            animate={controls}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: 1,
                                    ease: 'easeOut',
                                },
                            }}
                            onViewportLeave={() =>
                                controls.set({ opacity: 0, scale: 1.5, y: -50 })
                            }
                            viewport={{ once: false }}
                            className="left-30 absolute top-10 mb-4 select-none font-serif text-8xl text-red-800"
                        >
                            “
                        </motion.span>

                        {/* Top Box - Transforming Excellence */}
                        <motion.div
                            initial={{ opacity: 0, y: -80, x: -150 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: false }}
                            className="bg-gradient-to-r from-red-900 to-red-700 px-10 py-8 text-3xl font-bold uppercase tracking-wide text-white shadow-lg md:text-4xl"
                        >
                            Transforming Excellence
                        </motion.div>

                        {/* Bottom Box - Into Purpose */}
                        <motion.div
                            initial={{ opacity: 0, y: 80, x: 150 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: false }}
                            className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6 text-3xl font-bold uppercase tracking-wide text-white shadow-lg md:text-5xl"
                        >
                            Into Purpose
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, scale: 1.5, y: 50 }}
                            animate={controls}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: 1,
                                    ease: 'easeOut',
                                },
                            }}
                            onViewportLeave={() =>
                                controls.set({ opacity: 0, scale: 1.5, y: 50 })
                            }
                            viewport={{ once: false }}
                            className="right-50 absolute bottom-[-20px] mb-4 select-none font-serif text-8xl text-red-800"
                        >
                            ”
                        </motion.span>
                    </div>

                    {/* Quote Body */}
                    <div className="mt-12 space-y-5 text-justify leading-relaxed text-gray-700 md:text-lg">
                        <p>
                            At <b>Taguig City University</b>, we believe that
                            true excellence goes beyond personal achievement.
                            Excellence without purpose fades, but when guided
                            with the right values, it becomes a force for
                            lasting positive change.
                        </p>

                        <p>
                            We nurture not only bright minds but also
                            compassionate leaders who know that being “the best”
                            is not just for oneself but about being the best for
                            others. Education at TCU is a journey where skills,
                            knowledge, and character come together transforming
                            academic success into meaningful contributions that
                            uplift communities and inspire progress.
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-14 flex justify-end text-right">
                        <div>
                            <p className="text-lg font-bold text-gray-800">
                                DR. RAYMUNDO P. ARCEGA, CESE
                            </p>
                            <p className="text-sm tracking-wide text-red-700">
                                President, Taguig City University
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Update Heading */}

            <h2 className="mb-0 border-b-4 border-gray-300 bg-gradient-to-r from-red-500 to-red-900 py-2 text-center text-4xl font-bold text-white">
                NEWS & UPDATES
            </h2>

            <section id="newsupdate" className="relative bg-gray-100 py-10">
                {/* Apply a slight scale to the whole section content */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/storage/images/buildingbg.png"
                        alt="Background"
                        className="absolute bottom-0 left-0 h-full w-auto object-cover opacity-30"
                    />
                </div>
                <div className="origin-top scale-[0.9] transform">
                    {/* Background image */}

                    <div className="relative z-10 mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* 📰 Main featured news */}
                            <a
                                href={activeNews.link} // make the whole card clickable
                                className="relative block overflow-hidden shadow-lg lg:col-span-2"
                            >
                                <img
                                    src={activeNews.image}
                                    alt={activeNews.title}
                                    className="h-[360px] w-full object-cover transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                    <span className="mb-2 inline-block rounded-full bg-red-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                                        {activeNews.tag}
                                    </span>
                                    <h3 className="text-xl font-bold">
                                        {activeNews.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-200">
                                        {activeNews.description}
                                    </p>
                                    {/* Removed the "View →" link */}
                                </div>
                            </a>

                            {/* 📋 Side List */}
                            <div>
                                <h2 className="mb-4 text-xl text-gray-800">
                                    Latest News & Updates
                                </h2>
                                <div className="space-y-0">
                                    {news.map((item, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`relative z-20 flex cursor-pointer items-start gap-3 border border-gray-200 bg-white p-3 transition hover:bg-red-50 ${
                                                activeIndex === idx
                                                    ? 'border-red-500 bg-red-50'
                                                    : ''
                                            }`}
                                        >
                                            {/* Left marker */}
                                            <div
                                                className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                                                    activeIndex === idx
                                                        ? 'bg-red-600'
                                                        : 'bg-gray-400'
                                                }`}
                                            ></div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h4
                                                        className={`text-sm font-semibold ${
                                                            activeIndex === idx
                                                                ? 'text-red-700'
                                                                : 'text-gray-800'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </h4>
                                                    <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-[9px] font-semibold text-red-700">
                                                        {item.tag}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-gray-500">
                                                    {item.date}
                                                </p>
                                                <a
                                                    href={item.link}
                                                    className="text-[11px] font-semibold text-red-500 hover:text-red-700"
                                                >
                                                    View →
                                                </a>
                                            </div>
                                        </div>
                                    ))}

                                    {/* View More link */}
                                    <div className="pt-2 text-right">
                                        <a
                                            href="#"
                                            className="text-[13px] font-medium text-red-600 hover:underline"
                                        >
                                            View More →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Heading */}
            <h2 className="mb-0 border-b-4 border-gray-300 bg-gradient-to-r from-red-500 to-red-900 py-2 text-center text-4xl font-bold text-white">
                EVENTS
            </h2>

            <section
                id="events"
                className="relative overflow-hidden bg-gray-50 px-4 pb-12 pt-12"
            >
                {/* Background shapes */}
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                >
                    <svg
                        className="absolute inset-0 h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 800"
                        preserveAspectRatio="none"
                    >
                        <polygon
                            points="1200,0 1060,0 1200,160"
                            fill="#991b1b"
                            opacity="0.5"
                        />
                        <polygon
                            points="0,800 0,640 140,800"
                            fill="#dc2626"
                            opacity="0.5"
                        />
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl">
                    {/* Current Event */}
                    <div className="mb-10 lg:col-span-2">
                        {events.current.length > 0 ? (
                            events.current.map((event, idx) => {
                                const { day, month } = formatDate(event.date);
                                const slug = event.title
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, '-')
                                    .replace(/(^-|-$)/g, '');
                                return (
                                    <a
                                        key={idx}
                                        href={`/events/${slug}`}
                                        className="group relative block overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.01]"
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="max-h-[28rem] w-full bg-white object-contain"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end">
                                            <div className="p-5 text-red-500 shadow-md">
                                                <h3 className="truncate bg-gradient-to-r from-white to-transparent px-2 text-sm font-bold">
                                                    {event.title}
                                                </h3>
                                                <p className="truncate bg-gradient-to-r from-black to-transparent px-4 text-base text-gray-200">
                                                    {event.description}
                                                </p>
                                                {event.tag && (
                                                    <span className="mt-2 inline-block rounded-sm bg-red-700 px-3 py-1 text-xs uppercase text-white">
                                                        {event.tag}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute left-0 top-0 bg-red-700 px-6 py-4 text-center shadow-md">
                                            <div className="text-4xl font-bold text-white">
                                                {day}
                                            </div>
                                            <div className="text-lg uppercase text-gray-600 text-white">
                                                {month}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })
                        ) : (
                            <p className="text-gray-500">No current event</p>
                        )}
                    </div>

                    {/* Upcoming Events */}
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <span className="rounded-sm bg-red-700 px-3 py-1 text-sm uppercase text-white">
                                Upcoming
                            </span>
                            <span>Events</span>
                        </h2>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-[2px] sm:grid-cols-3 lg:grid-cols-5">
                        {events.upcoming.slice(0, 5).map((event, idx) => {
                            const { day, month } = formatDate(event.date);
                            const slug = event.title
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)/g, '');
                            return (
                                <a
                                    key={idx}
                                    href={`/events/${slug}`}
                                    className="group relative block overflow-hidden shadow-md transition-all duration-300 hover:opacity-90"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end">
                                        <div className="p-2 text-red-500 shadow-md">
                                            <h3 className="truncate bg-white px-2 text-sm font-bold">
                                                {event.title}
                                            </h3>
                                            {event.tag && (
                                                <span className="mt-1 inline-block rounded-sm bg-red-700 px-2 py-[2px] text-[10px] uppercase text-white">
                                                    {event.tag}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="absolute left-0 top-0 bg-white px-3 py-1 text-center shadow-md">
                                        <div className="text-lg font-bold text-red-700">
                                            {day}
                                        </div>
                                        <div className="text-xs uppercase text-gray-600">
                                            {month}
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* All Events */}
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                            <span className="rounded-sm bg-red-700 px-3 py-1 text-sm uppercase text-white">
                                All
                            </span>
                            <span>Events</span>
                        </h2>
                        <a
                            href="/events"
                            className="text-sm font-medium text-red-700 hover:underline"
                        >
                            View More →
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-[2px] sm:grid-cols-3 lg:grid-cols-5">
                        {events.all.slice(0, 5).map((event, idx) => {
                            const { day, month } = formatDate(event.date);
                            const slug = event.title
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)/g, '');
                            return (
                                <a
                                    key={idx}
                                    href={`/events/${slug}`}
                                    className="group relative block overflow-hidden shadow-md transition-all duration-300 hover:opacity-90"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end">
                                        <div className="p-2 text-red-500 shadow-md">
                                            <h3 className="truncate bg-white px-2 text-sm font-bold">
                                                {event.title}
                                            </h3>
                                            {event.tag && (
                                                <span className="mt-1 inline-block rounded-sm bg-red-700 px-2 py-[2px] text-[10px] uppercase text-white">
                                                    {event.tag}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="absolute left-0 top-0 bg-white px-3 py-1 text-center shadow-md">
                                        <div className="text-lg font-bold text-red-700">
                                            {day}
                                        </div>
                                        <div className="text-xs uppercase text-gray-600">
                                            {month}
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <h2 className="mb-0 border-b-4 border-gray-300 bg-gradient-to-r from-red-500 to-red-900 py-2 text-center text-4xl font-bold text-white">
                ACADEMICS
            </h2>

            {/* Academics Section */}
            <section
                id="academics"
                className="relative overflow-hidden bg-gray-100 px-8 py-10"
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-0 md:flex-row md:items-start">
                    {/* LEFT SIDE: College Navigator */}
                    <div className="relative flex flex-wrap justify-center gap-3 bg-white px-2 py-4 md:flex-col md:items-start md:gap-0 md:self-start md:px-0 md:py-0">
                        {/* Vertical Line Accent */}
                        {/* <div className="absolute top-0 left-[-10px] hidden h-full w-[2px] bg-gradient-to-b from-red-900 to-red-600 md:block"></div> */}

                        {colleges.map((college, index) => {
                            const isActive = selected === index;
                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setSelected(index)}
                                    className={`relative cursor-pointer transition-all duration-300 ${
                                        isActive ? 'z-10 scale-105' : 'z-0'
                                    }`}
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileTap={{ scale: 0.95, y: 3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <div
                                        className={`flex w-24 flex-col items-center justify-start overflow-visible shadow-lg transition-all duration-500 ease-in-out sm:w-28 md:w-28 ${
                                            isActive
                                                ? 'clip-banner bg-gradient-to-b from-red-700 to-red-900 text-white'
                                                : 'bg-white text-gray-800'
                                        } hover:bg-gradient-to-b hover:from-red-700 hover:to-red-900 hover:text-white`}
                                        style={{
                                            height: '7rem',
                                        }}
                                    >
                                        {/* College Image */}
                                        <img
                                            src={college.src}
                                            alt={college.name}
                                            className="mt-2 h-12 w-12 object-contain"
                                        />

                                        {/* College Name */}
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: isActive ? 1 : 0.85,
                                                y: isActive ? 0 : 6,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`mt-2 break-words px-2 text-center text-[10px] font-semibold leading-tight ${
                                                isActive
                                                    ? 'text-white'
                                                    : 'text-gray-800'
                                            }`}
                                        >
                                            {college.name}
                                        </motion.span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Tabs + Content */}
                    <div className="flex w-full flex-col md:w-11/12">
                        {/* Tabs */}
                        <div className="mb-0 flex flex-wrap justify-start gap-0">
                            {[
                                'Overview',
                                'Courses',
                                'Faculty',
                                'College Events',
                            ].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-b from-red-900 to-red-700 text-white shadow-md'
                                            : 'bg-white text-red-700 shadow-md hover:bg-gradient-to-b hover:from-red-700 hover:to-red-900 hover:text-white'
                                    }`}
                                >
                                    {tab}
                                    <ChevronRight
                                        className={`h-5 w-5 ${
                                            activeTab === tab
                                                ? 'text-white'
                                                : 'text-red-700'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white p-6 shadow-md">
                            {/* Existing content here (unchanged) */}
                            {/* OVERVIEW (DEFAULT) */}
                            {(activeTab === 'Overview' || !activeTab) && (
                                <div>
                                    <a
                                        href={colleges[selected].link}
                                        className="mt-0 inline-block rounded bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
                                    >
                                        Visit College
                                    </a>
                                    <div className="mb-6 flex flex-col items-center text-center">
                                        <img
                                            src={colleges[selected].src}
                                            alt={colleges[selected].name}
                                            className="h-40 w-40 object-contain"
                                        />
                                        <h2 className="mt-3 text-xl font-bold uppercase text-red-700">
                                            {colleges[selected].name}
                                        </h2>
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold uppercase text-red-700">
                                        Overview
                                    </h3>
                                    <p className="mb-4 whitespace-pre-line text-justify text-sm leading-relaxed text-gray-700">
                                        {colleges[selected].description}
                                    </p>

                                    <h3 className="mb-2 text-lg font-bold uppercase text-red-700">
                                        Objectives
                                    </h3>
                                    <ol className="list-decimal space-y-2 pl-5 text-justify text-sm leading-relaxed text-gray-800">
                                        {colleges[selected].objective.map(
                                            (item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ),
                                        )}
                                    </ol>
                                </div>
                            )}
                            {/* COURSES */}
                            {activeTab === 'Courses' && (
                                <div>
                                    <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-red-700">
                                        Courses
                                    </h3>

                                    <div className="space-y-4 text-gray-800">
                                        {colleges[selected]?.courses.map(
                                            (course, idx) => {
                                                const isOpen = openCourses[idx];

                                                const toggleCourse = () => {
                                                    setOpenCourses((prev) =>
                                                        prev.map((open, i) =>
                                                            i === idx
                                                                ? !open
                                                                : open,
                                                        ),
                                                    );
                                                };

                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        layout
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: 'easeInOut',
                                                        }}
                                                        className="overflow-hidden border border-gray-200 bg-gray-50 shadow-sm"
                                                    >
                                                        {/* Header / Course Title */}
                                                        <div
                                                            onClick={
                                                                toggleCourse
                                                            }
                                                            className="justify-left flex cursor-pointer select-none items-center border-b-4 border-red-700 bg-red-700 px-3 py-2"
                                                        >
                                                            <p className="text-sm font-semibold tracking-wide text-white">
                                                                {course.name}
                                                            </p>
                                                            <ChevronDown
                                                                className={`h-5 w-5 transform text-white transition-transform duration-300 ${
                                                                    isOpen
                                                                        ? 'rotate-180'
                                                                        : ''
                                                                }`}
                                                            />
                                                        </div>

                                                        {/* Tags */}
                                                        {course.tags &&
                                                            course.tags.length >
                                                                0 && (
                                                                <div className="flex flex-wrap gap-2 border-b border-gray-200 bg-gray-100 px-3 py-3">
                                                                    {course.tags.map(
                                                                        (
                                                                            tag,
                                                                            tagIdx,
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    tagIdx
                                                                                }
                                                                                className="border border-red-700 bg-red-50 px-3 py-[4px] text-[11px] font-semibold uppercase tracking-wide text-red-700 shadow-sm"
                                                                            >
                                                                                {
                                                                                    tag
                                                                                }
                                                                            </span>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            )}

                                                        {/* Collapsible Body */}
                                                        <motion.div
                                                            initial={false}
                                                            animate={{
                                                                height: isOpen
                                                                    ? 'auto'
                                                                    : 0,
                                                                opacity: isOpen
                                                                    ? 1
                                                                    : 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                                ease: 'easeInOut',
                                                            }}
                                                            className="overflow-hidden"
                                                        >
                                                            {/* Description */}
                                                            {course.description &&
                                                                (Array.isArray(
                                                                    course.description,
                                                                ) ? (
                                                                    <div className="space-y-3 bg-white px-4 py-3 text-sm leading-relaxed text-gray-700">
                                                                        {course.description.map(
                                                                            (
                                                                                para,
                                                                                i,
                                                                            ) => (
                                                                                <p
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        para
                                                                                    }
                                                                                </p>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                ) : (
                                                                    <p className="bg-white px-4 py-3 text-sm leading-relaxed text-gray-700">
                                                                        {
                                                                            course.description
                                                                        }
                                                                    </p>
                                                                ))}

                                                            {/* Details */}
                                                            {course.details &&
                                                                course.details
                                                                    .length >
                                                                    0 && (
                                                                    <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                                                                        {course.details.map(
                                                                            (
                                                                                detail,
                                                                                detailIdx,
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        detailIdx
                                                                                    }
                                                                                    className="mb-3"
                                                                                >
                                                                                    <p className="mb-1 text-sm font-bold uppercase tracking-wide text-red-700">
                                                                                        {
                                                                                            detail.name
                                                                                        }
                                                                                    </p>
                                                                                    <ul className="ml-5 list-disc text-sm leading-relaxed text-gray-700">
                                                                                        {Array.isArray(
                                                                                            detail.content,
                                                                                        ) ? (
                                                                                            detail.content.map(
                                                                                                (
                                                                                                    item,
                                                                                                    itemIdx,
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={
                                                                                                            itemIdx
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            item
                                                                                                        }
                                                                                                    </li>
                                                                                                ),
                                                                                            )
                                                                                        ) : (
                                                                                            <li>
                                                                                                {
                                                                                                    detail.content
                                                                                                }
                                                                                            </li>
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                )}
                                                        </motion.div>
                                                    </motion.div>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* FACULTY */}
                            {activeTab === 'Faculty' && (
                                <div className="text-center">
                                    <h3 className="mb-2 text-lg font-bold uppercase text-red-700">
                                        Faculty
                                    </h3>
                                    <img
                                        src={colleges[selected].featuredImage}
                                        alt={colleges[selected].name}
                                        onClick={() =>
                                            setActiveImage(
                                                colleges[selected]
                                                    .featuredImage,
                                            )
                                        }
                                        className="mx-auto w-full max-w-2xl cursor-pointer rounded-md bg-white object-cover p-1 shadow-md transition hover:scale-105"
                                    />
                                </div>
                            )}
                            {/* College EVENTS */}
                            {activeTab === 'College Events' && (
                                <div>
                                    <h3 className="mb-2 text-lg font-bold uppercase text-red-700">
                                        College Events
                                    </h3>
                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        {eventImages.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt={`Event ${index + 1}`}
                                                className="h-60 w-full cursor-pointer object-cover shadow-md transition-transform duration-300 hover:rotate-1 hover:scale-105"
                                                onClick={() =>
                                                    setActiveImage(src)
                                                }
                                            />
                                        ))}
                                        <button
                                            className="cursor-pointer text-left font-thin text-red-600 hover:underline"
                                            onClick={() =>
                                                alert(
                                                    'More college event items coming soon!',
                                                )
                                            }
                                        >
                                            View More →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Lightbox Modal for Faculty & Events */}
                        {activeImage && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                                onClick={() => setActiveImage(null)}
                            >
                                <img
                                    id="faculty-event-modal-image" // <-- unique ID for safe access
                                    data-value={activeImage} // optional dataset
                                    src={activeImage}
                                    alt="Enlarged view"
                                    className="max-h-[90vh] max-w-[90vw] bg-white object-contain p-2 shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <button
                                    onClick={() => setActiveImage(null)}
                                    className="absolute right-6 top-6 text-3xl font-bold text-white hover:text-red-500"
                                >
                                    ×
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <h2 className="relative mb-0 bg-gradient-to-r from-red-500 to-red-900 py-2 text-center text-4xl font-bold text-white">
                RESEARCH
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-gray-800">
                Push the boundaries of knowledge, foster innovation, and address
                real-world challenges. Explore our faculty and student research
                projects that inspire, inform, and impact communities locally
                and globally.
            </p>

            {/* Inclined, dynamic line with graphic accent */}
            <div className="w-100 relative mx-auto mt-6 h-2">
                {/* Background line */}
                <div className="absolute inset-0 -skew-x-12 transform rounded bg-red-700"></div>
                {/* Optional graphic: small white triangle on the line */}
                <div className="absolute right-0 top-0 h-2 w-2 rotate-45 bg-white"></div>
            </div>

            {/* Research Section */}
            <section
                id="research"
                className="font-montserrat relative overflow-hidden bg-white px-6 pb-16 pt-10"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        {researchData.map((research, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedResearch(research)}
                                className="group block cursor-pointer overflow-hidden bg-white shadow-md transition hover:shadow-lg"
                            >
                                <img
                                    src={research.image}
                                    alt={research.title}
                                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700">
                                        {research.title}
                                    </h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {research.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-red-100 px-2 py-1 text-[11px] font-semibold text-red-700 shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-right">
                        <button
                            className="font-semibold text-red-600 hover:underline"
                            onClick={() =>
                                alert('More research items coming soon!')
                            }
                        >
                            View More →
                        </button>
                    </div>
                </div>

                {/* Modal for Research */}
                {selectedResearch && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                        onClick={() => setSelectedResearch(null)}
                    >
                        <div
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white p-6 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                id="research-modal-image" // unique id for safe DOM access
                                data-value={selectedResearch.image} // optional dataset
                                src={selectedResearch.image}
                                alt={selectedResearch.title}
                                className="mb-4 w-full object-cover shadow-md"
                            />
                            <h3 className="mb-3 text-2xl font-bold text-red-700">
                                {selectedResearch.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedResearch.tags.map(
                                    (tag: string, i: number) => (
                                        <span
                                            key={i}
                                            className="bg-red-100 px-2 py-1 text-[12px] font-semibold text-red-700 shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ),
                                )}
                            </div>
                            <button
                                onClick={() => setSelectedResearch(null)}
                                className="absolute right-6 top-6 text-3xl font-bold text-white hover:text-red-500"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </section>

            <h2
                id="about"
                className="mb-0 border-b-4 border-gray-300 bg-gradient-to-r from-red-600 to-red-900 py-2 text-center text-4xl font-bold text-white"
            >
                INSTITUTIONAL PROFILE
            </h2>

            <section
                id="institutional-profile"
                className="relative overflow-hidden bg-gray-50 px-6 py-16"
            >
                {/* Background Shapes */}
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                >
                    <svg
                        className="absolute inset-0 h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 800"
                        preserveAspectRatio="none"
                    >
                        <polygon
                            points="1200,0 1060,0 1200,160"
                            fill="#991b1b"
                            opacity="0.5"
                        />
                        <polygon
                            points="0,800 0,640 140,800"
                            fill="#dc2626"
                            opacity="0.5"
                        />
                    </svg>
                </div>

                <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row">
                    {/* Right: Navigation */}
                    <nav className="sticky top-0 mx-auto w-full max-w-xs md:w-64">
                        <h4 className="mb-3 text-center text-xl font-bold text-red-700">
                            Explore
                        </h4>
                        <ul className="space-y-1">
                            {insProfSections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() =>
                                            setActiveInsProf(section.id)
                                        }
                                        className={`w-full px-4 py-3 text-sm font-medium shadow-sm transition-all duration-300 ${
                                            activeInsProf === section.id
                                                ? 'scale-[1.02] bg-red-700 text-white shadow-md'
                                                : 'bg-white text-gray-700 hover:bg-red-100 hover:text-red-800 hover:shadow-md'
                                        }`}
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Left: Content Area */}
                    <div className="flex-1 space-y-12 text-center md:text-left">
                        {activeInsProf === 'about' && (
                            <div>
                                <h3
                                    className="mb-6 text-3xl font-bold text-red-700"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}
                                >
                                    Taguig City University
                                </h3>
                                <p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    Motivated by the urgent need to serve the
                                    youth of a burgeoning Taguig City, the Local
                                    Government Administration enacted Ordinance
                                    No. 29 series 2004, titled “An Ordinance
                                    Establishing the Pamantasan ng Taguig and
                                    Appropriating Funds Therefor.” This
                                    initiative was one of the offshoots of the
                                    provisions outlined in the Local Government
                                    Code. Subsequently, Pamantasan ng Taguig
                                    underwent a renaming process and was
                                    rebranded as Taguig City University,
                                    following the enactment of City Ordinance
                                    No. 13, Series of 2009.
                                </p>
                                <br />
                                <p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    All students enrolled at TCU are
                                    beneficiaries of the City’s scholarship
                                    program wherein their educational expenses
                                    are covered by funds allocated from the
                                    Taguig City Government, financed by the
                                    taxes of its residents. This commitment is
                                    aligned with the City Administration’s
                                    overarching goal of continually improving
                                    access to quality education, enhancing
                                    completion rates, fostering a culture of
                                    excellence among Taguig residents, and
                                    ultimately facilitating a better and more
                                    prosperous life for its populace.
                                </p>
                                <br />
                                <p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    TCU flourishes with the unwavering support
                                    of the Taguig City Government, under the
                                    leadership of Mayor Maria Laarni L.
                                    Cayetano, who has spearheaded the city into
                                    a Transformative, Lively, and Caring
                                    “PROBINSYUDAD™”
                                </p>
                                <br />
                                <p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    TCU has garnered national recognition for
                                    its myriad of academic and extracurricular
                                    achievements. As a young institution, TCU
                                    showcases exemplary academic performance in
                                    board examinations, affirming its dedication
                                    to academic excellence.
                                </p>
                                <br />
                                <p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    Likewise, it has proven its remarkable
                                    achievements in various fields such as
                                    cultural, scientific, technological, and
                                    sports in local, national, and international
                                    competitions.
                                </p>
                            </div>
                        )}

                        {activeInsProf === 'identity' && (
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-red-700">
                                    Institutional Identity
                                </h3>
                                <div className="grid gap-10 md:grid-cols-3">
                                    <div className="bg-white p-6 shadow-md transition hover:shadow-lg">
                                        <h4 className="mb-4 text-xl font-semibold text-blue-900">
                                            Mission
                                        </h4>
                                        <p className="text-lg font-thin text-gray-700">
                                            To nurture a vibrant culture of
                                            academic wellness responsive to the
                                            challenges of technology and the
                                            global community.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 shadow-md transition hover:shadow-lg">
                                        <h4 className="mb-4 text-xl font-semibold text-blue-900">
                                            Vision
                                        </h4>
                                        <p className="text-lg font-thin text-gray-700">
                                            To be an eminent center of excellent
                                            higher education for societal
                                            advancement.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 shadow-md transition hover:shadow-lg">
                                        <h4 className="mb-4 text-xl font-semibold text-blue-900">
                                            Philosophy
                                        </h4>
                                        <p className="text-lg font-thin text-gray-700">
                                            Social transformation for a caring
                                            community and an ecologically
                                            balanced country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeInsProf === 'campus-life' && (
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-red-700">
                                    Campus Life
                                </h3>
                                <p className="mx-auto mb-10 max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    Taguig City University offers a vibrant and
                                    inclusive campus environment...
                                </p>

                                <div className="space-y-10">
                                    <div>
                                        <h4 className="mb-4 text-2xl font-semibold text-red-800">
                                            Life at TCU
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                            {[
                                                'campuslife1.jpg',
                                                'campuslife2.jpg',
                                                'campuslife3.jpg',
                                                'campuslife4.jpg',
                                                'campuslife5.jpg',
                                                'campuslife6.jpg',
                                                'campuslife7.jpg',
                                            ].map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={`/storage/images/${src}`}
                                                    alt={`Campus Life ${index + 1}`}
                                                    className="h-40 w-full cursor-pointer object-cover shadow-md transition hover:scale-105 hover:shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(
                                                            `/storage/images/${src}`,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Lightbox Modal */}
                                {selectedImage && (
                                    <div
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <img
                                            id="modal-image" // <- unique ID
                                            data-value={selectedImage} // optional dataset
                                            src={selectedImage}
                                            alt="Enlarged view"
                                            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <button
                                            onClick={() =>
                                                setSelectedImage(null)
                                            }
                                            className="absolute right-6 top-6 text-3xl font-bold text-white hover:text-red-500"
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeInsProf === 'sports' && (
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-red-700">
                                    Sports & Student Development
                                </h3>
                                <p className="mx-auto mb-10 max-w-3xl text-lg font-thin leading-relaxed text-gray-700">
                                    Beyond academics, TCU supports excellence in
                                    athletics and physical education...
                                </p>

                                <div className="space-y-12">
                                    {/* Basketball */}
                                    <div>
                                        <h4 className="mb-4 text-2xl font-semibold text-red-800">
                                            Basketball
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                            {[
                                                'basketball1.jpg',
                                                'basketball3.jpg',
                                                'basketball4.jpg',
                                                'basketball5.jpg',
                                                'basketball6.jpg',
                                                'basketball7.jpg',
                                                'champion2024.jpg',
                                            ].map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={`/storage/images/${src}`}
                                                    alt={`Basketball ${index + 1}`}
                                                    className="h-40 w-full cursor-pointer object-cover shadow-md transition hover:scale-105 hover:shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(
                                                            `/storage/images/${src}`,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Volleyball */}
                                    <div>
                                        <h4 className="mb-4 text-2xl font-semibold text-red-800">
                                            Volleyball
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                            {[
                                                'valleyball.jpg',
                                                'valleyball1.jpg',
                                                'valleyball2.jpg',
                                                'valleyball3.jpg',
                                                'valleyball4.jpg',
                                                'valleyball5.jpg',
                                            ].map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={`/storage/images/${src}`}
                                                    alt={`Volleyball ${index + 1}`}
                                                    className="h-40 w-full cursor-pointer object-cover shadow-md transition hover:scale-105 hover:shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(
                                                            `/storage/images/${src}`,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cheerleading and Dance */}
                                    <div>
                                        <h4 className="mb-4 text-2xl font-semibold text-red-800">
                                            Cheerleading And Dance
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                            {[
                                                'dance1.jpg',
                                                'dance2.jpg',
                                                'cheerleading.jpg',
                                            ].map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={`/storage/images/${src}`}
                                                    alt={`Dance ${index + 1}`}
                                                    className="h-40 w-full cursor-pointer object-cover shadow-md transition hover:scale-105 hover:shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(
                                                            `/storage/images/${src}`,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Other Sports and Events */}
                                    <div>
                                        <h4 className="mb-4 text-2xl font-semibold text-red-800">
                                            Other Sports and Events
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                            {[
                                                'esports.jpg',
                                                'cleanathlete.jpg',
                                                'cleanathlete1.jpg',
                                                'cleanathlete2.jpg',
                                            ].map((src, index) => (
                                                <img
                                                    key={index}
                                                    src={`/storage/images/${src}`}
                                                    alt={`Event ${index + 1}`}
                                                    className="h-40 w-full cursor-pointer object-cover shadow-md transition hover:scale-105 hover:shadow-lg"
                                                    onClick={() =>
                                                        setSelectedImage(
                                                            `/storage/images/${src}`,
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Lightbox Modal */}
                                {selectedImage && (
                                    <div
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <img
                                            id="sports-modal-image" // <- unique ID
                                            data-value={selectedImage} // optional dataset
                                            src={selectedImage}
                                            alt="Enlarged view"
                                            className="max-h-[90vh] max-w-[90vw] bg-white object-contain p-2 shadow-2xl"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <button
                                            onClick={() =>
                                                setSelectedImage(null)
                                            }
                                            className="absolute right-6 top-6 text-3xl font-bold text-white hover:text-red-500"
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeInsProf === 'TCU-Hymn' && (
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-red-700">
                                    TCU Hymn
                                </h3>

                                <div className="space-y-10 text-center">
                                    <div>
                                        <img
                                            src="/storage/images/tcuhymn.jpg"
                                            alt="TCU hymn"
                                            className="mx-auto h-auto w-auto max-w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeInsProf === 'administration' && (
                            <div className="animate-slideUp">
                                <h3 className="mb-6 text-3xl font-bold text-red-700">
                                    Administration
                                </h3>

                                <p className="mx-auto mb-10 max-w-3xl text-center text-lg font-thin leading-relaxed text-gray-700">
                                    The administrative offices of Taguig City
                                    University ensure that all academic,
                                    operational, and student support services
                                    run efficiently and align with the
                                    university’s mission and vision.
                                </p>

                                {/* Offices Grid */}
                                <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                    {[
                                        {
                                            src: 'ovp1.JPG',
                                            label: 'Office of the Vice President',
                                        },
                                        {
                                            src: 'registrar1.JPG',
                                            label: 'Office of the Registrar',
                                        },
                                        {
                                            src: 'library1.JPG',
                                            label: 'University Library',
                                        },
                                        {
                                            src: 'research1.JPG',
                                            label: 'Research Office',
                                        },
                                        {
                                            src: 'qa1.JPG',
                                            label: 'Quality Assurance Office',
                                        },
                                        {
                                            src: 'mis1.JPG',
                                            label: 'Management Information System (MIS)',
                                        },
                                        {
                                            src: 'osasguidance1.JPG',
                                            label: 'Office of Student Affairs & Services (OSAS) / Guidance',
                                        },
                                        {
                                            src: 'athletics1.JPG',
                                            label: 'Athletics Department',
                                        },
                                        {
                                            src: 'pfcd1.JPG',
                                            label: 'Physical Facilities & Central Department',
                                        },
                                        {
                                            src: 'hrmonitoring1.JPG',
                                            label: 'Human Resource Monitoring Office',
                                        },
                                        {
                                            src: 'nstp1.JPG',
                                            label: 'National Service Training Program (NSTP)',
                                        },
                                        {
                                            src: 'supplies1.JPG',
                                            label: 'Supplies Office',
                                        },
                                    ].map((office, index) => (
                                        <div
                                            key={index}
                                            className="relative cursor-pointer overflow-hidden shadow-md transition-transform duration-300 hover:rotate-[1deg] hover:scale-105"
                                            onClick={() =>
                                                setSelectedImage(
                                                    `/storage/images/${office.src}`,
                                                )
                                            }
                                        >
                                            <img
                                                src={`/storage/images/${office.src}`}
                                                alt={office.label}
                                                className="h-40 w-full object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2">
                                                <p className="text-xs font-semibold text-white">
                                                    {office.label}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Modal */}
                                {selectedImage && (
                                    <div
                                        onClick={() => setSelectedImage(null)}
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                                    >
                                        <div
                                            className="animate-slideUp relative mx-4 w-full max-w-5xl"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img
                                                src={selectedImage}
                                                alt="Administrative Office"
                                                className="max-h-[85vh] w-full bg-white object-contain shadow-2xl"
                                            />
                                            <button
                                                onClick={() =>
                                                    setSelectedImage(null)
                                                }
                                                className="absolute right-4 top-3 text-3xl font-bold text-white hover:text-red-500"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

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
                    className="fixed bottom-6 right-6 z-50 rounded-full bg-red-700 p-3 text-white shadow-lg transition hover:bg-red-800"
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
