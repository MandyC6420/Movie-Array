export function Movie(movieObject){
    return `
    <section class = "movie-card">
    <img 
        class = "movie-card__image"
        src="${movieObject.image}" alt = "Movies"
        />
        <div class ="fish-card__text">
        <p>Title: ${movieObject.title}</p>
        <p>Director: ${movieObject.director}</p>
       
        <p>Movie Rank: ${movieObject.rank}</p>
        </div>
        </section>`
}