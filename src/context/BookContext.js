import React ,{createContext,useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
  const [books,setBooks]=  useState([{title:'DoglaPan',author:'Ashneer Grover',id:1},{title:'Half Girlfriend',author:'Chetan Bhagat',id:2},{
        title:'Rich Dad poor dad',author:'Robert kyoskaii',id:3
    }]);

    const addBook = (title,author)=>{
        setBooks([...books,{title:title,author:author,id:uuidv4()}]);
    }

    const removeBook = (id)=>{
            setBooks(books.filter(book=>book.id!==id));
        }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;