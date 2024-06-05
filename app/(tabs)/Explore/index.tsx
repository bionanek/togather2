import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function Explore() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: 'Explore' }} />
			<Text>Explore</Text>
		</View>
	)
}
