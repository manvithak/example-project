import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CommonTextInput from '../components/GenericTextInput'
import { Button } from 'react-native-elements'
import importedStyles from '../Styles.js'

class HomeView extends Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      dob:'',
      education: '',
      specialization: '',
      address: ''
    }
  }
  render(){
    var {name, dob, education, specialization, address}=this.state
    return(
      <View>
        <CommonTextInput
          type='name'
          value={name}
          onChangeText={(name) => this.setState({name})}
          placeholder="Enter student name"
          autoFocus={true}
        />
        <CommonTextInput
          type='name'
          value={dob}
          onChangeText={(dob) => this.setState({dob})}
          placeholder="Date of birth"
        />
        <CommonTextInput
          type='name'
          value={education}
          onChangeText={(education) => this.setState({education})}
          placeholder="Education"
        />
        <CommonTextInput
          type='name'
          value={specialization}
          onChangeText={(specialization) => this.setState({specialization})}
          placeholder="Specialization"
        />
        <CommonTextInput
          type='name'
          value={address}
          onChangeText={(address) => this.setState({address})}
          placeholder="Address"
        />
        <Button title='Add' buttonStyle={importedStyles.commonButton}/>
      </View>
    )
  }
}

export default HomeView
