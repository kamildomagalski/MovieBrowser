import React from 'react';
import {
  Container,
  Row
} from "react-bootstrap";
import Movie from "./Movie";

function MovieList({movies}) {
  
  if (!movies) return null
  
  return (
      <Row>
          {movies.map((movie) => {
            return (
              <Movie key={movie.id} movie={movie}/>
            )
          })
          }
      </Row>
  );
}

export default MovieList;