import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowing: true }

    setInterval(() => (
      this.setState(prevState => (
        { isShowing: !prevState.isShowing }
      ))
    ), 1000)
  }

  render() {
    if (!this.state.isShowing) {
      return null
    }

    return(
      <Text>{ this.props.text }</Text>
    )
  }
}