import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from 'react-native'


function AppPro(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark'


    const [text, onChangeText] = React.useState('UserName');
    const [number, onChangeNumber] = React.useState('password');

  return (

      <View style={styles.container}>
        <Text style={styles.hostelText}>Hostel<Text style={styles.appText}>App</Text></Text>


        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Button
        title="Submit"
        onPress={() => Alert.alert('Simple Button pressed')}
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
    color: 'blue',
    fontWeight: 'bold'
  },
  appText: {
    fontSize: 50,
    color: 'black'
  },

  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})


export default AppPro;