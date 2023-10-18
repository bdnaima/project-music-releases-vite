import React from "react";
import "../styles/AlbumName.css";

export function AlbumName(props) {
  return (
    <div className="album-name">
      <h2>{props.name}</h2>
    </div>
  );
}
