<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CollegeController extends Controller
{
    private function colleges()
    {
        return [
            [
                'slug' => 'cas',
                'logo' => '/storage/images/CAS.png',
                'name' => 'College of Arts and Sciences',
                'description' => 'The Arts and the Sciences have been the foundation of college education for centuries. This college blends the sciences, arts, and humanities to nurture critical thinking, creativity, and social awareness.',
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/casfaculty.png',
                'objective' => [
                    'To develop well-rounded individuals who are proud of their cultural heritage and responsive to national and global issues.',
                    'To promote research capability and scholarly integrity.',
                    'To cultivate the right understanding of human nature and society.',
                    'To strengthen values that foster sound interpersonal relations and ethical leadership.',
                    'To sustain a humane, technologically-advanced academic community dedicated to unity and excellence.',
                    'To enhance analytical and critical thinking toward sound judgment and decision-making.',
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor of Science in Psychology',
                        'description' => [
                            'Psychology is the scientific study of behavior and mental processes. The program equips students with foundational knowledge and research skills for understanding human behavior and mental health.',
                            'It prepares students for entry-level careers in research, human resources, and mental health services, as well as graduate studies in psychology and related professions.',
                        ],
                        'tags' => ['psychology', 'behavioral science', 'mental health', 'research', 'counseling'],
                        'details' => [
                            [
                                'name' => 'Learning Experiences',
                                'content' => [
                                    'Students will study specialized topics in psychology and develop analytical and research skills.',
                                    'Those pursuing graduate education or applied psychology careers will gain the experience needed for success in research and practice.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Public Administration',
                        'description' => [
                            'This degree program prepares students for careers in public administration and governance for the public interest.',
                            'It trains students to manage and lead government agencies, NGOs, and organizations committed to serving the public good.',
                        ],
                        'tags' => ['governance', 'public service', 'policy', 'management', 'administration'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To familiarize students with government operations and policymaking mechanisms.',
                                    'To engage students in policy analysis, advocacy, and public management.',
                                    'To apply governance theories and principles in real-world policy settings.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Social Work',
                        'description' => [
                            'This program prepares students for professional practice in social work, focusing on enhancing social functioning and promoting social justice.',
                            'The curriculum emphasizes integrative learning from individual to community practice, guided by social work ethics and principles.',
                        ],
                        'tags' => ['social work', 'community', 'welfare', 'advocacy', 'outreach'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To cultivate leadership and problem-solving skills in social welfare services.',
                                    'To develop competence in linking people with needed resources and advocating for marginalized sectors.',
                                    'To promote professional values and ethics in social work practice.',
                                ],
                            ],
                        ],
                    ],
                ],
                'link' => '/colleges/cas',
            ],

            [
                'slug' => 'cbm',
                'logo' => '/storage/images/CBM.png',
                'name' => 'College of Business and Management',
                'description' => 'Business Management is the discipline devoted to organizing, analyzing, and planning various types of business operations, preparing students for leadership roles in diverse business environments.',
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/cbmfaculty.png',
                'objective' => [
                    'To apply the fundamental concepts, theories, and practices of business management within the legal and regulatory framework.',
                    'To perform analytical and mathematical operations relevant to business management.',
                    'To become proficient in using information and communication technology for solving business problems.',
                    'To demonstrate competencies in performing tasks across different business operations.',
                    'To deliver effective oral and written communication skills in transactions, negotiations, and business presentations.',
                    'To engage in research, including business and marketing studies, feasibility analyses, and academic theses.',
                    'To present and publish research outputs in local and international forums.',
                    'To gain hands-on experience through internships and community engagement.',
                    'To uphold excellence, professionalism, and ethical values in business practice.',
                    'To contribute to nation-building by promoting corporate social responsibility.',
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor of Science in Business Administration Major in Human Resource Management',
                        'description' => [
                            'This program prepares students for careers in human resource management, recruitment, training, and career development.',
                            'Graduates are equipped to handle the diverse human capital needs of modern organizations and contribute strategically to workforce development.',
                        ],
                        'tags' => ['business', 'human resource', 'recruitment', 'training', 'labor relations', 'organizational behavior'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To understand key concepts and principles in human resource management.',
                                    'To help students integrate effectively into corporate environments and become productive professionals.',
                                    'To develop appreciation for the HR role as a strategic partner in organizational success.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Business Administration Major in Marketing Management',
                        'description' => [
                            'This program trains students for careers in marketing, advertising, and public relations, emphasizing adaptability and innovation in a dynamic business environment.',
                            'The curriculum builds analytical, creative, and problem-solving skills necessary for marketing strategy and brand development.',
                        ],
                        'tags' => ['marketing', 'branding', 'sales', 'digital marketing', 'advertising'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To provide a strong foundation in marketing principles and strategic thinking.',
                                    'To cultivate creativity, innovation, and the ability to design customer-centered solutions.',
                                    'To enhance students’ competence in marketing communications, technology use, and global marketing practices.',
                                    'To instill social responsibility and ethics in marketing decision-making.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Entrepreneurship',
                        'description' => [
                            'This program helps aspiring entrepreneurs develop the knowledge, skills, and values necessary to establish and manage successful business ventures.',
                            'Through academic and experiential learning, students gain real-world insight into starting, operating, and growing enterprises.',
                        ],
                        'tags' => ['entrepreneurship', 'startup', 'innovation', 'business development', 'management'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To maintain excellence in entrepreneurial education and skills development.',
                                    'To guide students in creating business plans and sustainable ventures.',
                                    'To strengthen research, community engagement, and partnerships that support enterprise growth.',
                                    'To promote Filipino values and social transformation through entrepreneurship.',
                                    'To establish national and international linkages for entrepreneurial collaboration.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Office Administration',
                        'description' => [
                            'This four-year program trains students for administrative and clerical roles in professional, technology-driven office environments.',
                            'Students gain skills in communication, documentation, office technology, and management support functions.',
                        ],
                        'tags' => ['office administration', 'clerical', 'communication', 'management support', 'documentation'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To develop leadership and administrative skills essential for efficient office management.',
                                    'To equip students with communication, organizational, and technological competencies for the modern workplace.',
                                    'To foster professionalism, nationalism, and ethical responsibility in administrative careers.',
                                ],
                            ],
                        ],
                    ],
                ],
                'link' => '/colleges/cbm',
            ],

            [
                'slug' => 'ccj',
                'logo' => '/storage/images/CCJ.png',
                'name' => 'College of Criminal Justice',
                'description' => 'The field of Criminology is the study of crime and justice agencies as they operate and react to crime. It provides a foundation for careers in law enforcement, investigation, and justice administration.',
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/ccjfaculty.png',
                'objective' => [
                    'To encourage students to conduct research related to crime and justice.',
                    'To prepare students for diverse careers in law enforcement and criminal investigation.',
                    'To foster leadership, integrity, and discipline among future criminologists.'
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor of Science in Criminology',
                        'description' => ['The Bachelor of Science in Criminology program focuses on the study of crime and justice systems, preparing graduates for careers in law enforcement, investigation, public safety, and corrections.',],
                        'tags' => [
                            'criminology',
                            'law-enforcement',
                            'forensics',
                            'justice',
                            'security'
                        ],
                        'details' => [
                            [
                                'name' => 'Careers',
                                'content' => [
                                    'Graduates who pass the Criminologist Licensure Examination enjoy priority in appointments within the PNP, NBI, BJMP, BFP, and LTO.',
                                    'Licensed criminologists may work in various government and private sectors related to law enforcement, investigation, and public safety such as DOJ, CHR, PAGCOR, DENR, DTI, AFP, BI, BOC, DOTr, CAAP, BSP, BIR, CHED, MMDA, Supreme Court, and others.'
                                ]
                            ]
                        ]
                    ]
                ],
                'link' => '/colleges/ccj',
            ],

            [
                'slug' => 'ced',
                'logo' => '/storage/images/CED.png',
                'name' => 'College of Education',
                'description' => 'College of Education is a division within the university that is devoted to scholarship in the field of education, which is an interdisciplinary branch of the social sciences encompassing sociology, psychology, linguistics, economics, political science, public policy, history, and others, all applied to the topic of elementary and secondary education.',
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/cedfaculty.png',
                'objective' => [
                    'To strengthen scientific literacy, enhancing precision in numerical expression, logical thinking and problem solving and conveying a general understanding of arts and science as a way of looking at the world.',
                    'To acquire deeper understanding on the totality of human experience and empowering students to formulate for themselves a human perspective that integrates all branches of knowledge in a profound understanding of the individual and society.',
                    'To offer a broad range of academic opportunities leading to a career in education. The college aims to produce highly competent educators founded on technology and values.',
                    'To create a strong awareness of the general social problems and issues with relevance to the Philippines and the global society.',
                    'To develop effective communication skills both in English and Filipino and fostering critical understanding and appreciation of how people give expression to their intellectual products and their experiences in the world.',
                    'To promote intellectual leadership and sustain a humane and technologically advanced community where people of diverse orientation work and learn together to attain unity, cooperation, and excellence in a changing world.',
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor in Elementary Education',
                        'description' => [
                            'Bachelor in Elementary Education (BEED) is an undergraduate teacher education degree program designed to prepare individuals intending to teach in the elementary program.'
                        ],
                        'tags' => [
                            'education',
                            'elementary',
                            'teaching',
                            'pedagogy',
                            'curriculum'
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'Develop highly motivated and competent teachers specializing in the content and pedagogy for elementary education.',
                                    'Demonstrate in-depth understanding of the diversity of learners in various learning areas.',
                                    'Manifest meaningful and comprehensive pedagogical content knowledge (PCK) on the different subject areas.',
                                    'Utilize appropriate assessment and evaluation tools to measure learning outcomes.',
                                    'Manifest skills in communication, higher order thinking and use of tools and technology to accelerate learning and teaching.',
                                    'Demonstrate positive attributes of a model teacher, both as an individual and as a professional.',
                                    'Manifest a desire to continuously pursue personal and professional development.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Bachelor of Secondary Education Major in English',
                        'description' => [
                            'BSE English is an undergraduate teacher education degree program aimed at developing and enhancing future secondary teachers’ field of expertise in implementing content and pedagogy in education, specifically in teaching communication skills in English.'
                        ],
                        'tags' => [
                            'english',
                            'literature',
                            'linguistics',
                            'communication',
                            'writing'
                        ],
                        'details' => [
                            [
                                'name' => 'Objective',
                                'content' => [
                                    'To produce holistically capable secondary teachers who are fully exercising the duties and responsibilities of effective, efficient, innovative, and creative educators.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Bachelor of Secondary Education Major in Math',
                        'description' => [
                            'BSE Mathematics is a four-year degree program designed to prepare students in teaching different branches of Mathematics such as Algebra, Geometry, Trigonometry, Calculus and Statistics to secondary school students.'
                        ],
                        'tags' => [
                            'mathematics',
                            'algebra',
                            'geometry',
                            'statistics',
                            'problem-solving'
                        ],
                        'details' => [
                            [
                                'name' => 'Objective',
                                'content' => [
                                    'To produce well-equipped graduates to demonstrate comprehensive and up-to-date knowledge in teaching mathematics in the secondary education curriculum.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Bachelor of Secondary Education Major in Science',
                        'description' => [
                            'The Bachelor of Science in Education (BSED) major in Science is a four-year teacher education program designed to equip students with the necessary competencies to pursue careers as science educators at the secondary level.',
                            'Emphasizing courses in chemistry and physics, the curriculum ensures that graduates possess the requisite knowledge and skills to effectively teach physical sciences. Complementary course works in biology and environmental science, alongside professional and general education studies, provide students with a comprehensive foundation.',
                            'Furthermore, the program aims to cultivate successful professionals prepared to contribute to both the educational and research domains within the field of science.'
                        ],
                        'tags' => [
                            'science',
                            'biology',
                            'physics',
                            'chemistry',
                            'education'
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'Demonstrate competent knowledge across Biology, Chemistry, Physics, Earth Science, and Research, essential for effective teaching at the secondary level.',
                                    'Facilitate scientific learning by employing a diverse range of teaching methodologies and delivery modes tailored to specific learners and their respective environments.',
                                    'Innovate curricula, utilization of ICT, instructional plans, teaching approaches, and resources that foster engagement in scientific discourse, catering to the diverse needs of learners.',
                                    'Apply professional and ethical teaching standards, demonstrating a heightened sensitivity to the intricate dynamics of local, national, and global contexts.',
                                    'Pursue lifelong scientific learning, fostering personal and professional growth through varied experiential and field-based opportunities, ensuring a commitment to continuous improvement and adaptability in the ever-evolving field of science education.'
                                ]
                            ]
                        ]
                    ]
                ],
                'link' => '/colleges/ced',
            ],

            [
                'slug' => 'chtm',
                'logo' => '/storage/images/CHTM.png',
                'name' => 'College of Hospitality & Tourism',
                'description' => [
                    'The programs related to the fields of hospitality and tourism education will equip students with competencies that are needed to execute operational tasks and management functions in food production (culinary), accommodation, food and beverage service, tourism planning and product development, events planning, transportation services, travel and tour operations and other emerging sectors of hospitality and tourism industry.',
                ],
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/chtmfaculty.png',
                'objective' => [
                    'To develop globally competent professionals with the knowledge, skills, and values essential for success in the hospitality and tourism industries.',
                    'To foster innovation and excellence in service operations, event management, and sustainable tourism practices.',
                    'To promote cultural awareness and ethical responsibility among students to uphold quality service and respect for diversity.',
                    'To encourage research and community engagement that contribute to the growth and sustainability of local and international tourism.',
                    'To strengthen industry partnerships to provide experiential learning and career opportunities through internships and collaborations.',
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor of Science in Hospitality Management',
                        'description' => [
                            'The Bachelor of Science in Hospitality Management is a four-year degree program that equips students with the necessary knowledge, skills, and attitude to provide quality service in the hospitality industry. It contains subjects that will address the needs of different sectors in the hospitality industry such as culinary, front office, tourism, resort, and hotel operations. The program also helps students to develop effective communication and interpersonal skills which are essential in establishing positive customer relations.',
                            'Graduates of this program are expected to apply basic techniques in performing prescribed range of specific functions in the areas of Food and Beverage, Front Office, and Housekeeping Operations as required in accommodation, food and beverages enterprises; undertake planning and initiation of alternative approaches to skills and knowledge applications across a broad range of technical and procedural requirements.',
                        ],
                        'tags' => [
                            'hospitality',
                            'culinary',
                            'food-service',
                            'hotel-management',
                            'event-management',
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To train students to be fully equipped not only with the knowledge and skills in Front Office Services, Housekeeping, Bartending, Food and Beverage Services, Baking and Pastry Production and Commercial Cooking.',
                                    'Tour Skills from the Technical Education, Skills and Development Authority (TESDA).',
                                    'To enable the students to have attained the competencies in any of the technical courses in the BSHM program to land a job even before finishing the degree program.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Tourism Management',
                        'description' => [
                            'The tourism industry is a vast system consisting of several sectors with airlines, hotels, resorts, travel agencies and tour operators constituting the greater bulk. The myriad of smaller entities that thrive and wane with tourism’s upswings and downturns include souvenir shops, restaurants, bars and the like. The industry also goes beyond its business realm; it covers government and non-government organizations as well as educational institutions.',
                            'Tourism generates both positive and negative impacts on the culture, economy, and environment of generating and receiving countries. It can uplift a country’s living standards, instill greater pride in one’s identity and make people more aware of their cultural and natural heritage.',
                        ],
                        'tags' => [
                            'tourism',
                            'travel',
                            'events',
                            'tour-operations',
                            'destination-management',
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To provide comprehensive knowledge and critical awareness of the main ideas, concepts and principles in tourism management.',
                                    'To develop skills in planning, developing and sustaining a tourism product.',
                                    'To fortify skills in the field of research, leadership, entrepreneurship, travel agency management, resort management, event management and transportation management.',
                                    'To cultivate skills in planning, packaging, and pricing domestic or international tourism products based on market requirements and number of participants in a particular tour program.',
                                    'To hone reportorial and communication skills specifically in the field of tourism.',
                                    'To sharpen skills in the application of work related technology including information handling and skills for lifelong learning.',
                                ],
                            ],
                        ],
                    ],
                ],

                'link' => '/colleges/chtm',
            ],

            [
                'slug' => 'cict',
                'logo' => '/storage/images/CICT.png',
                'name' => 'College of Information and Communication Technology',
                'description' => [
                    'The College of Information and Communication Technology equips students with comprehensive knowledge and hands-on experience in software development, system analysis, network administration, and emerging technologies. It fosters critical thinking, problem-solving, and innovation, preparing graduates to excel in dynamic IT and communication environments. The college emphasizes research, industry collaboration, and ethical practices to develop competent professionals capable of leading in the digital age.',
                ],
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/cictfaculty.png',
                'objective' => [
                    'To be able to provide competent learning in software engineering, system design, system development and project implementation.',
                    'To prepare stakeholders in a research and development environment.',
                    'To serve as an avenue of IT related learning for continuous personnel and professional development.',
                    'To ensure sustainable growth and collaboration in providing appropriate technical support to its clients.',
                    'To engage in technopreneurship and practice professional ethics.',
                    'To produce students and faculty that act as enablers, innovators, achievers, and leaders towards transforming into a globally competitive and responsible IT community in the digital economy.',
                    'To support the local government administration in fully achieving its ICT goals.',
                ],
                'courses' => [
                    [
                        'name' => 'Bachelor of Science in Computer Science',
                        'description' => [
                            'The BS Computer Science program includes the study of computing concepts and theories, algorithmic foundations and new developments in computing. The program prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving computing problems.',
                            'The program also includes the study of the standards and practices in Software Engineering. It prepares students to acquire skills and disciplines required for designing, writing and modifying software components, modules and applications that comprise software solutions.',
                            'The BSCS graduates are expected to become globally competent, innovative and socially and ethically responsible computing professionals engaged in life-long learning endeavors. They are capable of contributing to the country’s local and national development goals.',
                        ],
                        'tags' => [
                            'computer-science',
                            'programming',
                            'algorithms',
                            'software',
                            'data-structures',
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To articulate and discuss the latest developments in the specific field of practice.',
                                    'To effectively communicate orally and in writing using both English and Filipino.',
                                    'To work effectively and independently in multi-disciplinary and multi-cultural teams.',
                                    'To act in recognition of professional, social and ethical responsibility.',
                                    'To preserve and promote “Filipino historical and cultural heritage”.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Bachelor of Science in Information System',
                        'description' => [
                            'The BS Information Systems includes the study of application and effect of information technology to organizations. Graduates of the program should be able to implement an information system which considers complex technological and organizational factors affecting it. These include components, tools, techniques, strategies, methodologies, etc.',
                            'Graduates are able to help an organization determine how information and technology-enabled business processes can be used as strategic tools to achieve a competitive advantage. As a result, IS professionals require a sound understanding of organizational principles and practices so that they can serve as an effective bridge between the technical and management/users communities within an organization.',
                            'The BSIS graduates are expected to become globally competent, innovative and socially and ethically responsible computing professionals engaged in life-long learning endeavors. They are capable of contributing to the country’s local and national development goals.',
                        ],
                        'tags' => [
                            'information-systems',
                            'database',
                            'it-management',
                            'system-analysis',
                            'technology',
                        ],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To analyze complex problems, and identify and define the computing requirements needed to design an appropriate solution.',
                                    'To apply computing and other knowledge domains to address real-world problems.',
                                    'To design and develop computing solutions using a system-level perspective.',
                                    'To utilize modern computing tools.',
                                ],
                            ],
                        ],
                    ],
                ],
                'link' => '/colleges/cict',
            ],


            [
                'slug' => 'graduate-school',
                'logo' => '/storage/images/GRADSCHOOL.png',
                'name' => 'Graduate School',
                'description' => [
                    'The Taguig City University Graduate School awards advanced academic degrees in education, business, criminal justice, and public administration.',
                    'Taguig City University does not only provide its graduate students the practical skills needed in the workforce, but makes sure that its students are imbibed with a good sense of social justice.'
                ],
                'image' => '/storage/images/buildingbg1.jpg',
                'featuredImage' => '/storage/images/gradschoolfaculty.png',
                'objective' => [
                    'To provide advanced academic and professional training in education, business, criminal justice, and public administration.',
                    'To develop research skills and critical thinking necessary for scholarly and practical contributions.',
                    'To prepare graduates for leadership roles in public and private sectors.',
                    'To instill ethical standards, social responsibility, and community service.',
                    'To foster lifelong learning and continuous professional development.'
                ],
                'courses' => [
                    [
                        'name' => 'Master of Arts in Education major in Educational Management',
                        'description' => [
                            'The Master of Arts in Education major in Educational Management (MAED) is a two-year graduate program that enhances the knowledge of students in the basic principles of planning supervisory programs at all levels – elementary, secondary, and tertiary. It teaches management theories, process-planning, organizing, leading and controlling applicable to educational agencies and academic institutions.',
                            'It educates and trains globally competitive educators who can effectively design ideal learning experiences and efficiently manage educational enterprises through experiential and research-based learning process.'
                        ],
                        'tags' => ['graduate', 'education', 'leadership', 'management', 'research'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To offer an integrated program of Educational Management and Leadership.',
                                    'To provide students with leadership knowledge and management skills.',
                                    'To make students become confident leaders/managers in an academic institution.',
                                    'To prepare students for effective organization and administration of schools and educational institutions.',
                                    'To prepare training executives who act creatively and productively.',
                                    'To strengthen students’ knowledge and skills in research evaluation and analysis.',
                                    'To familiarize students with leadership and management models that can be adopted by academic institutions.',
                                    'To provide students with knowledge, attitudes, and skills necessary in serving the educational community.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Master in Business Administration',
                        'description' => [
                            'The Master in Business Administration (MBA) program is a two-year graduate program usually taken by mid-career professionals to gain an advantage in their professional careers. The curriculum is designed to equip students with the skills that will make them qualified and competent to occupy higher-level management positions.',
                            'The MBA program centers on management techniques, business concepts, economics, applied mathematics, statistics, and behavioral science. It trains students in managerial tools and decision-making processes in business.',
                            'The MBA is intended for graduates and executives who wish to specialize in the advanced level of administrative and management functions of the general business environment.'
                        ],
                        'tags' => ['mba', 'business', 'leadership', 'finance', 'management'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To develop high-quality leadership and expertise in the field of business management to meet global standards.',
                                    'To enhance conceptual and analytical research skills in business management through modern technologies.',
                                    'To strengthen research capabilities to meet national, regional, and global growth and development.',
                                    'To cultivate scholarship, professionalism, ethical and social responsibility, and humanism.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Master in Public Administration',
                        'description' => [
                            'The MPA program focuses on the practice of public administration at the local, national, and supranational levels, providing advanced training in public policy and management.',
                            'It provides a comprehensive background for careers in government, NGOs, hospitals, consulting, education, and human relations.',
                            'Applicants without related undergraduate degrees are encouraged to take prerequisite courses or demonstrate relevant work experience.'
                        ],
                        'tags' => ['public-admin', 'policy', 'governance', 'public-service', 'leadership'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To develop high-quality leadership and expertise in Public Administration.',
                                    'To enhance conceptual, analytical, and research skills in the field.',
                                    'To strengthen research capabilities towards national growth and development.'
                                ]
                            ]
                        ]
                    ],
                    [
                        'name' => 'Master of Science in Criminal Justice',
                        'description' => [
                            'Criminal Justice covers laws, enforcement, and institutions that maintain order, prevent crime, and administer justice.',
                            'The program includes criminology, legal studies, international criminal justice, forensics, and human rights.',
                            'Graduates gain deeper understanding of societal issues and pursue roles such as lawyer, judge, criminologist, policy official, or human rights advocate.'
                        ],
                        'tags' => ['criminology', 'justice', 'law', 'security', 'research'],
                        'details' => [
                            [
                                'name' => 'Objectives',
                                'content' => [
                                    'To prepare students to excel in the field of Criminology.',
                                    'To equip them with advanced knowledge and professional skills.',
                                    'To encourage advanced and independent research in Criminology.',
                                    'To train globally competitive professionals in the field.'
                                ]
                            ]
                        ]
                    ]
                ],

                'link' => '/colleges/graduate-school'
            ],






        ];
    }

    public function index()
    {
        return Inertia::render('colleges', [
            'colleges' => $this->colleges(),
        ]);
    }

    public function show($slug)
    {
        $college = collect($this->colleges())->firstWhere('slug', $slug);

        if (!$college) {
            abort(404, 'College not found');
        }

        return Inertia::render('college-details', [
            'college' => $college,
            'colleges' => $this->colleges(),
        ]);
    }
}
