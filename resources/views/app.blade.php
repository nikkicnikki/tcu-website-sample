<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Dark mode --}}
    <script>
    (function() {
        const appearance = '{{ $appearance ?? "system" }}';
        if (appearance === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) document.documentElement.classList.add('dark');
        }
    })();
    </script>

    <style>
    html {
        background-color: oklch(1 0 0);
    }

    html.dark {
        background-color: oklch(0.145 0 0);
    }
    </style>

    <title inertia>{{ config('app.name', 'Taguig City University') }}</title>

    <link rel="icon" type="image/png" href="/storage/images/tcu.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

    {{-- Vite --}}
    @if (app()->environment('local'))
    @viteReactRefresh
    @endif
    @vite([
    'resources/css/app.css',
    'resources/js/app.tsx',
    "resources/js/pages/{$page['component']}.tsx"
    ])

    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>