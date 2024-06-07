import { Colors } from '@constants'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

type ButtonConfig = {
	bgColor: string
	textColor: string
	callToAction: string
}

type Props = {
	onPress: () => void
	type: 'join' | 'check-participants'
}

const CTAButton: React.FC<Props> = ({ onPress, type }: Props) => {
	const buttonConfig: ButtonConfig =
		type === 'join'
			? {
					bgColor: Colors.Accent,
					textColor: 'white',
					callToAction: 'I want to join this event'
				}
			: {
					bgColor: Colors.AccentBackground,
					textColor: 'black',
					callToAction: 'Check out other participants'
				}

	return (
		<TouchableHighlight
			style={[
				styles.joinButtonContainer,
				{
					backgroundColor: buttonConfig.bgColor
				}
			]}
			onPress={onPress}
			underlayColor={Colors.DarkerAccent}
		>
			<Text style={[styles.joinButtonText, { color: buttonConfig.textColor }]}>{buttonConfig.callToAction}</Text>
		</TouchableHighlight>
	)
}

export { CTAButton }

const styles = StyleSheet.create({
	joinButtonContainer: {
		alignSelf: 'center',
		padding: 20,
		width: '100%',
		marginTop: 30,
		borderRadius: 12
	},
	joinButtonText: {
		color: 'white',
		fontWeight: '600',
		textAlign: 'center'
	}
})
