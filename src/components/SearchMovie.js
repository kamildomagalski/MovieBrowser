import React from 'react';
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";


function SearchMovie() {
 return (
  <section>
   <Container>
     <InputGroup className={'mb-3'}>
       <InputGroup.Prepend>
         <InputGroup.Text id={'search-addon'}>Enter title</InputGroup.Text>
       </InputGroup.Prepend>
       <FormControl
         placeholder={'e.g. Spiderman'}
         aria-label={'title'}
       />
       <InputGroup.Append>
         <Button variant={'outline-secondary'}>Search</Button>
       </InputGroup.Append>
     </InputGroup>
   </Container>
  </section>
 );
}
export default SearchMovie;