import React, { Component } from 'react';
import {
	StyleSheet,
	View,
    Text,
    Image
} from 'react-native';



export default class StarRating extends Component {
	render() {
		return (
			<Image
 style={styles.image}
 source={require('../assets/img/rate_new.png')}
/>
		);
	}
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    image: {
     width: 25,
     height: 25
    }
   });