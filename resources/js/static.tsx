import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { initializeTheme } from './hooks/use-appearance';
import Sample1 from './pages/sample11111';

initializeTheme();

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    if (!rootEl) return;
    const root = createRoot(rootEl);
    root.render(<Sample1 />);
});
