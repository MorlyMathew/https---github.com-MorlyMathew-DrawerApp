import React ,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(

            <View style = {styles.container}>
                <View style = {{height : "25%" , backgroundColor : 'black',flexDirection:'row'}}>

                <View style = {styles.profilepic}>
                    <Image 
                    style = {styles.profileimage}
                    source={require("./assests/logo.jpeg")}>

                    </Image>
                    <Text style={{backgroundColor:'white',color:'black',padding:5,textAlign:'center',borderRadius:5,borderColor:'yellow',borderWidth:2,marginTop:40}}> Invite</Text>
                
                </View>
                <Text style={{color:'white',textAlign:'right',flex:1,marginTop :20,fontSize:20}}> Arun Raj 
                  </Text>
                    <Text >About Us</Text>

                </View>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Profile')}>Profile</Text>
                <View style ={{height:1,backgroundColor:'black',margin:10}}></View>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('demo')}>Wallet Balance</Text>
                <View style ={{height:1,backgroundColor:'black',margin:10}}></View>
                <Text style = {styles.menu}>Records</Text>
                <View style ={{height:1,backgroundColor:'black',margin:10}}></View>
                <Text style = {styles.menu}>Settings</Text>
                <View style ={{height:1,backgroundColor:'black',margin:10}}></View>
                <Text style = {styles.menu}>About Us</Text>  
                <View style ={{height:1,backgroundColor:'black',margin:10}}></View>
                <Text style = {{ width: '100%', marginBottom:30, justifyContent: 'center',alignItems: 'center',
                position: 'absolute',textAlign:'center',  color:'black', fontSize :18, fontWeight :'500', bottom: 0}}>logout</Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            backgroundColor : 'white'
        },
        menu :{
            fontSize :18,
            fontWeight :'500',
            margin :10,
            color : 'black'
        },
        profilepic :{
            margin:10,
            backgroundColor : '#ffffff',
            height :100,
            width : 100,
            borderRadius: 25,
            flexDirection:'column'
            
        },
        profileimage :{
            height :'100%',
            width : '100%'
            
        }
    }
)