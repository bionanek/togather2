import ProfilePageIcon from '@icons/NavigationIcons/profile-page-icon.svg'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function UserGreetingHeader() {
	return (
		<View style={styles.userContainer}>
			<View style={styles.smallerUserContainer}>
				<Text style={styles.userGreeting}>Hello</Text>
				<Text style={styles.username}>Mr lil Shit</Text>
			</View>
			<ProfilePageIcon color={'#FF00FF'} />
		</View>
	)
}

const styles = StyleSheet.create({
	userContainer: {
		flexDirection: 'row'
	},
	smallerUserContainer: {},
	userGreeting: {
		color: '#ff8d02'
	},
	username: {
		color: '#000000'
	},
	userIcon: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	}
})
