import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'
const BookList = () => {

    const {books} = useContext(BookContext)
  return  books.length ? (
    <div className="book-list">
        <ul>
           {
            books.map((book) => (

                <BookDetails key={book.id} book={book}/>
               
            ))
           }
        </ul>
    </div>
    

  ) : (
    <h3 className='empty'>No books to display</h3>
  )
}

export default BookList
