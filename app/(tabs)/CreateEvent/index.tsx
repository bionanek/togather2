import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function CreateEvent() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: 'Create Event' }} />
			<Text>Fookin CreateEvent page innit</Text>
		</View>
	)
}
