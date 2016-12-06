// jshint ignore: start
import React from 'react'

const Photo = ({ title, date, image }) =>
  <div>
    <h2>And this is our Photo!</h2>
    <hl />
    <h1>{title}</h1>
    <img src={image} />
    <em>Date taken: {date}</em>
  </div>

export default Photo
