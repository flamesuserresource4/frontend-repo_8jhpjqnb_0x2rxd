import React from "react";

const AnimeCard = ({ anime, onOpen }) => {
  return (
    <div className="group bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-500/10 transition">
      <div className="aspect-[2/3] w-full bg-slate-700">
        <img src={anime.poster_url || "https://placehold.co/400x600?text=Anime"} alt={anime.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold line-clamp-1">{anime.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-300">
          <span className="px-1.5 py-0.5 rounded bg-slate-700/70">{anime.year || "—"}</span>
          <span className="px-1.5 py-0.5 rounded bg-indigo-600/30 text-indigo-200">★ {anime.average_rating?.toFixed ? anime.average_rating.toFixed(1) : (anime.average_rating || 0)}</span>
          <button onClick={() => onOpen(anime)} className="ml-auto text-indigo-300 hover:text-indigo-200">Details →</button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;