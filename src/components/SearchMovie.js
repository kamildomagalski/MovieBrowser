import React, {useState} from 'react';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";


function SearchMovie() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies]= useState([])
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(searchTerm);
  }
  
 
  return (
    <section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputGroup className={'mb-3'}>
            <InputGroup.Prepend>
              <InputGroup.Text id={'search-addon'}>Enter title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={searchTerm}
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
    </section>
  );
}

export default SearchMovie;