import React, {useState} from 'react';
import {Container} from "react-bootstrap";

import MovieList from "./MovieList";
import SearchInput from "./SearchInput";
import PaginationBar from "./PaginationBar"

function SearchMovie() {
  const [search, setSearch] = useState({
    searchTerm: '',
    movies: [],
    totalResults: 0,
    currentPage: 1
  })
  console.log(search);
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
          totalResults: data.total_results,
          currentPage: 1
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
  const numberPages= Math.floor(search.totalResults / 20)
  
  return (
    <Container>
      <SearchInput search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {search.totalResults > 20
        ?<PaginationBar pages={numberPages} nextPage={nextPage} currentPage={search.currentPage}/>
        : null }
      <MovieList movies={search.movies}/>
    </Container>
  )
    ;
}

export default SearchMovie;