import { useContext } from "react";
import { PageTitle } from "../../../components/page-title/PageTitle";

// import { MoviesContext } from "../../../context/movies/MoviesContext";
// import { MovieList } from "../../../components/movies/MovieList";

export function PageMovies() {
  // const { publicMovies } = useContext(MoviesContext);

  return (
    <div className="container">
      <PageTitle title="All " />

      {/* <MovieList data={publicMovies} /> */}
    </div>
  );
}
