<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class CampusLifeController extends Controller
{
    public function index()
    {
        $sections = [
            [
                'title' => 'Orientation',
                'images' => [
                    '/storage/images/campuslife/orientation/campuslife01.jpg',
                    '/storage/images/campuslife/orientation/campuslife02.jpeg',
                    '/storage/images/campuslife/orientation/campuslife29.png',
                    '/storage/images/campuslife/orientation/campuslife16.jpg',
                    '/storage/images/campuslife/orientation/campuslife09.jpg',
                    '/storage/images/campuslife/orientation/campuslife19.jpg',
                    '/storage/images/campuslife/orientation/campuslife25.JPG',
                    '/storage/images/campuslife/orientation/campuslife11.jpg',
                ],
                'desc' => 'Kickstart your campus journey with fun activities, new friends, and a taste of TCU life!',
            ],

            [
                'title' => 'Student Organizations',
                'images' => [
                    '/storage/images/orgs1.jpg',
                    '/storage/images/orgs2.jpg',
                    '/storage/images/orgs3.jpg',
                ],
                'desc' => 'Join a variety of organizations that promote leadership, creativity, and community engagement across the university.',
            ],
            [
                'title' => 'Events & Activities',
                'images' => [
                    '/storage/images/events1.jpg',
                    '/storage/images/events2.jpg',
                    '/storage/images/events3.jpg',
                ],
                'desc' => 'Experience fun and meaningful events that celebrate culture, academics, and student achievements all year round.',
            ],
            [
                'title' => 'Facilities',
                'images' => [
                    '/storage/images/facilities1.jpg',
                    '/storage/images/facilities2.jpg',
                    '/storage/images/facilities3.jpg',
                ],
                'desc' => 'Enjoy TCU’s modern facilities designed to enhance learning, recreation, and overall student well-being.',
            ],
        ];

        return Inertia::render('campuslife', [
            'sections' => $sections,
            'colleges' => app(CollegeController::class)->colleges(), // ✅ reuse same method
        ]);
    }
}
