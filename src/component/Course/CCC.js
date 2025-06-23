import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import AppStyle from '../../../AppStyle';

const CCC = () => {
    const topicCovered = [
        { key: 'Introduction to Computers' },
        { key: 'Operating Systems' },
        { key: 'Word Processing (MS Word)' },
        { key: 'Spreadsheet (MS Excel)' },
        { key: 'Presentation Software (MS PowerPoint)' },
        { key: 'Internet & Web Browsers' },
        { key: 'Email and Social Networking' },
        { key: 'Digital Financial Tools' },
        { key: 'Cyber Security and Safety' },
    ];

    return (
        <ScrollView style={{ backgroundColor: "black", height: "100%", padding: 10 }}>
            <Text style={AppStyle.headingStyle}>CCC</Text>
            <Text style={[AppStyle.subHeading, { marginTop: 8 }]}>3 Months</Text>
            <Text style={[AppStyle.headingWithBottom, styles.TopicText]}>Topic Covered</Text>
            {topicCovered.map((val, index) => (
                <Text key={index} style={[AppStyle.miniHeading, { marginLeft: 10 }]}>• {val.key}</Text>
            ))}

            <Text style={[AppStyle.headingStyle, { marginTop: 10 }]}>About This Course</Text>
            <Text style={[AppStyle.normalText, { marginTop: 10, paddingBottom: 20 }]}>
                The CCC (Course on Computer Concepts) is a fundamental computer course designed to impart basic IT literacy to the common man. The course is suitable for beginners and covers essential skills required for using computers in day-to-day life.{"\n\n"}

                • Introduction to Computers: Basics of hardware, software, input/output devices, and file management.{"\n\n"}
                • Operating Systems: Working with Windows OS – file and folder operations, system settings, etc.{"\n\n"}
                • Word Processing: Creating, editing, formatting documents using MS Word.{"\n\n"}
                • Spreadsheet: Using MS Excel for basic data entry, formatting, and simple formulas.{"\n\n"}
                • Presentation Software: Creating slides using MS PowerPoint for effective presentations.{"\n\n"}
                • Internet & Web Browsers: Introduction to internet, web browsers, search engines, downloading and uploading.{"\n\n"}
                • Email and Social Networking: Creating and managing email accounts, using social media responsibly.{"\n\n"}
                • Digital Financial Tools: Online banking, UPI, digital wallets, and mobile payments.{"\n\n"}
                • Cyber Security: Basic understanding of online threats and safe practices to avoid cybercrimes.
            </Text>
        </ScrollView>
    );
};

export default CCC;

const styles = StyleSheet.create({
    TopicText: {
        marginVertical: 20,
    },
});
