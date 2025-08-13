
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
 // Or your global styles
 // Import the main App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);




