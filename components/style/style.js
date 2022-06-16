import { StyleSheet } from "react-native";


const Style = StyleSheet.create({
    container: {
        backgroundColor:'#F9F2ED',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        margin: 0,
        padding : 0,
      
    },
    BoxX: {
        marginStart:10,
        padding: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:100,
    },

    BoxY: {
        marginStart:10,
        padding: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:64,
    },

    TextOut: {
        fontSize: 18,
        justifyContent: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:20,
        color:'#1B2430',
    },

    ButtonStyle: {
        marginStart: 10,
        marginEnd: 10,
        marginTop: 354,
        height: 35,
        width: 100,
        padding:5,
        alignSelf: 'center',
        marginTop:24,
        backgroundColor: "#FFB562",
        borderRadius:8,

    },
    Buttontext: {
        fontSize: 14,
        justifyContent: 'center',
        alignContent:'center',
        fontWeight: 'bold',
        color: '#1B2430',
        alignSelf:'center'
    },
    MapStyle: {
        marginTop:10,
        marginStart:10,
        marginEnd:10,
        marginBottom:10,
        height:350,
    },
    BoxHeader: {
        backgroundColor : "#FFB562",
        flexWrap:"wrap",
        marginBottom: 5,
        padding: 8,
    },

    TextHeader: {
        fontSize:52,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginStart: 20,
        color:"#1B2430"

    }
});

export default Style;