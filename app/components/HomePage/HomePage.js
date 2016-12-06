// jshint ignore: start
import React from 'react'

import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessagesList from '../MessagesList/MessagesList'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Code 501</h1>
        <h2>Building Web Apps with React + Redux</h2>
        <Bio myName='Keller' age={22}
          pronoun={{
            nominative: 'he',
            accusative: 'him',
            possessive: 'his',
            reflexive: 'himself'
          }}
          favoriteActivity={'watching movies'}
          img='https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png' imgAlt='Adorable photo of a puppy'
          />
        <BooksList />
        <MessagesList />
      </div>
    )
  }

}

export default HomePage
