// jshint ignore: start
import React from 'react'
import format from 'date-fns/format'


const DateSelector = ({ date, setDate }) =>
  <div>
    <h2>Pick a date!</h2>
    <input type='text' label='Date' 
      placeholder='Format: "2016-12-08"'
      value={date}
      onChange={(e) => setDate(e.target.value)} />
  </div>

export default DateSelector
