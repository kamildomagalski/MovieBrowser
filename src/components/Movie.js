import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

function Movie({movie}) {
  
  return (
    <Col xs={12} sm={6} md={4}>
      <Card className={'movie__card'}>
        <Card.Img variant={'top'}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        <Card.Body>
          <Button>See info</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Movie;