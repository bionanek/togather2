import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function Notifications() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: 'Notifications' }} />
			<Text>Fookin Notifications page innit</Text>
		</View>
	)
}
