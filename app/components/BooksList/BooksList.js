// jshint ignore: start
import React from 'react'

const books = [
  { title: 'Harry Potter', author: 'JK Rowling' },
  { title: 'A Wizard of Earthsea', author: 'Ursula K. LeGuin' },
  { title: 'Moby Dick', author: 'Herman Melville' },
  { title: 'Ulysses', author: 'James Joyce' }
]

class BooksList extends React.Component {
  render () {
    return (
      <div className='BooksList'>
        <ul>
          {books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
