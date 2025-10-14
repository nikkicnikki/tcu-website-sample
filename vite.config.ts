// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             ssr: 'resources/js/ssr.tsx',
//             refresh: true,
//         }),
//         react(),
//         tailwindcss(),
//         // wayfinder({
//         //     formVariants: true,
//         // }),
//     ],
//     esbuild: {
//         jsx: 'automatic',
//     },
// });

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

// Detect if we're running on Render
const isRender = process.env.RENDER === 'true';

export default defineConfig({
    base: isRender
        ? 'https://tcu-website-sample.onrender.com/' // ✅ Force HTTPS for production (Render)
        : '/',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
            buildDirectory: 'build',
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
