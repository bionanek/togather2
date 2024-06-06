import CTAButton from '@event/components/CTAButton'
import { EventMetadataPanel } from '@event/components/EventMetadataPanel'
import { TopBar } from '@event/components/TopBar'
import UserProfileEventTile from '@event/components/UserProfileEventTile'
import { User } from '@event/types/User'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

import EventLocation from './components/EventLocation'

// TODO: use @EventPageProps later, when implementing navigation and passing id from the list
type EventPageProps = {
	eventId: number
}
type EventData = {
	title: string
	description: string
	noOfParticipants: number
	distanceFromUser: number
	date: string
}
const eventData: EventData = {
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


const usersAvatarsMock = [
  'https://s3-alpha-sig.figma.com/img/30b9/40a6/27dca9d0eb5704ffc2fb2d5c8aa7909e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOwz7oi1cItoGTEUngIRX~yldVqlXOXve5Bh7ASUphoyshnacVMqi6nKvHcFpflB9rWvr~rn5~F0BhBTSI4lYNFZip1f~YJvEqi0LzfLSkngy6C1ro2ChtW-7onnTdD00ge6Qvzg4IxVuwfQ0kZoTtGUqfDBFXIL4UcNU60z7bwD4ORMxlap0eCncI8XEeO1HIYsCrfT-bZmJn2UKca7ZZMmaFwQ7RG1aJjCybuISINAcZPvamDuvdAGwo0MjpNlCKaxV8c2yzm4ReoUVpxp3De4q9bYzjZjKGAw2xvQoz1OkpfO1VPB6W1I3Qbq5sb5CHKTU6fMFMCGZy6zAghqzA__',
  'https://s3-alpha-sig.figma.com/img/9773/1781/9bd81f9740aeb94a2b5a33dcc578550e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwOTlhMbwDH8Ov18SfwbONSRbJp5SvulRcEiCbRlMuH8T6RIZCc8zx6vHXtA8vyUkiodQjNeBC5wRYAZTX1YPruRq8J9Z3QLZ3p3hoR88nDN8KeXB7lLSrYx1pgLQoGgwmbF5oQXH7v8FL9WKASFLc2dNsCaEmpExGfPuOb8Kg29hjxGBtUOA7IOTkQ9j4Emz~0Oh61yvt0bXm7m89oGyoMiI-QupHslE~PdIBmKIsAQZJB4VdhOyF7IzeHZcYhXtfsPiD891URh67xJTSUWYFejoXKxiR0OHc46CLsa-IxFxW-8AWjoWElwKQNzJDyOhcJf6cAKV8O0cE~M1CXVTg__',
  'https://s3-alpha-sig.figma.com/img/fdb2/67bd/f72c1e57edd07a38c95e9d0d9feb4c8d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKVRYJdSibjW1-T8CVZ92VZuwx4W-nMpTSScKl1gVzXR88AjRTeN3TXBypNTHmrJt5dCco4x0SvF1Wov8P7zzIDJG0Iahvh2O9IbxXq19TRg0LqU14LAg5ZGR1NpHFyKrl9~6PWdLpc53mnsVHzdJnVEBL6IOMdf~pM-9lg3AiQ1Dql-F5GbiHd1zqG-knBc3l0A-BfX~jhP7x5ZheQMp11KWJQCvJYb1mVJkapyYyAMpqO8MYecnkqvT4yFdJXoAjnKWZlu6XgaK0SeXq1CygXUZH1o2Wvmh-wa3UMv29VDBWQrMBCoGYctaVZMVAr7ml53IA2F5phcDFCRxbiJ1g__',
  'https://s3-alpha-sig.figma.com/img/209f/54c9/d93369696573dd2d7a43d0048947eb01?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMIC4jspnpKNM2d-g5lwyNY4wIPTPMDohW-y2VImvt0ec9ZqVfXq7BFWu4CC2QjCdFOstEuCuM8xh94iwBcJo4jxba~NKwKBZkOBEo3dCz0w9lFUs1NiW1fDagFzhGIJ5TAjY7ZYC~c2yJeTmSFPpldxN-r-Ce7NB1V90xKb-eqzT7q0iyLAioOv3i9Mya5K~KBoHbWaFVO~4qTgktWeUTcNnUSGn-kfzqcdVMrC-c0J5uls9Uc8toGgQAV-LhYJlV6uIIT5WTV9fg49NgAq~5~wCweqo0JyRx~0F3Qhoj10KexvX525EfNP-4~sqsrwiHLDLQHksMjPI3wbZlWuqQ__'
]

export default function EventPage() {
	const [isFavourite, setIsFavourite] = useState<boolean>(false)

	const handleOnFavouritePress = () => {
		setIsFavourite(!isFavourite)
	}

	const onBackPress = () => console.log('back pressed')
	const onJoinPress = () => console.log('join press')
	const onCheckoutParticipantsPress = () => console.log('checkout participants press')

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
        avatars={usersAvatarsMock}
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
		fontFamily: 'Figtree' // TODO: add this font
	}
})
