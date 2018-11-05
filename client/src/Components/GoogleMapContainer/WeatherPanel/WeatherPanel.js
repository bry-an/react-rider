
import React, { Component } from 'react'
import './WeatherPanel.sass'
import WeatherPanelItem from './WeatherPanelItem/WeatherPanelItem'

export default class WeatherPanel extends Component {
  render() {
    return (
      <div id='weatherPanel'>
        <p>Weather for your route</p>
        <div id='weatherPanelItemContainer'>
          <WeatherPanelItem />
          <WeatherPanelItem />
          <WeatherPanelItem />
          <WeatherPanelItem />
          <WeatherPanelItem />
        </div>

      </div>
    )
  }
}
