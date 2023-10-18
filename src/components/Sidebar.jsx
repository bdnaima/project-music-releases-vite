import React from "react";
import data from "../stretched-goal.json";
import "../styles/Sidebar.css";
import { PlaylistImage } from "./PlaylistImage";
import { PlaylistName } from "./PlaylistName";

export function Sidebar() {
  const playlists = data.playlists.items;
  console.log(playlists);
  return (
    <div className="sidebar-playlist">
      <h2>Playlist</h2>
      {playlists.map((playlist) => (
        <div className="playlist">
          <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
          <PlaylistName key={playlist.name} name={playlist.name} />
        </div>
      ))}
    </div>
  );
}
