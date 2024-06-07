import { CustomIconButton } from '@components'
import { Colors } from '@constants'
import { StyleSheet, View } from 'react-native'

type TopBarProps = {
	eventCategory: string
	isFavourite: boolean
	onFavouritePress: () => void
	onBackButtonPress: () => void
	onCategoryButtonPress?: () => void
}

/**
 * TopBar component for the EventPage.
 *
 * Contains a back button, category button and favourite button spread across the screen using `justifyContent: "space-between"`.
 * @param {object} props - Component props
 */
export const TopBar: React.FC<TopBarProps> = ({
	eventCategory,
	isFavourite,
	onFavouritePress,
	onBackButtonPress
}: TopBarProps) => {
	return (
		<View style={styles.topBar}>
			<CustomIconButton
				onPress={onBackButtonPress}
				icon="left-arrow"
			/>
			<CustomIconButton
				onPress={() => null}
				icon="basketball"
				iconColor={Colors.Accent}
				labelText="Sport"
			/>
			{/* TODO: implement MobX store for event categories and create a
    useSelectedCategory hook or smth
     that would return icon and name,
    that would be then passed to the CustomIconButton in props */}
			<CustomIconButton
				onPress={onFavouritePress}
				icon="heart"
				iconColor={isFavourite ? 'white' : 'black'}
				buttonColor={isFavourite ? Colors.Accent : Colors.AccentBackground}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 50,
		marginBottom: 20
	}
})
