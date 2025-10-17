<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PostsController extends Controller
{
    public function index()
    {
        $posts = [
            // 📰 NEWS & UPDATES

            [
                'type' => 'news',
                'slug' => 'me-en-li-ex-passers',
                'title' => 'Mechanical Engineering Licensure Examination Passers',
                'date' => '2025-11-10',
                'tag' => 'Passers',
                'description' => 'The City of Taguig expresses its pride and congratulations to the four graduates from Taguig City University who successfully passed the August 2025 Licensure Examination for Mechanical Engineering.',
                'image' => '/storage/images/engexampass.jpg',
            ],

            [
                'type' => 'news',
                'slug' => 'app-fresh-admission-2024-2025',
                'title' => 'Application for Freshmen Admission AY 2024-2025',
                'date' => '2025-07-13',
                'tag' => 'Enrollment',
                'description' => 'TCU Online Application for Freshmen Admission (for Incoming First Year College Academic Year 2024-2025).',
                'image' => '/storage/images/2526enrl.jpg',
            ],


            // 🎉 EVENTS
            [
                'type' => 'event',
                'slug' => 'intramurals-2025',
                'title' => 'Intramurals 2025',
                'date' => '2025-10-20',
                'tag' => 'Sports & Wellness',
                'description' => 'Sports competitions and cultural activities are ongoing.',
                'image' => '/storage/images/intramurals.png',
            ],
            [
                'type' => 'event',
                'slug' => 'research-conference',
                'title' => 'Research Conference',
                'date' => '2025-11-10',
                'tag' => 'Research & Innovation',
                'description' => 'Explore groundbreaking studies and presentations.',
                'image' => '/storage/images/research.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'job-fair-2025',
                'title' => 'Job Fair 2025',
                'date' => '2025-12-15',
                'tag' => 'Career Development',
                'description' => 'Meet recruiters and explore career opportunities for graduating students.',
                'image' => '/storage/images/jobfair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'christmas-concert',
                'title' => 'Christmas Concert',
                'date' => '2025-12-23',
                'tag' => 'Culture & Arts',
                'description' => 'Celebrate the holidays with music and performances by students and faculty.',
                'image' => '/storage/images/christmas-concert.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'science-fair-2026',
                'title' => 'Science Fair 2026',
                'date' => '2026-01-26',
                'tag' => 'STEM & Innovation',
                'description' => 'A showcase of innovative projects from our science and engineering students.',
                'image' => '/storage/images/sciencefair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'founders-day-2024',
                'title' => "Founder's Day 2024",
                'date' => '2024-10-05',
                'tag' => 'University Celebration',
                'description' => 'Celebrating 19 years of excellence with alumni reunions and festivities.',
                'image' => '/storage/images/FoundersDay.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'enrollment-2025-2026',
                'title' => 'Enrollment for A.Y 2025-2026',
                'date' => '2024-01-17',
                'tag' => 'Admissions',
                'description' => 'Admission and enrollment are open! Apply now through the registrar’s office or online portal.',
                'image' => '/storage/images/enrollment2526.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'graduation-rites-2024',
                'title' => 'Graduation Rites 2024',
                'date' => '2024-07-23',
                'tag' => 'Commencement',
                'description' => 'Honoring the Class of 2024 for their hard work and dedication to excellence.',
                'image' => '/storage/images/gradrites.png',
            ],
            [
                'type' => 'event',
                'slug' => 'community-outreach-2024',
                'title' => 'Community Outreach 2024',
                'date' => '2024-03-12',
                'tag' => 'Community Engagement',
                'description' => 'Student and faculty extended help to nearby communities through outreach programs.',
                'image' => '/storage/images/outreach.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'cultural-festival',
                'title' => 'Cultural Festival',
                'date' => '2025-02-26',
                'tag' => 'Student Life',
                'description' => 'Experience the diversity of traditions and performances by different student groups.',
                'image' => '/storage/images/cuturalfes.png',
            ],
        ];

        return Inertia::render('sample1', [
            'posts' => $posts,
        ]);
    }

    public function showByType($type)
    {
        $posts = [
            // 📰 NEWS & UPDATES
            [
                'type' => 'news',
                'slug' => 'me-en-li-ex-passers',
                'title' => 'Mechanical Engineering Licensure Examination Passers',
                'date' => '2025-11-10',
                'tag' => 'Passers',
                'description' => 'The City of Taguig expresses its pride and congratulations to the four graduates from Taguig City University who successfully passed the August 2025 Licensure Examination for Mechanical Engineering.',
                'image' => '/storage/images/engexampass.jpg',
            ],
            [
                'type' => 'news',
                'slug' => 'app-fresh-admission-2024-2025',
                'title' => 'Application for Freshmen Admission AY 2024-2025',
                'date' => '2025-07-13',
                'tag' => 'Enrollment',
                'description' => 'TCU Online Application for Freshmen Admission (for Incoming First Year College Academic Year 2024-2025).',
                'image' => '/storage/images/2526enrl.jpg',
            ],

            // 🎉 EVENTS
            [
                'type' => 'event',
                'slug' => 'intramurals-2025',
                'title' => 'Intramurals 2025',
                'date' => '2025-10-20',
                'tag' => 'Sports & Wellness',
                'description' => 'Sports competitions and cultural activities are ongoing.',
                'image' => '/storage/images/intramurals.png',
            ],
            [
                'type' => 'event',
                'slug' => 'research-conference',
                'title' => 'Research Conference',
                'date' => '2025-11-10',
                'tag' => 'Research & Innovation',
                'description' => 'Explore groundbreaking studies and presentations.',
                'image' => '/storage/images/research.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'job-fair-2025',
                'title' => 'Job Fair 2025',
                'date' => '2025-12-15',
                'tag' => 'Career Development',
                'description' => 'Meet recruiters and explore career opportunities for graduating students.',
                'image' => '/storage/images/jobfair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'christmas-concert',
                'title' => 'Christmas Concert',
                'date' => '2025-12-23',
                'tag' => 'Culture & Arts',
                'description' => 'Celebrate the holidays with music and performances by students and faculty.',
                'image' => '/storage/images/christmas-concert.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'science-fair-2026',
                'title' => 'Science Fair 2026',
                'date' => '2026-01-26',
                'tag' => 'STEM & Innovation',
                'description' => 'A showcase of innovative projects from our science and engineering students.',
                'image' => '/storage/images/sciencefair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'founders-day-2024',
                'title' => "Founder's Day 2024",
                'date' => '2024-10-05',
                'tag' => 'University Celebration',
                'description' => 'Celebrating 19 years of excellence with alumni reunions and festivities.',
                'image' => '/storage/images/FoundersDay.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'enrollment-2025-2026',
                'title' => 'Enrollment for A.Y 2025-2026',
                'date' => '2024-01-17',
                'tag' => 'Admissions',
                'description' => 'Admission and enrollment are open! Apply now through the registrar’s office or online portal.',
                'image' => '/storage/images/enrollment2526.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'graduation-rites-2024',
                'title' => 'Graduation Rites 2024',
                'date' => '2024-07-23',
                'tag' => 'Commencement',
                'description' => 'Honoring the Class of 2024 for their hard work and dedication to excellence.',
                'image' => '/storage/images/gradrites.png',
            ],
            [
                'type' => 'event',
                'slug' => 'community-outreach-2024',
                'title' => 'Community Outreach 2024',
                'date' => '2024-03-12',
                'tag' => 'Community Engagement',
                'description' => 'Student and faculty extended help to nearby communities through outreach programs.',
                'image' => '/storage/images/outreach.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'cultural-festival',
                'title' => 'Cultural Festival',
                'date' => '2025-02-26',
                'tag' => 'Student Life',
                'description' => 'Experience the diversity of traditions and performances by different student groups.',
                'image' => '/storage/images/cuturalfes.png',
            ],
        ];

        // Filter posts based on type (news or event)
        $filtered = array_filter($posts, fn($p) => $p['type'] === $type);

        return Inertia::render('posts/index', [
            'type' => $type,
            'posts' => array_values($filtered),
        ]);
    }


    public function show($type, $slug)
    {
        $posts = [
            // 📰 NEWS & UPDATES

            [
                'type' => 'news',
                'slug' => 'me-en-li-ex-passers',
                'title' => 'Mechanical Engineering Licensure Examination Passers',
                'date' => '2025-11-10',
                'tag' => 'Passers',
                'description' => 'The City of Taguig expresses its pride and congratulations to the four graduates from Taguig City University who successfully passed the August 2025 Licensure Examination for Mechanical Engineering.',
                'image' => '/storage/images/engexampass.jpg',
            ],

            [
                'type' => 'news',
                'slug' => 'app-fresh-admission-2024-2025',
                'title' => 'Application for Freshmen Admission AY 2024-2025',
                'date' => '2025-07-13',
                'tag' => 'Enrollment',
                'description' => 'TCU Online Application for Freshmen Admission (for Incoming First Year College Academic Year 2024-2025).',
                'image' => '/storage/images/2526enrl.jpg',
            ],


            // 🎉 EVENTS
            [
                'type' => 'event',
                'slug' => 'intramurals-2025',
                'title' => 'Intramurals 2025',
                'date' => '2025-10-20',
                'tag' => 'Sports & Wellness',
                'description' => 'Sports competitions and cultural activities are ongoing.',
                'image' => '/storage/images/intramurals.png',
            ],
            [
                'type' => 'event',
                'slug' => 'research-conference',
                'title' => 'Research Conference',
                'date' => '2025-11-10',
                'tag' => 'Research & Innovation',
                'description' => 'Explore groundbreaking studies and presentations.',
                'image' => '/storage/images/research.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'job-fair-2025',
                'title' => 'Job Fair 2025',
                'date' => '2025-12-15',
                'tag' => 'Career Development',
                'description' => 'Meet recruiters and explore career opportunities for graduating students.',
                'image' => '/storage/images/jobfair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'christmas-concert',
                'title' => 'Christmas Concert',
                'date' => '2025-12-23',
                'tag' => 'Culture & Arts',
                'description' => 'Celebrate the holidays with music and performances by students and faculty.',
                'image' => '/storage/images/christmas-concert.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'science-fair-2026',
                'title' => 'Science Fair 2026',
                'date' => '2026-01-26',
                'tag' => 'STEM & Innovation',
                'description' => 'A showcase of innovative projects from our science and engineering students.',
                'image' => '/storage/images/sciencefair.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'founders-day-2024',
                'title' => "Founder's Day 2024",
                'date' => '2024-10-05',
                'tag' => 'University Celebration',
                'description' => 'Celebrating 19 years of excellence with alumni reunions and festivities.',
                'image' => '/storage/images/FoundersDay.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'enrollment-2025-2026',
                'title' => 'Enrollment for A.Y 2025-2026',
                'date' => '2024-01-17',
                'tag' => 'Admissions',
                'description' => 'Admission and enrollment are open! Apply now through the registrar’s office or online portal.',
                'image' => '/storage/images/enrollment2526.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'graduation-rites-2024',
                'title' => 'Graduation Rites 2024',
                'date' => '2024-07-23',
                'tag' => 'Commencement',
                'description' => 'Honoring the Class of 2024 for their hard work and dedication to excellence.',
                'image' => '/storage/images/gradrites.png',
            ],
            [
                'type' => 'event',
                'slug' => 'community-outreach-2024',
                'title' => 'Community Outreach 2024',
                'date' => '2024-03-12',
                'tag' => 'Community Engagement',
                'description' => 'Student and faculty extended help to nearby communities through outreach programs.',
                'image' => '/storage/images/outreach.jpg',
            ],
            [
                'type' => 'event',
                'slug' => 'cultural-festival',
                'title' => 'Cultural Festival',
                'date' => '2025-02-26',
                'tag' => 'Student Life',
                'description' => 'Experience the diversity of traditions and performances by different student groups.',
                'image' => '/storage/images/cuturalfes.png',
            ],
        ];

        $post = collect($posts)->firstWhere('slug', $slug);

        if (!$post) {
            abort(404);
        }

        return Inertia::render('posts/show', [
            'post' => $post,
        ]);
    }
}