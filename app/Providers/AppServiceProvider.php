<?php

namespace App\Providers;

use App\Http\Controllers\CollegeController;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }

        Inertia::share([
            'colleges' => fn() => app(CollegeController::class)->colleges(),
        ]);
    }
}