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
                'title' => 'Facilities',
                'images' => [
                    '/storage/images/campuslife/facilities/facilities01.jpg',
                    '/storage/images/campuslife/facilities/facilities03.jpg',
                    '/storage/images/campuslife/facilities/facilities06.jpg',
                    '/storage/images/campuslife/facilities/facilities04.jpg',
                    '/storage/images/campuslife/facilities/facilities02.jpg',
                    '/storage/images/campuslife/facilities/facilities05.jpg',
                    '/storage/images/campuslife/facilities/facilities07.jpg',
                    '/storage/images/campuslife/facilities/facilities08.jpg',
                    '/storage/images/campuslife/facilities/facilities09.jpg',
                ],
                'desc' => 'Modern spaces for learning, recreation, and connection.',
            ],
            [
                'title' => 'Events & Activities',
                'images' => [
                    '/storage/images/campuslife/events/events01.jpg',
                    '/storage/images/campuslife/events/events02.jpg',
                    '/storage/images/campuslife/events/events03.jpg',
                ],
                'desc' => 'Where learning meets fun — experience TCU’s campus in action.',
            ],

            // [
            //     'title' => 'Student Organizations',
            //     'images' => [
            //         '/storage/images/orgs1.jpg',
            //         '/storage/images/orgs2.jpg',
            //         '/storage/images/orgs3.jpg',
            //     ],
            //     'desc' => 'Join a variety of organizations that promote leadership, creativity, and community engagement across the university.',
            // ],

        ];

        return Inertia::render('campuslife', [
            'sections' => $sections,
            'colleges' => app(CollegeController::class)->colleges(), // ✅ reuse same method
        ]);
    }
}