import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const NewBookForm = () => {
    const {addBook}=useContext(BookContext);
    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
  return (
    <form onSubmit={handleSubmitForm}>
        <input type="text" placeholder='book title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>

        <input type="text" placeholder='Author Name' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>

        <input type="submit" value='add book'/>
    </form>
  )
}

export default NewBookForm
