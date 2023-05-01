import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

const headingFont = 30;
export default AppStyle={

    headingStyle:{
        color:"#E5E8F1",
        fontWeight:900,
        fontSize: headingFont,    
    },
    normalText:{
        color:"#E5E8F1",
        fontSize:18
        
    },
    navigationIcon:{
        height:30,
        width:30
    }

}