import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // wayfinder({
        //     formVariants: true,
        // }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});

// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';

// export default defineConfig(({ command }) => {
//     const isDev = command === 'serve';

//     return {
//         plugins: [
//             laravel({
//                 input: ['resources/css/app.css', 'resources/js/app.tsx'],
//                 ssr: 'resources/js/ssr.tsx',
//                 refresh: isDev, // only HMR in dev
//             }),
//             react(),
//             tailwindcss(),
//         ],
//         esbuild: { jsx: 'automatic' },
//         build: {
//             outDir: 'public/build',
//             emptyOutDir: true,
//             manifest: true,
//             rollupOptions: { input: { app: 'resources/js/app.tsx' } },
//         },
//         server: isDev
//             ? { host: '0.0.0.0', strictPort: true, hmr: { host: 'localhost' } }
//             : undefined,
//     };
// });
