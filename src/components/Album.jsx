import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import "../styles/Album.css";

export function Album({ albums }) {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <div className="albums" key={album.id}>
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
            <ArtistName name={album.artists[0].name} className="album-item" />
          </a>
        </div>
      ))}
    </div>
  );
}
