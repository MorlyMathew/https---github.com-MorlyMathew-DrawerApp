import React,{Component} from "react";
import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";
export default class Login  extends Component{
  constructor(){
    super();
    this.state = {
      name : null
    }

  }
  updateValue(username){
    this.setState({
      name : username
    })

  }
  render(){
    return(

      <View style={styles.container}>
        <ImageBackground 
        source={require('../img/backgrd.jpeg')}
        style={styles.img_container}>

       <Image
       source={require('../img/logo.jpeg')}
       style={styles.image_style}
       ></Image> 
        <TextInput 
        style ={styles.textinputstyle}
        placeholder="Username" 
        onChangeText={(username)=>this.updateValue(username)}>
        </TextInput>
        <TextInput 
        style ={styles.textinputstyle}
        placeholder="Password" secureTextEntry>
       </TextInput>

       <View style={{flexDirection:'row'}}>

       <TouchableHighlight 
        onPress={ ()=> this.props.navigation.navigate('Drawer') }
       style ={styles.button_style}>
        <Text style ={styles.button_text}>Login</Text>
       </TouchableHighlight>

       <TouchableHighlight 
       onPress={ ()=> this.props.navigation.navigate('Register',{username: this.state.name}) }
       style ={styles.button_style}>
        <Text style ={styles.button_text}>Register</Text>
       </TouchableHighlight>
       
       </View>
       </ImageBackground>
      </View>
    ) }}
const styles = StyleSheet.create({
container :{
    height : '100%',
    width : '100%' ,
    alignItems:'center',
    justifyContent:'center' 
  }, img_container :{
    height : '100%',
    width : '100%',
    alignItems :"center",
    justifyContent:"center"   
  }, image_style:{
    height: 150,
    width :150,
    borderRadius:70,
    marginBottom:20
  }, textinputstyle:{
    height: 65,
    width :'85%',
    borderRadius :10,
    marginTop :30,
    padding:10,
    backgroundColor :'white'
  }, button_style:{
    height : 65,
    width   :'40%',
    borderRadius :10,
    marginTop :35,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent :'center'
  }, button_text:{
    color:'white'
  } })