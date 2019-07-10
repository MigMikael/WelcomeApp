import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HelloPeople from './HelloPeople'
import Blink from './Blink'

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text>Hello, World</Text>          
        </View> 
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <HelloPeople name='Mig' />
        </View> 
        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <Blink text="This line is Blink" />
        </View>
      </View>
    )
  }
}