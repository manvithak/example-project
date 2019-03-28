/**
 * @providesModule SignInView
 */

/* eslint-disable camelcase */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, View, ScrollView, StyleSheet, StatusBar, TouchableHighlight } from 'react-native'
import GenericText from 'react-native-generic-text'
import CommonTextInput from '../../components/GenericTextInput'
import importedStyles from '../../Styles.js'
import { Button } from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInput: {
    marginTop: 48
  },
  actionContainer: {
    marginTop: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30
  }
})

const nameErrorText = 'Enter a valid username'
const passwordErrorText = 'Enter a valid password'

isEmptyField = (username, password) => {
  if(username.length == 0 || password.length == 0)
    return true
  else
    return false
}

class LoginView extends PureComponent {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeText = (username) => this.setState({ username})
  
  onChangePassword = password => this.setState({ password })

  onNewUser = () => this.props.navigation.navigate('SignUp')

  onSignIn = () => {
    var user = {
      email: this.state.username,
      password: this.state.password
    }
    this.props.navigation.navigate('Home')
  }

  static navigationOptions = {
    header: null
  }
  
  render() {
    const { username, password } = this.state
    const { navigation } = this.props
    const disabled = isEmptyField(username, password)
    return( 
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 100}}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <CommonTextInput
                type='name'
                label= 'User Name'
                value={username}
                onChangeText={this.onChangeText}
                placeholder="Enter user name"
                autoFocus={true}
                errMsg={nameErrorText}
              />
              <CommonTextInput
                type='password'
                label= 'Password'
                value={password}
                onChangeText={this.onChangePassword}
                placeholder="Enter Password"
                errMsg={passwordErrorText}
              />
              <View style={{padding: 12}}>
                <Button title='LOGIN' onPress={this.onSignIn} disabled={disabled} buttonStyle={importedStyles.commonButton}/>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default LoginView
