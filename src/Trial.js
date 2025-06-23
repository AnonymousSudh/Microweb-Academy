import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
const Trial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.glass}>
        <Text style={styles.text}>This is a glassmorphic text!</Text>
      </View>
    </View>
  )
}

export default Trial

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  glass: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})