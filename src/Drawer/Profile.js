import React ,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Profile extends Component{
    render(){
        return(

            <View style = {styles.container}>
                <Text style = {styles.hometext}>Profile page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            alignItems : 'center' ,
            justifyContent : 'center',
            backgroundColor : 'green'
        },
        hometext :{
            fontSize :24,
            fontWeight :'bold',
            color : '#ffffff'
        }
    }
)