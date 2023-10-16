import data from "../data.json";

export function CoverImage() {
  return (
    <div>
      {data && (
        <div>
          {data.albums.items.map((info) => {
            return <img key={info.id} src={info.images[0].url} />;
          })}
        </div>
      )}
    </div>
  );
}
