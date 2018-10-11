import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

type Props = {};

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.red}>Hello {this.props.name}</Text>
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

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join('')}
        </Text>
      </View>
    );
  }
}

export default class App extends Component<Props> {
  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View style={styles.container}>
        <View style={{width: 200, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={styles.instructions}>Hello world!</Text>
        </View>
        <View style={{width: 200, height: 50, backgroundColor: 'steelblue'}}>
          <Greeting name='Native'/>
        </View>
        <View style={{width: 200, height: 50, backgroundColor: 'skyblue'}}>
          <Blink text='I love to blink'/>
        </View>
        <View style={{width: 200, height: 50}}>
          <Image source={pic} style={{width: 200, height: 50}}/>
        </View>
        <View style={{width: 200, height: 50}}>
          <PizzaTranslator/>
        </View>
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
  red: {
    color: 'red'
  }
});
