import React from "react";
import AnimeCard from "./AnimeCard";

const Trending = ({ items = [], onOpen }) => {
  return (
    <section id="trending" className="mt-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Trending Now</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((a) => (
          <AnimeCard key={a.id} anime={a} onOpen={onOpen} />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-slate-300/80 text-sm">No trending items yet. Add anime via admin and increase popularity to see them here.</div>
      )}
    </section>
  );
};

export default Trending;