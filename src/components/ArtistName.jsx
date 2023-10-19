import React from "react";
import "../styles/ArtistName.css";

export function ArtistName(props) {
  const { artists } = props;

  const formattedNames = artists.map((artistName, index, array) => {
    if (index === 0) {
      return artistName.name;
    } else if (index === array.length - 1) {
      return ` & ${artistName.name}`;
    } else {
      return `, ${artistName.name}`;
    }
  });

  return (
    <div className="artist-name">
      <h3>{formattedNames}</h3>
    </div>
  );
};
