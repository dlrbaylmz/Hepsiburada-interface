import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#f1f1f1",
        margin:10,
        flex:1,
        padding:10,
        borderRadius:10,
       
    },
    image:{
        height: Dimensions.get("window").height / 4,
        resizeMode:"contain",
        borderRadius:10,
        backfaceVisibility:'hidden'
        
    },
    title:{
        fontSize:17,
        color:'black',
        marginTop:20,
        fontWeight:'bold',
        marginLeft:5,},
    price:{
        margin:10,
        fontWeight:'bold',
        fontSize:15, 
    },
    instock:{
        color:'red',
        fontSize:18,
        margin:5,
        fontWeight:"bold"
    },
    button:{
        borderRadius:10,
        alignItems:"center",
        padding:10,
        borderColor:"grey",
        borderWidth:1
    },


})