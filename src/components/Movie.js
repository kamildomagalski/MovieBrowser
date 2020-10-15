import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

function Movie({movie}) {
  
  
  const MovieCard = () => {
    if (movie.poster_path == null) {
      return <Card.Img className={'movie__img'} variant={'top'}
                       src={`https://lh3.googleusercontent.com/IO3niAyss5tFXAQP176P0Jk5rg_A_hfKPNqzC4gb15WjLPjo5I-f7oIZ9Dqxw2wPBAg`}/>
    } else {
      return <Card.Img variant={'top'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    }
    
  }
  return (
    <Col xs={12} sm={6} md={4}>
      <Card className={'movie__card'}>
        <MovieCard/>
        <Card.Body>
          <Button>See info</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Movie;