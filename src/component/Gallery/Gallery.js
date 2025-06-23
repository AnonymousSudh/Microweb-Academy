import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import AppStyle from '../../../AppStyle'
import { useNavigation } from '@react-navigation/native';
import Course from '../../Course';

const Gallery = () => {
  const navigation = useNavigation();
  const imageArray = [
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/Microweb%20Academy%2F1.jpg?alt=media&token=be526a67-1bf9-47da-b1fc-d037589810fd",
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/Microweb%20Academy%2F2.jpg?alt=media&token=44ac3387-a993-407e-9028-c8af268290d7",
    "https://firebasestorage.googleapis.com/v0/b/upload-dae22.appspot.com/o/Microweb%20Academy%2F3.jpg?alt=media&token=68218c9f-0bd0-40c3-94d4-4f6fc0b2d4b6"
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
                onPress={() => navigation.navigate("Gallery")}
              >

                <Image
                  style={styles.galleryImg}
                  source={{ uri: val }}

                />
              </TouchableOpacity>
            )
          })}
        </ScrollView>

      </View>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    // justifyContent:
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10
  },
  galleryImg: {
    // borderColor: "red",
    // borderWidth: 1,
    marginHorizontal: 5,
    width: 150,
    borderRadius: 10,
    // height: 150,
    aspectRatio: 1

    // paddingBottom:400
  },

})