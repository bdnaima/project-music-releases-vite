import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";

export function Album({ albums }) {
  return (
    <>
      <div className="albums">
        {albums.map((album) => (
          <>
            <AlbumName key={album.id} name={album.name} />
            <CoverImage src={album.images[0].url} alt={album.name} />
          </>
        ))}
      </div>
    </>
  );
}
