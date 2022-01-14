import React, { Component } from 'react';
import { StyleSheet, Button, ScrollView, ActivityIndicator, View, Text } from 'react-native';

class ProfileScreen extends Component {

	constructor() {
		super();
		this.state = {
			isLoading: false,
		};
	}

	componentDidMount() {

	}


	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.preloader}>
					<ActivityIndicator size="large" color="#9E9E9E"/>
				</View>
			)
		}
		return (
			<ScrollView>
				<Text style={styles.text}>Profile Screen</Text>
				<Button title="LandingNavigator" 
					onPress={ () => {this.props.navigation.navigate('LandingNavigator')} }/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  text: {
    fontSize: 21,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {

  }
})


export default ProfileScreen;