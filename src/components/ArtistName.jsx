import React from "react";
import "../styles/ArtistName.css"

export function ArtistName(props) {
  return (
    <div>
      <ul>
        <li className="artist-name">{props.name}</li>
      </ul>
    </div>
  );
}
