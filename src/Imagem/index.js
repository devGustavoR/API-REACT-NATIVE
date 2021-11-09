// Importações React
import React,{Component} from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';

class Imagem extends Component{
  render(){
    return(
      <View>
        <Image style={styles.imagem}source={{uri: this.props.data.avatar}}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  imagem:{
   width : 25,
   height: 25,
  }
});

export default Imagem;