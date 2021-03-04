import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/Header'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class RequestScreen extends Component{

  constructor(){
    super()
    this.state={
      username:'',
      issue:'',
      description:'',
      location:'',
      email:firebase.auth().currentUser.email
    }
  }

  getUsername=()=>{
    db.collection('users').where('email','==',this.state.email)
    .onSnapshot((snapshot)=>{snapshot.forEach(doc=>{var document=doc.data();
      this.setState({
        username:document.username
      })
    });
   })
  }
  

  addRequest=(issue,description)=>{
    db.collection('requests').add({
      issue:this.state.issue,
      description:this.state.description,
      username:this.state.username,
      location:this.state.location,
      email:this.state.email
      })
      alert('Request generated')
      this.props.navigation.navigate('IssuesScreen')
  }

  componentDidMount(){
    this.getUsername()
  }

    render(){
      return (
      <SafeAreaProvider>
        <View style={styles.container}>
      <MyHeader title={'Requests Screen'}/>

      <TextInput
      style={styles.input}
      placeholder={"Enter Issue"}
      onChangeText={text=>this.setState({issue:text})}
      />

      <TextInput
      style={styles.input}
      placeholder={"Enter Description"}
      onChangeText={text=>{this.setState({description:text})}}
      multiline={true}
      />
      
      <TextInput
      style={styles.input}
      placeholder={"Enter Location"}
      onChangeText={text=>this.setState({location:text})}
      />

      <TouchableOpacity
      style={styles.addIssueButton}
      onPress={()=>{this.addRequest(this.state.issue,this.state.description,this.state.username,this.state.location)}}
      >
          <Text style={styles.addIssueButtonText}>Add Issue</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaProvider>
      
        )
    }
   
  }

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
},
input:{
  alignSelf:'center',
  width:250,
  height:35,
  marginTop:20,
  borderWidth:1,
  borderRadius:2
},
addIssueButton:{
  backgroundColor:'red',
  width:100,
  height:35,
  borderRadius:5,
  alignSelf:'center',
  marginTop:20
},
addIssueButtonText:{
  fontWeight:'bold',
        color:'white',
        fontSize:20,
        alignSelf:'center'
}
})
  
  