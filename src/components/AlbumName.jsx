import React from "react";
import "../styles/AlbumName.css"

export function AlbumName(props) {
  return (
    <div className="albumName">
      <h2>{props.name}</h2>
    </div>
  );
}
