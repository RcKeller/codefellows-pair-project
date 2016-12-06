// jshint ignore: start
import React from 'react'

import Photo from '../Photo/Photo'

const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg'

class PhotoViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Title Here',
      image: placeholder,
      date: 'Date'
    }
  }

  render () {
    return (
      <div>
        <h1>This is our Photo Viewer</h1>
        <Photo
          title={this.state.title}
          image={this.state.image}
          date={this.state.date}
        />
      </div>
    )
  }

}

export default PhotoViewer
