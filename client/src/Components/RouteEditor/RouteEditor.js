import React, { Component } from 'react'
import autoComplete from '../../utilities/autocomplete'
import './RouteEditor.sass'

export default class RouteEditor extends Component {
  state = {
    locationEntry: ''
  }

  componentDidMount() {
    autoComplete('location-entry')
  }

  render() {
    return (
      <div id='route-editor'>
        <form>
          <p>Enter your location</p>
          <input
            type='text'
            name='locationEntry'
            id='location-entry'
          />
        </form>
        <p>Editor tools</p>
        <ul>
          <li>tool</li>
          <li>tool</li>
          <li>tool</li>
          <li>tool</li>
        </ul>


      </div>
    )
  }
}
