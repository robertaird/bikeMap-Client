import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import mapIcon from '../assets/icons/mapIcon.png'; 


const ProfileRoutes = ({routes, showTripLocation, navigate}) => {  
  const goToMap = () => {
    navigate('Map');
  };
  return routes.map((trip, i) => (
    <View style={styles.container} key={`trip${i}`}>
      <View style={styles.container} >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{trip.route_name}</Text>
          <Text style={styles.subtitle}>Current Rating: {trip.current_rating}</Text>
          <Text style={styles.startingAddress}>12345 N.Starting Address</Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.imageContainerText}>{trip.type}</Text>
          <TouchableOpacity
            onPress={() => showTripLocation(trip, goToMap)}
          >
            <Image source={mapIcon} style={styles.imageStyle} />
          </TouchableOpacity>
          <Text style={styles.favoriteCount}>{trip.favorite_count}</Text>
        </View>
      </View>
    </View>
));
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  backgroundColor: 'grey',
  height: 150,
  borderWidth: 2,
},
textContainer: {
  flex: 3,
  backgroundColor: 'grey',
  height: 148,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  marginTop: 30,
},
subtitle: {
  marginTop: 10,
  fontSize: 15,
  color: 'white',
  textAlign: 'center',
},
imageContainer: {
  flex: 1,
  backgroundColor: 'grey',
  height: 148,
  width: 50,
},
imageContainerText: {
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 30,
},
imageStyle: {
  alignSelf: 'center',
  marginTop: 5,
  height: 75,
  width: 75,
},
favoriteCount: {
  marginTop: 2,
  fontSize: 10,
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
},
startingAddress: {
  marginTop: 10,
  fontSize: 15,
  color: 'white',
  textAlign: 'center',
},
});

ProfileRoutes.propTypes = {
  navigate: PropTypes.func.isRequired,
  showTripLocation: PropTypes.func.isRequired, 
  //eslint-disable-next-line
  routes: PropTypes.array.isRequired,
};

export default ProfileRoutes;
