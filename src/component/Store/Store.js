import react from "react";
import { View,Image,Text, TouchableOpacity} from "react-native";

import styles from "./Store.style";




const Store = ({store}) => {

    return(
        <View style={styles.container}>
            <View>
            <Image style={styles.image}source={{uri: store.imgURL}} />
            <Text style={styles.title}> {store.title} </Text>
            <Text  style={styles.price}>{store.price} </Text>
            {store.inStock === false && <Text style={styles.instock} >Stokta Yok</Text> }  
            </View>
        <TouchableOpacity style={styles.button}>
            <Text>Sepete ekle</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Store;