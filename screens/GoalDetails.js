import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



export default class GoalDetails extends Component{
   render(){
      return(
        <View style={styles.container}>
            <Text style={styles.Titletext}>GoalDetails</Text>

            <TouchableOpacity style={styles.RouteCard} onPress={()=> this.props.navigation.navigate("Profile")}>
               <Text style={styles.RouteText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RouteCard} onPress={()=> this.props.navigation.navigate("Progress")}>
               <Text style={styles.RouteText}>Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RouteCard} onPress={()=> this.props.navigation.navigate("Steps")}>
               <Text style={styles.RouteText}>Steps</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RouteCard} onPress={()=> this.props.navigation.navigate("Rewards")}>
               <Text style={styles.RouteText}>Rewards</Text>
            </TouchableOpacity>
        </View>
      )
  }
}

const styles=StyleSheet.create({
     container:{
        flex:1
     },
     Titletext:{
        justifyContent:"center",
        alignItems:"center",
        fontSize:40,
        color:"blue",
        fontWeight:"Bold"
     },
     RouteCard:{
        backgroundColor:"pink",
        borderRadius:30,
        marginTop:50,
        marginRight:50,
        marginLeft:50,
        flex:0.25
     },
     RouteText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75
     }
})