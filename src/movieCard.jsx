// .jsx is the same as .js exactly but to recognise it better.

const MovieCard = ({movie})=>{  //herewe want to add a props, instead of writing props into all the code we distructure the props use object distructuring (a pair of curly braces)
  return(
    <div className="movie">

        <div>
          <p>{movie.Year}</p>
        </div>

        <div className="poster">
          {/* check if the api provides the img,
          translates as: if po is not equal to na (which is how the api declares the movies that has no image, meaning the movies has an image) then we render the Poster, else render an placeholder image 400 by 400 :)
          */}
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt={movie.Title} />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>


      </div>
  );
}

export default MovieCard;