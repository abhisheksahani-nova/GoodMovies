import { useState } from "react";
import "./styles.css";

var movieDB = {
  fantasy: [
    { movie: "Pirates of the Caribbean series", rating: "5/5" },
    { movie: "Baahubali series", rating: "4/5" },
    { movie: "Harry Potter series", rating: "5/5" }
  ],
  comedy: [
    { movie: "Hera Pheri series", rating: "5/5" },
    { movie: "The Hangover series", rating: "4/5" },
    { movie: "Johnny English series", rating: "3/5" }
  ],
  horror: [
    { movie: "Bhool Bhulaiyaa", rating: "5/5" },
    { movie: "The Conjuring series", rating: "4/5" },
    { movie: "Veerana", rating: "3/5" }
  ],
  sciFi: [
    { movie: "Interstellar", rating: "5/5" },
    { movie: "Stranger Things series", rating: "5/5" },
    { movie: "Lucy", rating: "3/5" }
  ]
};

var genreArray = Object.keys(movieDB);

export default function App() {
  const [currentGenre, setGenre] = useState("horror");

  function handleClick(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎦goodMovies</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite movies. Select a genre to get started
      </p>
      <div>
        {genreArray.map((genre, index) => {
          return (
            <button
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "0.5rem 1.4rem",
                margin: "1rem 0.3rem",
                borderRadius: "0.4rem",
                backgroundColor: "#E5E7EB"
              }}
              key={index}
              onClick={() => {
                handleClick(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ padding: "0" }}>
          {movieDB[currentGenre].map((movies, index) => {
            return (
              <li
                key={index}
                style={{
                  listStyle: "none",
                  width: "70%",
                  border: "1px solid #D1D5DB",
                  padding: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "0.4rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{movies.movie}</div>
                <div style={{ fontSize: "smaller" }}>
                  <span style={{ fontSize: "1.3em" }}>⭐</span>
                  {movies.rating}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
