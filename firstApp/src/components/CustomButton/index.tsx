import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props{
    text: String;
}

const Component = (props: Props) => {
    const {text} = props;
    return (
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>
            {text}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#e20c70',
        padding: 10,
        width: 50,
      },
      ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
      }, 
})

export default Component;