import React, {Component} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import importedStyles from '../Styles.js'

const styles = StyleSheet.create({
  listItem: {
    margin: 10
  }
})

const displayData=['Aana', 'Eli', 'Jack', 'James']
class HomeView extends Component{
  constructor(props){
    super(props)
  }
  handlePress = () => {
    this.props.navigation.navigate('AddStudent')
  }
  renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  )
  keyExtractor = (item, index) => '' + index;
  render(){
    return(
      <View>
        <FlatList
          data={displayData}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <Button title='Add' onPress={this.handlePress} buttonStyle={importedStyles.commonButton}/>
      </View>
    )
  }
}

export default HomeView
