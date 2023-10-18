import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { Header } from "./Header";
import "../styles/Album.css";

export function Album({ albums }) {
  return (
    <>
      <Header />
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
              <ArtistName
                name={album.artists.map((artistName, index, array) => {
                  if (array.length === 1) {
                    return artistName.name;
                  } else if (array.length === 2) {
                    return index === 0 ? `${artistName.name} & ` : artistName.name;
                  } else if (index === array.length - 1) {
                    return ` & ${artistName.name}`;
                  } else if (index === array.length - 2) {
                    return `${artistName.name}, `;
                  } else {
                    return artistName.name;
                  }
                })}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
