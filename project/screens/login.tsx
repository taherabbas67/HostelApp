import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from 'react-native'


function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark'


  const [username, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (

    <View style={styles.container}>
      <Text style={styles.hostelText}>Hostel<Text style={styles.appText}>App</Text></Text>


      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={password}
        placeholder="Password"
        // keyboardType="numeric"
      />



      <Button
        title="Log In"
        // onPress={() => dashboard}  
        color='#2958E5'
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  },

  hostelText: {
    fontSize: 50,
    color: '#2958E5',
    fontWeight: 'bold',
    marginBottom: 30
  },
  appText: {
    fontSize: 50,
    color: '#060606',
    marginBottom: 30
  },

  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  button: {
    color: '#2958E5'
  }
})


export default App;