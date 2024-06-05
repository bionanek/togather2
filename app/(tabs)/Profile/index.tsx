import { Pressable, Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function Profile() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: 'Profile' }} />
			<Text>Fookin Profile page innit</Text>
			<Link
				href="/Home"
				asChild
			>
				<Pressable>
					<Text style={{ fontWeight: '600' }}>Back to main main page</Text>
				</Pressable>
			</Link>
		</View>
	)
}
