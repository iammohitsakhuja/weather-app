import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Skycons from '../skycons'

class AnimatedWeatherIconsReact extends Component {
  // To indicate whether any icons are currently being animated or not.
  static playing = false

  // Contains all icons being displayed.
  static allIcons = new Skycons({ color: 'hotpink' })

  // Toggles animation on and off for the icons.
  static togglePlay = () => {
    if (AnimatedWeatherIconsReact.playing) AnimatedWeatherIconsReact.allIcons.pause()
    else AnimatedWeatherIconsReact.allIcons.play()
    AnimatedWeatherIconsReact.playing = !AnimatedWeatherIconsReact.playing
  }

  canvasRef = null

  componentDidMount() {
    const { icon } = this.props

    AnimatedWeatherIconsReact.allIcons.add(this.canvasRef, Skycons[icon])

    if (!AnimatedWeatherIconsReact.playing) AnimatedWeatherIconsReact.togglePlay()
  }

  componentWillUnmount() {
    AnimatedWeatherIconsReact.allIcons.remove(this.canvasRef)

    // Stop animation if there are no icons in the list.
    if (AnimatedWeatherIconsReact.allIcons.list.length === 0) AnimatedWeatherIconsReact.togglePlay()
  }

  storeCanvasRef = canvas => {
    this.canvasRef = canvas
  }

  render() {
    const { size } = this.props

    return <canvas ref={this.storeCanvasRef} height={size} width={size} />
  }
}

AnimatedWeatherIconsReact.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG',
  ]).isRequired,
  size: PropTypes.number.isRequired,
}

export default AnimatedWeatherIconsReact
