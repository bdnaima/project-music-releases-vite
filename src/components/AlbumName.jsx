import React from "react";
import "../styles/AlbumName.css"

export function AlbumName(props) {
  return (
    <div>
      <ul>
        <li className="album-name">{props.name}</li>
      </ul>
    </div>
  );
}
