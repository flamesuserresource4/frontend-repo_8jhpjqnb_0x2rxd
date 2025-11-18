import React, { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

function App() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchTrending = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/anime/trending`);
      const data = await res.json();
      setTrending(data.items || []);
    } catch (e) {
      setError("Failed to load trending anime");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <Hero onBrowse={() => window.alert("Browse page not implemented in MVP. Use API to add anime and see trending here.")} />
        {loading ? (
          <div className="mt-10 text-slate-300">Loading trending…</div>
        ) : error ? (
          <div className="mt-10 text-rose-300">{error}</div>
        ) : (
          <Trending items={trending} onOpen={setSelected} />
        )}

        {selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="grid sm:grid-cols-2">
                <img src={selected.banner_url || selected.poster_url || "https://placehold.co/800x450?text=Anime"} alt={selected.title} className="w-full h-full object-cover sm:rounded-l-2xl" />
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold">{selected.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm line-clamp-5">{selected.synopsis || "No synopsis yet."}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {selected.genres?.map((g) => (
                      <span key={g.id} className="px-2 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">{g.name}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-indigo-300">★ {selected.average_rating?.toFixed ? selected.average_rating.toFixed(1) : (selected.average_rating || 0)}</span>
                    <span className="text-slate-400">{selected.year || "—"}</span>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t border-slate-800 flex justify-end">
                <button onClick={() => setSelected(null)} className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-medium">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;