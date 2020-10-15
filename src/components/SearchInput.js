import React from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";


function SearchInput({search, handleChange, handleSubmit}) {
 return (
     <Form onSubmit={handleSubmit} className={'mt-3'}>
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
 );
}
export default SearchInput;