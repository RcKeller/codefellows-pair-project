// jshint ignore: start
import React from 'react'

import PhotoViewer from '../PhotoViewer/PhotoViewer'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Code 501</h1>
        <h2>Building Web Apps with React + Redux</h2>
        <PhotoViewer />
      </div>
    )
  }

}

export default HomePage
