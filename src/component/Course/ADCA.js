import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import AppStyle from '../../../AppStyle'
// import { ScrollView } from 'react-native-gesture-handler'

const ADCA = () => {
    const topicCovered = [
        { key: 'Computer fundamentals' },
        { key: 'Operating systems' },
        { key: 'Microsoft Office Suite' },
        { key: 'Accounting Tally' },
        { key: 'Desktop publishing' },
        { key: 'Programming Language C,C++' },
        { key: 'Hardware awareness' },
        { key: 'HTML and the internet' },]
    return (
        <ScrollView style={{ backgroundColor: "black", height: "100%", padding: 10 }}>
            <Text style={AppStyle.headingStyle}>ADCA</Text>
            <Text style={[AppStyle.subHeading, { marginTop: 8 }]}>12 Months</Text>
            <Text style={[AppStyle.headingWithBottom, styles.TopicText]}>Topic Covered</Text>
            {topicCovered.map((val) => {
                return (
                    <Text style={[AppStyle.miniHeading, { marginLeft: 10 }]}>• {val.key}</Text>
                )
            })}

            <Text style={[AppStyle.headingStyle, { marginTop: 10 }]}>About This Course</Text>
            <Text style={[AppStyle.normalText,{marginTop:10,paddingBottom:20}]}>The ADCA course is designed to be both practical and theoretical. Students will learn the skills they need to use computer applications in the workplace, and they will also gain a deeper understanding of the underlying principles of computer science.{"\n"}

                Here are some of the specific topics that are covered in the ADCA course:

                • Computer fundamentals: This module covers the basics of computer hardware and software, including operating systems, file management, and networking.
                Operating systems: This module covers the different types of operating systems, including Windows, macOS, and Linux. Students will learn how to use these operating systems to perform basic tasks, such as file management, installing software, and connecting to the internet.{"\n"}

                • Microsoft Office Suite: This module covers the most popular productivity software suite, including Microsoft Word, Excel, PowerPoint, and Access. Students will learn how to use these applications to create documents, spreadsheets, presentations, and databases.
                Accounting: This module covers the basics of accounting, including bookkeeping, financial statements, and taxes. Students will learn how to use accounting software to track financial transactions and prepare financial reports.{"\n"}

                • Desktop publishing: This module covers the basics of desktop publishing, including using layout software to create brochures, flyers, and other marketing materials. Students will also learn how to use image editing software to create and edit images.{"\n"}

                • Programming: This module introduces students to the basics of programming, including object-oriented programming and data structures. Students will learn how to use programming languages, such as Java, Python, and C++, to create software applications.{"\n"}

                • Hardware awareness: This module covers the basics of computer hardware, including the different types of hardware components, how they work together, and how to troubleshoot common hardware problems.{"\n"}

                • HTML and the internet: This module covers the basics of HTML, the language used to create web pages. Students will learn how to use HTML to create simple web pages, and they will also learn about the different components of the internet, such as web browsers, websites, and search engines.</Text>


        </ScrollView>
    )
}

export default ADCA

const styles = StyleSheet.create({
    TopicText: {
        marginVertical: 20,
        // borderColor:"red",
        // borderWidth:1
    }
})