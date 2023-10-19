import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { Header } from "./Header";
import "../styles/Album.css";
import { Sidebar } from "./Sidebar";

export function Album({ albums }) {
  return (
    <>
      <Header />
      <div className="album-sidebar-container">
        <Sidebar />
        <div className="album-grid scrollable-grid">
          {albums.map((album) => (
            <div className="album" key={album.id}>
              <CoverImage src={album.images[0].url} alt={album.name} />
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AlbumName name={album.name} className="album-item" />
              </a>
              <a
                href={album.artists[0].external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArtistName artists={album.artists} className="album-item" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
