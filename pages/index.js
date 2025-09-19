export default function Home() {
  return (
    <>
          <!-- HEADER -->
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center space-x-8">
                    <a href="#" aria-label="DhavaFlix Home" class="nav-link" data-view="home">
                        <svg width="150" height="38" viewBox="0 0 150 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <defs><linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--electric-blue-light)"/><stop offset="100%" stop-color="var(--electric-blue)"/></linearGradient></defs>
                           <text x="0" y="29" font-family="Poppins, sans-serif" font-size="26" font-weight="800" fill="url(#logo-gradient)">DHAVA</text><text id="logo-text" x="95" y="29" font-family="Poppins, sans-serif" font-size="26" font-weight="800" fill="var(--text-primary-dark)">FLIX</text>
                        </svg>
                    </a>
                    <nav class="hidden md:flex space-x-6 text-sm font-medium">
                        <a href="#" class="nav-link themed-text transition-transform duration-300 hover:scale-105 active" data-view="home">Home</a>
                        <a href="#" class="nav-link themed-text transition-transform duration-300 hover:scale-105" data-view="tv">TV Shows</a>
                        <a href="#" class="nav-link themed-text transition-transform duration-300 hover:scale-105" data-view="movies">Movies</a>
                        <a href="#" class="nav-link themed-text transition-transform duration-300 hover:scale-105" data-view="comingsoon">Coming Soon</a>
                        <a href="#" class="nav-link themed-text transition-transform duration-300 hover:scale-105" data-view="mylist">My List</a>
                    </nav>
                </div>
                <div class="flex items-center space-x-4">
                    <button id="theme-toggle" class="themed-text p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">🌙</button>
                    <button id="search-button" class="themed-text"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                    <a href="#" class="nav-link" data-view="profile">
                        <img src="https://placehold.co/40x40/0072F5/FFFFFF?text=D" alt="Profile" class="w-8 h-8 rounded-md hidden md:block"/>
                    </a>
                </div>
                <div class="md:hidden"><button id="mobile-menu-button" class="themed-text"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg></button></div>
            </div>
        </div>
    </header>

    <!-- MOBILE MENU -->
    <div id="mobile-menu" class="fixed top-0 left-0 h-full w-64 z-40 transform -translate-x-full md:hidden">
        <nav class="mt-24 flex flex-col space-y-6 px-6">
            <a href="#" class="nav-link themed-text text-lg active" data-view="home">Home</a>
            <a href="#" class="nav-link themed-text text-lg" data-view="tv">TV Shows</a>
            <a href="#" class="nav-link themed-text text-lg" data-view="movies">Movies</a>
            <a href="#" class="nav-link themed-text text-lg" data-view="comingsoon">Coming Soon</a>
            <a href="#" class="nav-link themed-text text-lg" data-view="mylist">My List</a>
            <a href="#" class="nav-link themed-text text-lg mt-4 border-t border-gray-700 pt-4" data-view="profile">Profile</a>
        </nav>
    </div>

    <main id="main-content" class="pt-20">
        <section id="hero-section" class="relative min-h-[50vh] md:min-h-[calc(85vh-5rem)] flex items-center justify-center"></section>
        <div id="content-rows-container" class="py-8 md:py-12 space-y-8 md:space-y-12"></div>
    </main>
    
    <footer class="themed-bg themed-text text-center py-6 mt-8 border-t border-gray-700/50 text-sm opacity-80">
      <p>© 2025 DhavaFlix. All Rights Reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="#" class="hover:underline nav-link" data-view="privacy">Privacy Policy</a>
        <span>•</span>
        <a href="#" class="hover:underline nav-link" data-view="about">About Us</a>
        <span>•</span>
        <a href="#" class="hover:underline nav-link" data-view="contact">Contact</a>
      </div>
    </footer>
    
    <!-- MOBILE STICKY NAV -->
    <div class="fixed bottom-0 left-0 right-0 themed-bg bottom-nav flex justify-around py-2 md:hidden z-50 border-t border-gray-700/50">
        <button data-view="home" class="bottom-nav-link flex flex-col items-center text-xs themed-text active"><svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><span>Home</span></button>
        <button data-view="tv" class="bottom-nav-link flex flex-col items-center text-xs themed-text"><svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>TV</span></button>
        <button data-view="movies" class="bottom-nav-link flex flex-col items-center text-xs themed-text"><svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg><span>Movies</span></button>
        <button data-view="mylist" class="bottom-nav-link flex flex-col items-center text-xs themed-text"><svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg><span>My List</span></button>
    </div>


    <!-- DETAILS MODAL -->
    <div id="details-modal" class="hidden fixed inset-0 z-[100] overflow-y-auto">
        <div class="fixed inset-0 bg-black/80 modal-backdrop" id="modal-backdrop"></div>
        <div class="relative w-full max-w-4xl mx-auto my-8">
            <div id="modal-content-container" class="modal-content bg-midnight-bg rounded-lg shadow-xl"></div>
        </div>
    </div>
    
    <!-- SEARCH OVERLAY -->
    <div id="search-overlay" class="hidden fixed inset-0 z-[60] bg-black/80 search-overlay">
        <div class="container mx-auto px-4 pt-24">
            <button id="close-search" class="absolute top-8 right-8 text-4xl">&times;</button>
            <form id="search-form" class="flex"><input type="text" id="search-input" class="w-full bg-transparent border-b-2 border-electric-blue text-2xl md:text-5xl focus:outline-none" placeholder="Search movies, TV shows..."><button type="submit" class="hidden">Search</button></form>
            <div id="search-results" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 max-h-[70vh] overflow-y-auto scrollbar-hide"></div>
        </div>
    </div>

    <!-- VIDEO MODAL -->
    <div id="video-modal" class="hidden fixed inset-0 z-[110] flex items-center justify-center bg-black/80">
      <div class="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        <iframe id="video-frame" class="w-full h-full" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <button id="close-video" class="absolute top-2 right-2 text-3xl">&times;</button>
      </div>
    </div>
    </>
  );
}
