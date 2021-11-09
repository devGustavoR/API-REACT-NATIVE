import React,{Component} from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';

class Users extends Component{
  render(){
    return(
      <><View style={styles.container}>
        <Text style={styles.espaco}>{this.props.data.name}</Text>

        <Image style={styles.imagem} source={{ uri: this.props.data.avatar }} />

      </View><View style={styles.linha}></View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
  },
  espaco:{
    flex: 1,
    paddingVertical:25,
    fontSize:20,
  },
  linha:{
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  imagem:{
   width : 50,
   height: 50,
  }
});

export default Users;