import React, {Component} from 'react'
import {Input} from 'react-native-elements'
import {View, StyleSheet} from 'react-native'
import R from 'ramda'

const styles = StyleSheet.create({
  inputTextBox: {
    height: 55, 
    borderColor: "#e2e2e2", 
    borderWidth: 1,
    borderRadius: 5,
    padding: 0
  },
  labelStyle:{
    fontFamily: 'Lato-Regular_0',
    color: '#4c48f5',
    fontWeight: 'normal'
  },
  container: {
    marginBottom: 20
  }
})

const { test } = RegExp.prototype

const validationMap = type =>
  ({
    otp: test.bind(RegExp('^[0-9]{3,}$')),
    mail: test.bind(RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+$')),
    name: test.bind(RegExp('^([a-zA-Z0-9$@$!%*?&]){5,}$')),
    password: test.bind(RegExp('^([a-zA-Z0-9$@$!%*?&]){5,}$')),
    tel: (value) => {
      return test.bind(RegExp('^[0-9]{3,}$'))(value) && value.length === 10
    },
    generic: R.T
  }[type])

const keyboardType = R.cond([
  [R.equals('otp'), R.always('numeric')],
  [R.equals('mail'), R.always('email-address')],
  [R.equals('tel'), R.always('phone-pad')],
  [R.T, R.always('default')]
])

class CommonTextInput extends Component{
  constructor(props){
    super(props)
    this.state={
      valid: true,
      value: props.value
    }
  }

  onChangeText = (value) => {
    this.setState((prevState, props) => ({
      value,
      valid: validationMap(props.type)(value)
    }))
    this.props.onChangeText(value)
  }

  render(){
    const {placeholder, label, value, errMsg, autoFocus, type} = this.props
    const secureTextEntry = (type === 'password')? true: false
    const errorMsg = (!this.state.valid)? errMsg: ''
    return(
      <View>
        <Input
          containerStyle={styles.container}
          labelStyle={styles.labelStyle}
          keyboardType={keyboardType(type)}
          label={label}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          secureTextEntry={secureTextEntry}
          errorStyle={{ color: 'red' }}
          errorMessage={errorMsg}
        />
      </View>
    )
  }
}

export default CommonTextInput
