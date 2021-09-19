/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#2ea3f2',

}


export const styles = StyleSheet.create({
    pantallaCompleta:{
        flex:1,
    },
    storeName: {
        fontSize: 15,
    },
    separationV: {
        marginVertical: 10,
    },
    storeCode: {
        fontSize: 10,
        color: 'grey',
    },
    itemSeparator: {
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    loaderG: {
        flex:1, 
        justifyContent: 'center',
        alignContent: 'center',
    },
    loaderMoreData:{
        marginVertical: 16,
        alignItems: 'center',
    }

});