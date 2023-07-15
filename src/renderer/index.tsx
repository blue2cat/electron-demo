import { createRoot } from 'react-dom/client';

// import the main app component
import App from './App';

// render the app
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
