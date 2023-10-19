import React from "react";
import data from "../stretched-goal.json";
import "../styles/Sidebar.css";
import { PlaylistImage } from "./PlaylistImage";
import { PlaylistName } from "./PlaylistName";

export function Sidebar() {
  const playlists = data.playlists.items;

  return (
    <div className="sidebar-playlist">
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <div className="playlist">
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
          </a>
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlaylistName key={playlist.name} name={playlist.name} />
          </a>
        </div>
      ))}
    </div>
  );
}
