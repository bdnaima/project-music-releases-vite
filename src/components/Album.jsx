import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

export function Album({ albums }) {
  return (
    <>
        {albums.map((album) => (
           <div className="albums" key={album.id}>
            <AlbumName name={album.name} />
            <CoverImage src={album.images[0].url} alt={album.name} />
            <ArtistName name={album.artists[0].name}/>
            </div>
        ))}
     
    </>
  );
}
