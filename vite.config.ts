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
//             buildDirectory: 'build',
//         }),
//         react(),
//         tailwindcss(),
//     ],
//     esbuild: {
//         jsx: 'automatic',
//     },
//     base: '/build/', // ✅ Correct relative path for Laravel + Render HTTPS
// });

import react, {
    type Options as ReactPluginOptions,
} from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react({
            fastRefresh: !isProduction, // ✅ recognized now
        } as ReactPluginOptions),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
    },
    base: '/build/',
});
