const CACHE_NAME = 'portfolio-mobile-v1';
const MOBILE_CACHE_NAME = 'portfolio-mobile-critical-v1';

// Critical resources for mobile
const criticalResources = [
  '/',
  '/static/css/main.css',
  '/manifest.json'
];

// Full resources for desktop
const fullResources = [
  ...criticalResources,
  '/static/js/bundle.js',
  '/worker.js'
];

// Install event - cache based on device type
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Detect mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
          console.log('Mobile device detected - caching critical resources only');
          return cache.addAll(criticalResources);
        } else {
          console.log('Desktop device detected - caching full resources');
          return cache.addAll(fullResources);
        }
      })
  );
});

// Fetch event - mobile-optimized caching strategy
self.addEventListener('fetch', (event) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Mobile: Cache first for critical resources, network first for others
    if (criticalResources.some(resource => event.request.url.includes(resource))) {
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            return response || fetch(event.request);
          })
      );
    } else {
      // For non-critical resources, try network first
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // Cache successful responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            // Fallback to cache if network fails
            return caches.match(event.request);
          })
      );
    }
  } else {
    // Desktop: Standard cache first strategy
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== MOBILE_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for mobile
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Perform background sync tasks
      console.log('Background sync triggered')
    );
  }
});

// Push notifications for mobile
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});
