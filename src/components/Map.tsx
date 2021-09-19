/* eslint-disable prettier/prettier */
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export const Map = () => {
    return (
        <>
            <MapView
                style={{ flex:1}}
                initialRegion={{
                latitude: -33.4476666,
                longitude: -70.6332435,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                <Marker
                image={ require('../assets/FrogMiMarker.png')}
                coordinate={{
                    latitude: -33.4476666,
                    longitude: -70.6332435,
                }}
                title='titulo'
                description='prueba marcador'
                />
            </MapView>
        </>
    )
}
