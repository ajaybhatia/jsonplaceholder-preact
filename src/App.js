import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((r) => r.json())
        .then((data) => setPhotos(data));
    })();
  }, []);

  return (
    <main>
      <h1>JSONPlaceholder</h1>

      <div className="container">
        {photos.map((photo, index) => (
          <div className="card">
            <img src={photo.thumbnailUrl} alt={`photo ${index + 1}`} />
            <p className="title">{photo.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
