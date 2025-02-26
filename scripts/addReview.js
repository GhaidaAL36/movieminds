document.addEventListener("DOMContentLoaded", () => {
  const movieId = new URLSearchParams(window.location.search).get("id");

  //movie details
  const movies = {
    1: {
      title: "Man of Steel",
      year: 2013,
      description:
        "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
      poster: "photos/poster1.jpg",
    },
    2: {
      title: "Invincible",
      year: 2006,
      description:
        "An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet.",
      poster: "photos/poster2.jpg",
    },
    3: {
      title: "Spider-Man",
      year: 2023,
      description:
        "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      poster: "photos/poster3.jpg",
    },
    4: {
      title: "Arcane",
      year: 2021,
      description:
        "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
      poster: "photos/poster4.jpg",
    },
    5: {
      title: "Moana 2",
      year: 2024,
      description:
        "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
      poster: "photos/poster5.jpg",
    },
    6: {
      title: "The Lion King",
      year: 2019,
      description:
        "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      poster: "photos/poster6.jpg",
    },
    7: {
      title: "The Wild Robot",
      year: 2024,
      description:
        "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      poster: "photos/poster7.jpg",
    },
    8: {
      title: "Tangled",
      year: 2010,
      description:
        "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
      poster: "photos/poster8.jpg",
    },
  };

  const movie = movies[movieId];
  if (movie) {
    document.getElementById("movieInfo").innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p>${movie.description}</p>
        `;
    document.getElementById("moviePoster").src = movie.poster;
    document.getElementById("moviePoster").alt = movie.title;
  } else {
    document.getElementById("movieInfo").innerHTML =
      "<p>Movie details not found.</p>";
  }

  //reviews
  const reviews = [
    { name: "User43", review: "I love it!!" },
    { name: "User667", review: "Amazing!" },
  ];

  const reviewsContainer = document.getElementById("reviews");
  reviewsContainer.innerHTML += reviews
    .map(
      (review) => `
        <div class="reviewCard">
            <strong>${review.name}</strong>
            <p>${review.review}</p>
        </div>
    `
    )
    .join("");

  //review submission
  const reviewForm = document.getElementById("reviewForm");
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewerName").value;
    const review = document.getElementById("reviewBody").value;

    if (name && review) {
      reviews.push({ name, review });
      reviewsContainer.innerHTML += `
                <div class="reviewCard">
                    <strong>${name}</strong>
                    <p>${review}</p>
                </div>
            `;
      reviewForm.reset();
    }
  });
});
