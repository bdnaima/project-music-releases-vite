import React from "react";
import data from "../data.json";

export function ArtistName(props) {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
      </ul>
    </div>
  );
}