/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {};

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return {isShowingText: !previousState.isShowingText}
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    )
  };
}

export default class App extends Component<Props> {
  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Hello world!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Native'/>
        <Blink text='I love to blink'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
