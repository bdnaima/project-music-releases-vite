import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { Header } from "./Header";
import "../styles/Album.css";
import { Sidebar } from "./Sidebar";

export function Album({ albums }) {
  //separating the albums into single and album types
  const singleAlbums = albums.filter((album) => album.album_type === "single");
  const newAlbums = albums.filter((album) => album.album_type === "album");

  //function that displays the music data
  function renderAlbums(albumsToRender) {
    return (
      <div className="album-grid">
        {albumsToRender.map((album) => (
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
    );
  }

  return (
    <>
      <Header />
      <div className="album-sidebar-container">
        <Sidebar />
        <div className="scrollable-grid">
          <h2 className="sub-heading">Singles</h2>
          {renderAlbums(singleAlbums)}
          <h2 className="sub-heading">New Albums</h2>
          {renderAlbums(newAlbums)}
        </div>
      </div>
    </>
  );
}
