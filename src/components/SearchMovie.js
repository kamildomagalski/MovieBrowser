import React, {useState} from 'react';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import MovieList from "./MovieList";

function SearchMovie() {
  const [search, setSearch] = useState({
    searchTerm: '',
    movies: []
  })
  const API = process.env.REACT_APP_API_KEY
  
  const handleChange = (e) => {
    
    setSearch({
      searchTerm: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search.searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setSearch(prevState => ({
          ...prevState,
          movies: [...data.results]
        }))
      })
      .catch(error => {
        console.log(error);
      });
  }
  console.log(search.movies);
  return (
    <>
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup className={'mb-3'}>
          <InputGroup.Prepend>
            <InputGroup.Text id={'search-addon'}>Enter title</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            value={search.searchTerm}
            onChange={handleChange}
            type={'text'}
            placeholder={'e.g. Spiderman'}
            aria-label={'title'}
          />
          <InputGroup.Append>
            <Button variant={'outline-secondary'} type={'submit'}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  <MovieList movies={search.movies}/>
</>
)
  ;
}

export default SearchMovie;