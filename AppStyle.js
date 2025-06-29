import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')

const headingFont = 30;
export default AppStyle={

    headingStyle:{
        color:"#E5E8F1",
        fontWeight:900,
        fontSize: headingFont,    
    },
    headingWithBottom:{
        color:"#E5E8F1",
        fontWeight:900,
        fontSize: headingFont, 
        textDecorationLine: 'underline',
        fontSize: 20,
        color: '#E5E8F1',
    },
    miniHeading:{
        color:"#E5E8F1",
        fontWeight:900,
        fontSize: 22,    
    },
    normalText:{
        color:"#E5E8F1",
        fontSize:18,
        fontFamily: "PTSerif-Regular"
        
    },
    navigationIcon:{
        height:30,
        width:30
    },
    background:{
        colour:"#06060B",
        // background:
        backgroundColor:"#06060B"
        
    },
    subHeading:{
        color:"#FFEE80",
        fontWeight:800,
        fontSize: 22,  
    },
    

}