import React from "react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header
        id="main-header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                aria-label="DhavaFlix Home"
                className="nav-link"
                data-view="home"
              >
                <svg
                  width="150"
                  height="38"
                  viewBox="0 0 150 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="logo-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--electric-blue-light)"
                      />
                      <stop offset="100%" stopColor="var(--electric-blue)" />
                    </linearGradient>
                  </defs>
                  <text
                    x="0"
                    y="29"
                    fontFamily="Poppins, sans-serif"
                    fontSize="26"
                    fontWeight="800"
                    fill="url(#logo-gradient)"
                  >
                    DHAVA
                  </text>
                  <text
                    id="logo-text"
                    x="95"
                    y="29"
                    fontFamily="Poppins, sans-serif"
                    fontSize="26"
                    fontWeight="800"
                    fill="var(--text-primary-dark)"
                  >
                    FLIX
                  </text>
                </svg>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <a
                  href="#"
                  className="nav-link themed-text transition-transform duration-300 hover:scale-105 active"
                  data-view="home"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="nav-link themed-text transition-transform duration-300 hover:scale-105"
                  data-view="tv"
                >
                  TV Shows
                </a>
                <a
                  href="#"
                  className="nav-link themed-text transition-transform duration-300 hover:scale-105"
                  data-view="movies"
                >
                  Movies
                </a>
                <a
                  href="#"
                  className="nav-link themed-text transition-transform duration-300 hover:scale-105"
                  data-view="comingsoon"
                >
                  Coming Soon
                </a>
                <a
                  href="#"
                  className="nav-link themed-text transition-transform duration-300 hover:scale-105"
                  data-view="mylist"
                >
                  My List
                </a>
              </nav>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                id="theme-toggle"
                className="themed-text p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                🌙
              </button>
              <button id="search-button" className="themed-text">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <a href="#" className="nav-link" data-view="profile">
                <img
                  src="https://placehold.co/40x40/0072F5/FFFFFF?text=D"
                  alt="Profile"
                  className="w-8 h-8 rounded-md hidden md:block"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button id="mobile-menu-button" className="themed-text">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="main-content" className="pt-20">
        <section
          id="hero-section"
          className="relative min-h-[50vh] md:min-h-[calc(85vh-5rem)] flex items-center justify-center"
        ></section>
        <div
          id="content-rows-container"
          className="py-8 md:py-12 space-y-8 md:space-y-12"
        ></div>
      </main>

      {/* FOOTER */}
      <footer className="themed-bg themed-text text-center py-6 mt-8 border-t border-gray-700/50 text-sm opacity-80">
        <p>© 2025 DhavaFlix. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline nav-link" data-view="privacy">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:underline nav-link" data-view="about">
            About Us
          </a>
          <span>•</span>
          <a href="#" className="hover:underline nav-link" data-view="contact">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}


