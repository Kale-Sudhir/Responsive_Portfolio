import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Register service worker for caching with mobile optimization
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const swPath = isMobile ? '/mobile-sw.js' : '/sw.js';
    
    navigator.serviceWorker.register(swPath)
      .then((registration) => {
        console.log(`${isMobile ? 'Mobile' : 'Desktop'} SW registered: `, registration);
        
        // Enable background sync for mobile
        if (isMobile && 'sync' in window.ServiceWorkerRegistration.prototype) {
          registration.sync.register('background-sync');
        }
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}