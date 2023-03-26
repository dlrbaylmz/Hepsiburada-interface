import react from "react";
import { SafeAreaView, FlatList,StyleSheet,Dimensions,Text,TextInput} from "react-native";
import news_data from "./news_data.json";

import Store from "./component/Store";

function App() {

  return(
<SafeAreaView style={styles.container}>
 
  <Text style={styles.title}> Hepsiburada </Text>
       
  <FlatList 
       ListHeaderComponent={() =>(
        <TextInput style={styles.text_input}  placeholder='Ürün, kategori veya marka ara' placeholderTextColor={'grey'} ></TextInput>
      
       )}
        numColumns={2}
        data={news_data} 
        renderItem={ ({item}) => <Store store = {item}/> }/>

</SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
  },
  title:{
    margin:5,
    color:'darkorange',
    fontSize:40,
    fontWeight:'bold',

  },
  text_input:{
    width:Dimensions.get("window").width - 10,
    height:Dimensions.get("window").height/17,
    backgroundColor:'#f1f1f1',
    borderWidth:1,
    borderColor:'#f1f1f1',
    borderRadius:10,
    margin:10,
    marginLeft:5,
    marginRight:5,
    
  }
})
export default App;


