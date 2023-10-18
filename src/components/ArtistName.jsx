import React from "react";
import "../styles/ArtistName.css";

export function ArtistName(props) {
  const { artists } = props;

  const formattedNames = artists.map((artistName, index, array) => {
    if (array.length === 1) {
      return artistName.name;
    } else if (array.length === 2) {
      return index === 0 ? `${artistName.name} & ` : artistName.name;
    } else if (index === array.length - 1) {
      return ` & ${artistName.name}`;
    } else if (index === array.length - 2) {
      return `${artistName.name}, `;
    } else {
      return artistName.name;
    }
  });

  return (
    <div className="artist-name">
    <h3>{formattedNames}</h3>
    </div>
  );
};

