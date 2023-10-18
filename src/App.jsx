import data from "./data.json";
import { Album } from "./components/Album";

export function App() {
  return (
    <>
      <Album albums={data.albums.items} />
    </>
  );
}
