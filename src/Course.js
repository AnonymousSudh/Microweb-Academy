import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Course = () => {
  return (
      <WebView source={{ uri: 'https://script.google.com/macros/s/AKfycbyMri5eMEeC2PvN4wQhxj5WQJXnj3zDnu95nxEBKqELOBY76BxuOncrbIOyXrr6NPPR/exec' }}  />

  )
}

export default Course

const styles = StyleSheet.create({})