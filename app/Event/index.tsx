import { CTAButton, EventLocation, EventMetadataPanel, UserProfileEventTile } from '@event/components'
import { TopBar } from '@event/components/TopBar'
import { Event, User } from '@types'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

// TODO: use @EventPageProps later, when implementing navigation and passing id from the list
// type EventPageProps = {
// 	eventId: number
// }

const eventData: Event = {
	title: 'Just chilling with bunch of randoms for fun',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut suscipit ante, in posuere lorem. Pellentesque pellentesque metus velit, a rhoncus enim varius vitae. Pellentesque a feugiat tortor. Phasellus ornare nisi sada, porta justo ac, faucibus ipsum. Nam tempor varius odio id tempor. Suspendisse potenti',
	noOfParticipants: 4,
	distanceFromUser: 12,
	date: '17.10'
}

const userData: User = {
	name: 'Amelia Kowalska',
	profileImage:
		'https://s3-alpha-sig.figma.com/img/30b9/40a6/27dca9d0eb5704ffc2fb2d5c8aa7909e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOwz7oi1cItoGTEUngIRX~yldVqlXOXve5Bh7ASUphoyshnacVMqi6nKvHcFpflB9rWvr~rn5~F0BhBTSI4lYNFZip1f~YJvEqi0LzfLSkngy6C1ro2ChtW-7onnTdD00ge6Qvzg4IxVuwfQ0kZoTtGUqfDBFXIL4UcNU60z7bwD4ORMxlap0eCncI8XEeO1HIYsCrfT-bZmJn2UKca7ZZMmaFwQ7RG1aJjCybuISINAcZPvamDuvdAGwo0MjpNlCKaxV8c2yzm4ReoUVpxp3De4q9bYzjZjKGAw2xvQoz1OkpfO1VPB6W1I3Qbq5sb5CHKTU6fMFMCGZy6zAghqzA__',
	rating: 4.5
}

export default function EventPage() {
	const [isFavourite, setIsFavourite] = useState<boolean>(false)

	const handleOnFavouritePress = () => {
		setIsFavourite(!isFavourite)
	}

	const onBackPress = () => null
	const onJoinPress = () => null
	const onCheckoutParticipantsPress = () => null

	return (
		<ScrollView
			style={styles.pageContainer}
			showsVerticalScrollIndicator={false}
		>
			<StatusBar style="dark" />
			<Stack.Screen options={{ headerShown: false }} />
			<TopBar
				eventCategory="Sport"
				isFavourite={isFavourite}
				onFavouritePress={handleOnFavouritePress}
				onBackButtonPress={onBackPress}
			/>

			<View>
				<Text
					numberOfLines={3}
					style={styles.eventTitle}
				>
					{eventData.title}
				</Text>
			</View>
			<UserProfileEventTile user={userData} />

			<EventMetadataPanel
				date={eventData.date}
				distance={eventData.distanceFromUser}
				participants={eventData.noOfParticipants}
			/>

			<CTAButton
				onPress={onJoinPress}
				type="join"
			/>
			<CTAButton
				onPress={onCheckoutParticipantsPress}
				type="check-participants"
			/>

			<View style={styles.descriptionContainer}>
				<Text style={styles.descriptionTitle}>Description</Text>
				<Text>{eventData.description}</Text>
			</View>
			<EventLocation />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	pageContainer: { marginHorizontal: 28, marginTop: 10 },

	eventTitle: {
		fontWeight: '600',
		fontSize: 21
	},

	descriptionContainer: {
		marginTop: 30,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	descriptionTitle: {
		fontWeight: '600',
		fontSize: 20,
		marginBottom: 10,
		// TODO: add this font
		fontFamily: 'Figtree'
	}
})
