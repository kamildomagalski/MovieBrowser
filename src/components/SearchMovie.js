import React, {useState} from 'react';
import MovieList from "./MovieList";
import SearchInput from "./SearchInput";
import {Container} from "react-bootstrap";


function SearchMovie() {
  const [search, setSearch] = useState({
    searchTerm: '',
    movies: [],
    totalResults: 0,
    currentPage: 1
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
          movies: [...data.results],
          totalResults: data.total_results
        }))
        clearSearch()
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function clearSearch() {
    setSearch(prevState => ({
      ...prevState,
      searchTerm: ''
  }))
  }
  const nextPage= (pageNumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search.searchTerm}&page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        setSearch(prevState => ({
          ...prevState,
          movies: [...data.results],
          currentPage: pageNumber
        }))
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  return (
    <Container>
      <SearchInput search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <MovieList movies={search.movies}/>
    </Container>
  )
    ;
}

export default SearchMovie;