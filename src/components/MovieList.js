import React from 'react';
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Movie from "./Movie";

function MovieList({movies}) {
  
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          {movies.map((movie) =>{
            return(
              <Movie key={movie.id} movie={movie}/>
            )
          } )
          
          }
          
          
        </Col>
      </Row>
    </Container>
  );
}

export default MovieList;