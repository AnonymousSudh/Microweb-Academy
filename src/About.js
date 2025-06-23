import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import commanStyle from "../AppStyle.js"

const About = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            <Text style={[styles.text, { marginTop: 5 }]}>We are Starting from 2017 the institute has well qualified committed and motivated. The primary mission of the institute is to educate the students and to discover and disseminate knowledge through research.

                The institute is particularly dedicated for medium and poor family’s students. Our aim is not to provides Computer training but also Management and Information Technology to ensured that after training, the students get a suitable job which is only possible with right communication and presentation skills. health and happiness across India to empower individuals and community belonging to the poor marginalized and vulnerable section of the society with special focus on Hygiene and Sanitation .Awareness for financial inclusions and Education to all.
            </Text>
            <Text style={[commanStyle.headingStyle, { marginTop: 10 }]}>Our Mission</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>
                To Empower women and deprived ones and Physically Disable persons. To implement and support cleanliness and sanitation around us to maintain cleanliness ,to gain health and happiness across India to empower individuals and community belonging to the poor marginalized and vulnerable section of the society with special focus on Hygiene and Sanitation .Awareness for financial inclusions and Education to all.</Text>

            <Text style={[commanStyle.headingStyle, { marginTop: 10 }]}>AFFILITION</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>MICROWEB COMPUTER ACADEMY is registered by: MSME, Govt of India.</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>MICROWEB COMPUTER ACADEMY is registered by: UP Govt Under Society 21 1860</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>MICROWEB COMPUTER ACADEMY is registered by: is ISO 9001:2015 certified association</Text>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#06060B",
        paddingHorizontal: 10

    },
    text: commanStyle.normalText
})