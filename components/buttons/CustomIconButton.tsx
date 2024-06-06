import { Colors2G } from '@constants/Colors'
import CategoryBasketballIcon from '@icons/CategoryIcons/category-basketball-icon.svg'
import HeartIcon from '@icons/OtherIcons/heart-icon.svg'
import LeftArrowIcon from '@icons/OtherIcons/left-arrow-icon.svg'
import { StyleSheet, Text, TextStyle, TouchableHighlight, View } from 'react-native'

type ButtonIcons = 'plus' | 'left-arrow' | 'heart' | 'basketball'

type CustomButtonProps = {
	onPress: () => void
	enabled?: boolean
	labelText?: string

	/** Name of the icon you want to use. See {@link ButtonIcons} */
	icon?: ButtonIcons
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
	const getChosenIcon = (icon: ButtonIcons) => {
		switch (icon) {
			case 'left-arrow':
				return <LeftArrowIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
			case 'heart':
				return <HeartIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
			default:
				return <CategoryBasketballIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
		}
	}

  const buttonLabelStyles: TextStyle = { marginLeft: icon ? 5 : 0, fontWeight: '600' }
	return (
		<TouchableHighlight
			disabled={disabled}
			onPress={disabled ? undefined : onPress}
			underlayColor={Colors2G.DarkerAccentBackground}
			style={[styles.buttonContainer, buttonColor ? { backgroundColor: buttonColor } : null]}
		>
			<View style={styles.buttonContentWrapper}>
				{icon ? getChosenIcon(icon) : null}
				{labelText ? <Text style={buttonLabelStyles}>{labelText}</Text> : null}
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 50,
		backgroundColor: Colors2G.AccentBackground,
		padding: 15
	},
	buttonContentWrapper: {
		flexDirection: 'row'
	},
})
