document.getElementById('movie-form').addEventListener('submit', function (e) {
     e.preventDefault();
     
     const movieTitle = document.getElementById('movie-title').value;
     const apiKey = '3c3e897d'; 
     const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
     
     fetch(url)
         .then(response => response.json())
         .then(data => {
             if (data.Response === "True") {
                 displayMovie(data);
             } else {
                 document.getElementById('movie-result').innerHTML = `<p>Movie not found. Please try again.</p>`;
             }
         })
         .catch(error => console.error('Error fetching the data:', error));
 });
 
 function displayMovie(movie) {
     const movieResult = document.getElementById('movie-result');
     movieResult.innerHTML = `
         <div class="movie-card">
             <img src="${movie.Poster}" alt="${movie.Title} Poster">
             <div>
                 <h2>${movie.Title} (${movie.Year})</h2>
                 <p><span>Genre:</span> ${movie.Genre}</p>
                 <p><span>Director:</span> ${movie.Director}</p>
                 <p><span>Actors:</span> ${movie.Actors}</p>
                 <p><span>Plot:</span> ${movie.Plot}</p>
                 <p><span>IMDb Rating:</span> ${movie.imdbRating}</p>
             </div>
         </div>
     `;
 }
 