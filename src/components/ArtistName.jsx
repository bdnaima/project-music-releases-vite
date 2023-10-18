import React from "react";
import "../styles/ArtistName.css"

export function ArtistName(props) {
  return (
    <div className="artistName">
      <h3>{props.name}</h3>
    </div>
  );
}
