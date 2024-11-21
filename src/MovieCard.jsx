
const MovieCard = ({movie}) => {
  return (
    <div className="movie" >
    <div>
      <p>{movie.Year}</p>
    </div>

    <div>
      <img src={movie.Poster} />
    </div>

    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
      <a href={movie.Poster} download><button className="button">Download Poster</button></a>
    </div>
  </div>
  )
}

export default MovieCard
