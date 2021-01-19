export function Movie(movieObject){
    return `
    <section class = "movie-card">

    <div class = "movie-card__title"><h2>${movieObject.title}</h2>

    <img 
        class = "movie-card__image"
        src="${movieObject.image}" alt = "Movies"
        />
        <div class ="movie-card__text">
        
        <p>Director: ${movieObject.director}</p>
       
        <p>Movie Rank: ${movieObject.rank}</p>
        </div>
        </section>`
}