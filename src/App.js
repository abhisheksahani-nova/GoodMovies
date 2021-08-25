import "./styles.css";

var bookDB = {
  fantasy: [
    { name: "Pirates of the Caribbean", rating: "5/5" },
    { name: "Avengers series", rating: "4/5" },
    { name: "Harry Potter series", rating: "5/5" }
  ],
  comedy: [
    { name: "Hera Pheri series", rating: "5/5" },
    { name: "The Hangover series", rating: "5/5" },
    { name: "Johnny English", rating: "4/5" }
  ],
  horror: [
    { name: "Bhool Bhulaiyaa", rating: "5/5" },
    { name: "The Conjuring series", rating: "4/5" },
    { name: "Veerana", rating: "4/5" }
  ],
  sciFi: [
    { name: "Interstellar", rating: "5/5" },
    { name: "Stranger Things series", rating: "4/5" },
    { name: "Lucy", rating: "4/5" }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>🎦goodMovies</h1>
      <p>Checkout my favorite movies. Select a genre to get started</p>
    </div>
  );
}
