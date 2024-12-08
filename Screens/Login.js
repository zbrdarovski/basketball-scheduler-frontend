import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, Text, View, Image, ImageBackground,TextField } from 'react-native';
import NBAButton, { ButtonTypes } from '../components/NBAButton';



const Login = ({navigation}) =>{
    return(
        <ImageBackground source={require('../assets/doncic.png')} style={styles.container}>
            <TextInput style={styles.input} placeholder="Username"/>
            <TextInput style={styles.input} placeholder="Password"/>
            
            <View style={styles.btn_container}>
              <NBAButton style={styles.btn} title={"Login"} type={ButtonTypes.PRIMARY} />
              <NBAButton style={styles.btn} title={"Register"} onPress={() => navigation.navigate('Register')} />
              <NBAButton style={styles.btn} title={"Settings"} onPress={() => navigation.navigate('Settings')} />
              <NBAButton style={styles.btn} title={"Teams"} onPress={() => navigation.navigate('Teams')} />
              <NBAButton style={styles.btn} title={"Home"} onPress={() => navigation.navigate('Home')} />
            </View>

            <StatusBar style="auto" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: "10%",
    },
    input:{
      borderWidth: 2,
      borderColor: '#08a0ee',
      padding: 8,
      marginBottom: 10,
      backgroundColor: '#ffffff',
      borderRadius: 4
    },
    btn_container: {
      marginTop: 50,
      paddingHorizontal: "10%",
    },
    btn:{
      marginBottom: 10,
    },
});

export default Login


  