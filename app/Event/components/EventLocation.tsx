import { StyleSheet, Text, View } from 'react-native'

type EventLocationProps = {}
const EventLocation: React.FC<EventLocationProps> = () => {
	return (
		<View style={styles.locationContainer}>
			<Text style={styles.locationTitle}>Location</Text>
			<View style={styles.mapContainer}>
				<Text style={{ color: 'white', fontSize: 25, fontWeight: '600' }}>This is MAP</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	locationContainer: {
		marginTop: 30,
		marginBottom: 30,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	locationTitle: {
		fontWeight: '600',
		marginBottom: 10
	},
	mapContainer: {
		width: '100%',
		height: 200,
		backgroundColor: 'black',
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default EventLocation
