import React from "react";

const Hero = ({ onBrowse }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 p-6 sm:p-10 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="relative grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Discover Your Next Favorite Anime</h1>
          <p className="mt-3 text-white/90 max-w-prose">Browse trending series, deep-dive into genres, track your watchlist, and share reviews with the community.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={onBrowse} className="px-5 py-2.5 rounded-lg bg-white text-indigo-700 font-semibold hover:opacity-90 transition">Browse Now</button>
            <a href="#trending" className="px-5 py-2.5 rounded-lg bg-black/30 backdrop-blur border border-white/20 font-semibold hover:bg-black/40 transition">See Trending</a>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src="https://images.unsplash.com/photo-1639634252346-0a27c7d168dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmltZSUyMGNvbGxhZ2V8ZW58MHwwfHx8MTc2MzQ1NjUwMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Anime collage" className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;