// jshint ignore: start
import React from 'react'
import { render } from 'react-dom'

import HomePage from './components/HomePage/HomePage'

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

render(<HomePage />, document.getElementById('app'))
