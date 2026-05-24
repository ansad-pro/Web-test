import React from "react";

const SongCard = ({ song }) => (
  <div className="card">
    <img src={song.thumbnail} alt={song.title} />
    <h3>{song.title}</h3>
    <p>{song.channel}</p>
    <iframe
      src={`https://www.youtube.com/embed/${song.id}`}
      title={song.title}
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
);

export default SongCard;
