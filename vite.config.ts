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

export default defineConfig(({ command }) => {
    const isDev = command === 'serve'; // true when running `npm run dev`

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
                buildDirectory: 'build', // optional, default is public/build
            }),
            react(),
            tailwindcss(),
        ],
        esbuild: {
            jsx: 'automatic',
        },
        build: {
            outDir: 'public/build',
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    app: 'resources/js/app.tsx',
                },
            },
        },
        server: isDev
            ? {
                  host: 'localhost', // use '0.0.0.0' if you need LAN access
                  strictPort: true,
                  hmr: {
                      host: 'localhost', // same as host
                  },
              }
            : undefined, // ignored in production
    };
});
