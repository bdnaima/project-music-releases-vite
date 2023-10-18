import React, { useState } from "react";
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
          <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
          <PlaylistName key={playlist.name} name={playlist.name} />
        </div>
      ))}
    </div>
  );
}
