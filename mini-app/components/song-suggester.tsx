"use client";

import { useState } from "react";

export default function SongSuggester() {
  const [vibe, setVibe] = useState("");
  const [songs, setSongs] = useState<string[]>([]);

  const suggestSongs = () => {
    // Mock suggestion logic – replace with real API call if needed
    const mock = {
      chill: ["Lo-Fi Beats", "Ambient Waves", "Soft Piano"],
      party: ["Dance Anthem", "Club Banger", "Party Rock"],
      sad: ["Melancholy Melody", "Rainy Day", "Blue Notes"],
    };
    setSongs(mock[vibe.toLowerCase()] ?? ["No suggestions found"]);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Enter a vibe</span>
        <input
          type="text"
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          className="border rounded px-3 py-2"
          placeholder="e.g., chill, party, sad"
        />
      </label>
      <button
        onClick={suggestSongs}
        className="bg-primary text-primary-foreground rounded px-4 py-2"
      >
        Suggest Songs
      </button>
      {songs.length > 0 && (
        <ul className="list-disc pl-5">
          {songs.map((song, idx) => (
            <li key={idx}>{song}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
