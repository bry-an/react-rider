import React, { Component } from 'react'
import autoComplete from '../../../utilities/autocomplete'
import './RouteEditor.sass'
import EditorTool from './EditorTool/EditorTool'

export default class RouteEditor extends Component {
  state = {
    locationEntry: ''
  }

  componentDidMount() {
    autoComplete('location-entry')
  }

  handleLocationInput = e => {
    e.preventDefault()
    console.log('location')
    const location = autoComplete('location-entry')
    console.log('location', location)
  }

  getAutocomplete = () => {
    this.setState({
      locationEntry: autoComplete('location-entry')
    })

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
            onSubmit={this.handleLocationInput}
          />
        </form>
        <p>Editor tools</p>
        <div id='editorToolsContainer'>
          <EditorTool />
          <EditorTool />
          <EditorTool />
          <EditorTool />
          <EditorTool />
          <EditorTool />
        </div>


      </div>
    )
  }
}
