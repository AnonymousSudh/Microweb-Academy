import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import AppStyle from '../../../AppStyle'
import { useNavigation } from '@react-navigation/native';
import Course from '../../Course';

const Gallery = () => {
  const navigation = useNavigation();
  const imageArray = [
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/logo2.png?alt=media&token=dddd5943-ff4c-4e57-a869-cda91423f0b6",
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/logo2.png?alt=media&token=dddd5943-ff4c-4e57-a869-cda91423f0b6",
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/logo2.png?alt=media&token=dddd5943-ff4c-4e57-a869-cda91423f0b6"
  ]
  return (
    <View>
      <Text style={[AppStyle.headingStyle]}>Gallery</Text>
      <View style={styles.imageView}>

        <ScrollView
          horizontal={true}
        >

          {imageArray.map((val) => {
            return (
              <TouchableOpacity
                onPress={navigation.navigate(Gallery)}
              >

                <Image
                  style={styles.galleryImg}
                  source={{ uri: val }}

                />
              </TouchableOpacity>
            )
          })}
        </ ScrollView>

      </View>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
  galleryImg: {
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    height: 100
  },
  imageView: {
    display: 'flex',
    // justifyContent:
    flexDirection: 'row',


  }
})