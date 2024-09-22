import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { useDriverStore, useLocationStore } from '@/store';
import { calculateRegion } from '@/lib/map';

const Map = () => {
    const { userLongitude, userLatitude, destinationLatitude, destinationLongitude } = useLocationStore();
    const { selectedDriver, setDrivers } = useDriverStore();

    const region = calculateRegion({
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude,
    });

    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            className="w-full h-full rounded-2xl"
            tintColor="black"
            mapType="mutedStandard"
            showsPointsOfInterest={false}
            showsUserLocation={true}
            // initialRegion={region}
            userInterfaceStyle="light">
            <Text>Map</Text>
        </MapView>
    );
};

export default Map;
