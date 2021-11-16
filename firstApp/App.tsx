import { stringTypeAnnotation } from '@babel/types';
import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

const App = () => {
  return (
  <View style={styles.Container}>
    <Text style={styles.Text}>
      My Age is:
    </Text>
    <View style={styles.ControlsContainer}>
      <Text style={styles.Age}>
        0
      </Text>
      <View style={styles.ButtonContainer}>
        <CustomButton  text='-'/>
        <CustomButton  text='+'/>
        <CustomButton  text='/'/>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    display: 'flex',
    height: '100%',
    justifyContent: 'center' 
  },
  Text: {
    fontSize: 25,
      fontWeight: '700',
      letterSpacing: 2
  },
  ControlsContainer: {
    alignItems: 'center',
    width: '100%',
    margin: 20,
  },
  Age: {
    color: '#4e086f',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
})

export default App;
