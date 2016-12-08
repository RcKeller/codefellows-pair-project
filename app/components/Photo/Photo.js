// jshint ignore: start
import React from 'react'

const Photo = ({ title, date, photoURL }) =>
  <div>
    <h2>And this is our Photo!</h2>
    <hl />
    <h1>{title}</h1>
    <img src={photoURL} />
    <br></br>
    <em>Date taken: {date}</em>
  </div>

const propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  photoURL: React.PropTypes.string
}

export default Object.assign(Photo, propTypes)
