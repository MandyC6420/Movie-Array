import { useMovies } from "./MovieDataProvider.js";
import { Movie } from "./Movie.js";


let movieContainer = document.querySelector("#container");

export function MovieList() {
    const allTheMovies = useMovies();

    let MovieListHTMLString = "";

    for(let i = 0; i < allTheMovies.length; i++){
        MovieListHTMLString += Movie(allTheMovies[i]);
    }
    console.log(MovieListHTMLString);

    movieContainer.innerHTML = `<h2>My Movies</h2>${MovieListHTMLString}`;
}