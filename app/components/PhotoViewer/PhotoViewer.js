// jshint ignore: start
import React from 'react'

import Photo from '../Photo/Photo'

class PhotoViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      title: ''
    }
  }

  render () {
    return (
      <div>
        <h1>This is our Photo Viewer</h1>
        <Photo title={this.state.title}
          image={this.state.image}
        />
      </div>
    )
  }

}

export default PhotoViewer
