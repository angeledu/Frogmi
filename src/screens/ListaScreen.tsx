/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useStores } from '../hooks/useStores';


import { styles, colores } from '../theme/appTheme';


export const ListaScreen = () => {

    const { storesAct, isLoading, isLoadingMore, getMoreStores } = useStores();

    const renderLoader = () => {
        return (
            isLoadingMore ?
            <View style={styles.loaderMoreData}>
                <ActivityIndicator color={colores.primary} size='large' />
            </View> : null
        );
    };

    if (isLoading){
        return(
            <View style={ styles.loaderG}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return(
        <View style={{ flex: 1, marginHorizontal: 10,}}>
            <FlatList 
                data = {storesAct}
                keyExtractor = { (p) => p.attributes.code}
                onEndReachedThreshold={0.5}
                ListFooterComponent= {renderLoader}
                onEndReached = { getMoreStores }
                renderItem = { ({item}) => (
                    <View style={ styles.separationV }>
                         <Text style={styles.storeName}>{ item.attributes.name } | { item.attributes.code}</Text>
                         <Text>{ item.attributes.full_address }</Text>
                    </View> 
                )}

                ItemSeparatorComponent = { () => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}
