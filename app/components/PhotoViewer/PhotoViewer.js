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
        date: 'Date',
        photoURL: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg'
      }
    }
  }

  getPhoto () {
    let url = endpoint + key
    console.log('URL', url)

    axios.get(url)
    .then((res) => {
      const data = res.data
      console.log('state right now', this.state)
      console.log(data)
      var temp = this.state.photo
      temp = {
        title: data.title,
        date: data.date,
        photoURL: data.url
      }
      this.setState({photo: temp})
    })
    .catch((res) => {
      console.error(res)
    })
  }
  
  

  render () {
    return (
      <div>
        <h1>This is our Photo Viewer</h1>
        <button onClick={this.getPhoto.bind(this)}>Get some photos!</button>
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
