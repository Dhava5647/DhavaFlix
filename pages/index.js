import React from "react";

export default function Home() {
  return (
    <div>
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
                  <text
                    x="0"
                    y="30"
                    fontSize="30"
                    fill="red"
                    fontWeight="bold"
                  >
                    DhavaFlix
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mt-24 text-center">
        <h1 className="text-3xl font-bold">Welcome to DhavaFlix 🎬</h1>
        <p className="mt-4">Your Next.js app is live on Vercel ✅</p>
        <div className="mt-6 space-x-4">
          <a
            href="/api/movies"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Movies API
          </a>
          <a
            href="/api/tv"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            TV API
          </a>
          <a
            href="/api/search"
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Search API
          </a>
        </div>
      </main>
    </div>
  );
}
