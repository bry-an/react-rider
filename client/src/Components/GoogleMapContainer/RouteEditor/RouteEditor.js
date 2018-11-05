import React, { Component } from 'react'
import autoComplete from '../../../utilities/autocomplete'
import './RouteEditor.sass'
import EditorTool from './EditorTool/EditorTool'
import AutoComplete from '../AutoComplete'

export default class RouteEditor extends Component {
  state = {
    locationEntry: ''
  }

  mounted = false
  componentDidMount() {
    this.mounted = true
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
          {this.mounted && <AutoComplete
            inputDiv='location-entry'
            setMapCenter={this.props.setMapCenter} />}
          <input
            type='text'
            name='locationEntry'
            id='location-entry'
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
