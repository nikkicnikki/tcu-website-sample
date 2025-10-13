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

export default defineConfig(({ command, mode }) => {
    const isDev = command === 'serve'; // true when running `npm run dev`

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                ssr: 'resources/js/ssr.tsx',
                refresh: isDev, // only refresh in dev
                buildDirectory: 'build', // ensures output goes to public/build
            }),
            react(),
            tailwindcss(),
        ],
        esbuild: {
            jsx: 'automatic',
        },
        build: {
            outDir: 'public/build', // production output folder
            emptyOutDir: true, // clean folder before build
            manifest: true, // important: generate manifest.json for Laravel
            rollupOptions: {
                input: {
                    app: 'resources/js/app.tsx',
                },
            },
        },
        server: isDev
            ? {
                  host: '0.0.0.0', // allows LAN/dev machine access
                  strictPort: true,
                  hmr: {
                      host: 'localhost', // HMR host
                  },
              }
            : undefined, // ignored in production
    };
});
