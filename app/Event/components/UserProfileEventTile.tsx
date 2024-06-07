import { Colors } from '@constants'
import StarIcon from '@icons/OtherIcons/star-icon.svg'
import { User } from '@types'
import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface UserProfileEventTileProps {
	user: User
}

/**
 * Simple tile component that displays small circle user image, user name and user rating.
 */
export const UserProfileEventTile: FC<UserProfileEventTileProps> = ({ user }: UserProfileEventTileProps) => {
	return (
		<View style={styles.userTileContainer}>
			<Image
				style={styles.image}
				source={{
					uri: user.profileImage
				}}
			/>
			<View style={styles.metadata}>
				<Text style={styles.name}>{user.name}</Text>
				<View style={styles.ratingContainer}>
					<Text style={styles.rating}>{user.rating}</Text>
					<StarIcon
						color={Colors.Accent}
						width={20}
						height={13}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	userTileContainer: {
		marginVertical: 30,
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 20
	},
	metadata: {
		marginLeft: 10,
		flexDirection: 'column',
		marginTop: 3
	},
	name: {
		fontWeight: '600',
		fontSize: 15
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	rating: {
		fontSize: 13,
		lineHeight: 25
	}
})
