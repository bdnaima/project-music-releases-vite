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
          <AlbumName name={album.name} className="album-item"/>
          <ArtistName name={album.artists[0].name} className="album-item" />
        </div>
      ))}
    </div>
    </>
  );
}
