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
      title: 'Title Here',
      image: placeholder,
      date: 'Date'
    }
  }

  getPhoto () {
    let url = endpoint + key
    console.log(url);
    
    
    
//    if (this.state.token !== '') {
//      url += `&pageToken=${this.state.token}`
//    }
//    axios.get(url)
//      .then((res) => {
//      const oldMessages = this.state.messageList
//      const newMessages = oldMessages.concat(res.data.messages)
//      this.setState({
//        messageList: newMessages,
//        token: res.data.pageToken
//      })
//    })
//      .catch((res) => {
//      console.error(res)
//    })
  }
  
  render () {
    return (
      <div>
        <h1>This is our Photo Viewer</h1>
        <button onClick={this.getPhoto}>Get some photos!</button>
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
