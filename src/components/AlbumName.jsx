import React from "react";
import data from "../data.json";

export function AlbumName(props) {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
      </ul>
      {/* {data && (
        <div>
          {data.albums.items.map((info) => {
            return <p key={info.id}>{info.name}</p>;
          })}
        </div>
      )} */}
    </div>
  );
}
