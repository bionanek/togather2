import { Colors2G } from '@constants/Colors'
import CalendarIcon from '@icons/OtherIcons/calendar-icon.svg'
import LocationIcon from '@icons/OtherIcons/location-icon.svg'
import ProfileIcon from '@icons/OtherIcons/profile-icon.svg'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type EventMetadataPanelProps = {
	date: string
	participants: number
	distance: number
}

export const EventMetadataPanel = ({ date, participants, distance }: EventMetadataPanelProps) => {
	return (
		<View style={styles.metadataRow}>
			<View style={styles.metadataItem}>
				{/* TODO: implement MobX store for event details and read date, num of participants and distance from it or pass this data as a prop */}
				<CalendarIcon color={Colors2G.Placeholder} />
				<Text style={styles.metadataItemText}>{date}</Text>
			</View>
			<View style={styles.metadataItem}>
				<ProfileIcon color={Colors2G.Placeholder} />
				<Text style={styles.metadataItemText}>{participants}</Text>
			</View>
			<View style={styles.metadataItem}>
				<LocationIcon color={Colors2G.Placeholder} />
				<Text style={styles.metadataItemText}>{distance} km</Text>
				{/* TODO: Distance should be checked and converted if necessary  */}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	metadataRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 5
	},
	metadataItem: {
		marginHorizontal: 30,
		alignItems: 'center'
	},
	metadataItemText: {
		marginTop: 10,
		fontWeight: '600'
	}
})
