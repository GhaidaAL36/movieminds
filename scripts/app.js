document.addEventListener("DOMContentLoaded", () => {
  //data for movies
  const movies = [
    {
      id: 1,
      title: "Man of Steel",
      genre: "Action",
      poster: "photos/poster1.jpg",
    },
    {
      id: 2,
      title: "Invincible",
      genre: "Action",
      poster: "photos/poster2.jpg",
    },
    {
      id: 3,
      title: "Spider-Man",
      genre: "Superhero",
      poster: "photos/poster3.jpg",
    },
    {
      id: 4,
      title: "Arcane",
      genre: "Steampunk",
      poster: "photos/poster4.jpg",
    },
    { id: 5, title: "Moana", genre: "Adventure", poster: "photos/poster5.jpg" },
    {
      id: 6,
      title: "The Lion King",
      genre: "Drama",
      poster: "photos/poster6.jpg",
    },
    {
      id: 7,
      title: "The Wild Robot",
      genre: "Sci-Fi",
      poster: "photos/poster7.jpg",
    },
    {
      id: 8,
      title: "Tangled",
      genre: "Fairy Tale",
      poster: "photos/poster8.jpg",
    },
  ];

  const movieGrid = document.getElementById("movieGrid");
  movieGrid.innerHTML = movies
    .map(
      (movie) => `
      <div class="movieCard">
        <img src="${movie.poster}" alt="${movie.title}" />
        <div class="movieDetails">
          <h2>${movie.title}</h2>
          <p>Genre: ${movie.genre}</p>
          <a href="AddReview.html?id=${movie.id}">View Details</a>
        </div>
      </div>
    `
    )
    .join("");
});
