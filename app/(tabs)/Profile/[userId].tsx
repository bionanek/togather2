import { Pressable, Text, View } from 'react-native'
import { Link, Stack, useLocalSearchParams } from 'expo-router'

export default function UserDetails() {
	const { userId } = useLocalSearchParams<{ userId: string }>()
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: `User ${userId}` }} />
			<Text>user is {userId}</Text>
			<Link
				href="/Profile"
				asChild
			>
				<Pressable>
					<Text style={{ fontWeight: '600' }}>Back to main profile page</Text>
				</Pressable>
			</Link>
		</View>
	)
}
