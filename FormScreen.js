import * as React from 'react';
import { Image,  StyleSheet, Text,TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

import bgImage from '../images/background.jpg';
import { render } from 'react-dom';

  export default function FormScreen() {
    
    return (
    
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                />
        </View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                />
        </View>
    
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
             <Text style={styles.forgot}>Signup</Text>
        </TouchableOpacity>
         
        <TouchableOpacity>
             <Text style={styles.forgot}>Forgot Password?</Text>
       </TouchableOpacity>
        
  
       </ImageBackground>
    );


}


const styles = StyleSheet.create({
  
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:30,
    color:"black"
  },
  

  forgot:{
    color:"white",
    fontSize:11
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  
});
