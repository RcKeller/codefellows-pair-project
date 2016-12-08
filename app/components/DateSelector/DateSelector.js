// jshint ignore: start
import React from 'react'
import format from 'date-fns/format'


class DateSelector extends React.Component {

  render () {
    return (
      <div>
        <h2>Pick a date!</h2>
        <input type='text' label='Date' 
          placeholder='Format: "2016-12-08"'
          value={this.props.date}
          onChange={(e) => this.props.setDate(e.target.value)} />
      </div>
    )
  }

}

export default DateSelector
