import React, { useState } from "react";
import SongCard from "./components/SongCard";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const search = async () => {
    const res = await fetch(`http://localhost:5000/api/search/${query}`);
    const data = await res.json();
    setSongs(data);
  };

  return (
    <div className="app">
      <h1>COLD<span>FY</span></h1>
      <div className="search-bar">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search songs..." />
        <button onClick={search}>Search</button>
      </div>
      <div className="results">
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
