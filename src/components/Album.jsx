import React from "react";
import { CoverImage } from "./CoverImage";
import { AlbumName } from "./AlbumName";
import data from "../data.json";

export function Album() {
  return (
    <>
      <AlbumName
        name={data.albums.items.map((info) =>
          info.artists.map((artist) => artist.name)
        )}
      />
      <CoverImage />
    </>
  );
}
