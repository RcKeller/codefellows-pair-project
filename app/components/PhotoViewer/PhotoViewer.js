// jshint ignore: start
import React from 'react'

import axios from 'axios'
import format from 'date-fns/format'

import Photo from '../Photo/Photo'

const placeholder = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg'

const key = '?api_key=' + 'bogXwr5jeRLfVzR3tAPxOE0ydqNqQISG9WIYTyvj'
const endpoint = 'https://api.nasa.gov/planetary/apod'

class PhotoViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: {
        title: 'Title Here',
        photoURL: placeholder,
        date: 'Date'
      }
    }
  }

  getPhoto () {
    let url = endpoint + key
    console.log('URL', url)

    axios.get(url)
    .then((res) => {
      let data = res.data
      console.log(data)
      let temp = this.state.photo
      temp.title = data.title
      temp.photoURL = data.url
    })
    .catch((res) => {
      console.error(res)
    })
  }

  render () {
    return (
      <div>
        <h1>This is our Photo Viewer</h1>
        <button onClick={this.getPhoto}>Get some photos!</button>
        <Photo
          title={this.state.photo.title}
          date={this.state.photo.date}
          photoURL={this.state.photo.photoURL}
        />
      </div>
    )
  }

}

export default PhotoViewer
