import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import api from './src/services/api';

import Users from './src/Users';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      users:[],
      avatar:[]
    };
  }

  async componentDidMount(){
    const response = await api.get('api/v1/users');
    this.setState({
      users: response.data
    })
  }

  render(){
    return (
      <View>

      <FlatList
      style={styles.cardStyle}
      data={this.state.users}
      keyExtractor={item => item.id}
      renderItem={({item})=><Users data={item}/>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle:{
    borderColor:'#000',
    borderRadius:10,
  },
});

export default App;