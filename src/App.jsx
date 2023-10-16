import data from "./data.json";
import { Album } from "./components/Album";

export function App() {
  return (
    <>
      <h1>New Albums & Singles</h1>
      <Album albums={data.albums.items} />
    </>
  );
}
