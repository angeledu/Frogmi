/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useCoords } from '../hooks/useCoords';
import { styles } from '../theme/appTheme';

export const MapsScreen = () => {

   const storesAct  = useCoords();

    return (
        <View style={ styles.pantallaCompleta}>
             <MapView
                style={ styles.pantallaCompleta}
                initialRegion={{
                    latitude: -33.41991,
                    longitude: -70.585991,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} >
                {storesAct.map((marker) => (
                    <Marker
                    image={ require('../assets/FrogMiMarker.png')}
                    key={marker.id}
                    coordinate={{
                        latitude: marker.attributes.coordinates.latitude,
                        longitude: marker.attributes.coordinates.longitude,
                    }}
                    title={marker.attributes.name}
                    description={marker.attributes.full_address}
                    />
                ))}
        </MapView>
        </View>
    )
}
