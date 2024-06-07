import { Colors } from '@constants'
import CategoryBasketballIcon from '@icons/CategoryIcons/category-basketball-icon.svg'
import HeartIcon from '@icons/OtherIcons/heart-icon.svg'
import LeftArrowIcon from '@icons/OtherIcons/left-arrow-icon.svg'
import { Icons } from '@types'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

type CustomButtonProps = {
	onPress: () => void
	enabled?: boolean
	labelText?: string

	/** Name of the icon you want to use. See {@link ButtonIcons} */
	icon?: Icons
	iconColor?: string
	shape?: 'circle' | 'square'
	buttonColor?: string
}

const DEFAULT_ICON_COLOR = 'black'

/**
 * This component allows you to create a custom button with an icon and a label.
 *
 * You can specify the icon using values from {@link ButtonIcons} type.
 */
export function CustomIconButton({
	onPress,
	enabled: disabled,
	icon,
	labelText,
	shape,
	iconColor,
	buttonColor
}: CustomButtonProps) {
	const getChosenIcon = (icon: Icons) => {
		switch (icon) {
			case 'left-arrow':
				return <LeftArrowIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
			case 'heart':
				return <HeartIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
			default:
				return <CategoryBasketballIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
		}
	}

	return (
		<TouchableHighlight
			disabled={disabled}
			onPress={disabled ? undefined : onPress}
			underlayColor={Colors.DarkerAccentBackground}
			style={[styles.buttonContainer, buttonColor ? { backgroundColor: buttonColor } : null]}
		>
			<View style={styles.buttonContentWrapper}>
				{icon ? getChosenIcon(icon) : null}
				{labelText ? <Text style={{ marginLeft: icon ? 5 : 0, fontWeight: '600' }}>{labelText}</Text> : null}
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 50,
		backgroundColor: Colors.AccentBackground,
		padding: 15
	},
	buttonContentWrapper: {
		flexDirection: 'row'
	}
})
