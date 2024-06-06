import { Colors2G } from '@constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Image, FlexStyle } from 'react-native'
import RightArrowIcon from '@icons/OtherIcons/right-arrow-icon.svg'

type ButtonConfig = {
	bgColor: string
	textColor: string
	callToAction: string
  joinersAvatars?: string[]
  justifyContent: FlexStyle['justifyContent']

}

type Props = {
	onPress: () => void
	type: 'join' | 'check-participants'
  avatars?: string[]
}

const CTAButton: React.FC<Props> = ({ onPress, type, avatars }: Props) => {
	const buttonConfig: ButtonConfig =
		type === 'join'
			? {
					bgColor: Colors2G.Accent,
					textColor: 'white',
					callToAction: 'I want to join this event',
          justifyContent: 'center'
				}
			: {
					bgColor: Colors2G.AccentBackground,
					textColor: 'black',
					callToAction: 'Check out other participants',
          joinersAvatars: avatars,
          justifyContent: 'flex-start'

				}

	return (
		<TouchableHighlight
			style={[
				styles.joinButtonContainer,
				{
					backgroundColor: buttonConfig.bgColor,
				}
			]}
			onPress={onPress}
			underlayColor={Colors2G.DarkerAccent}
		>
      <View style={[styles.ctaContainer, {justifyContent: buttonConfig.justifyContent}]}>
        {type === 'check-participants' ? <UsersAvatars avatars={avatars} /> : null}
        <Text style={[styles.joinButtonText, { color: buttonConfig.textColor }]}>{buttonConfig.callToAction}</Text>
        {type === 'check-participants' ?  (
          <View style={styles.iconContainer}>
            <RightArrowCircle />
          </View>
        ) : null}
      </View>
		</TouchableHighlight>
	)
}

export default CTAButton


const UsersAvatars = ({ avatars }: { avatars?: string[] }) => {
  return (
  <View style={styles.avatarsRow}>
    { avatars?.map((avatar, index) => 
      <Image
        key={index}
				style={[styles.avatar, { marginLeft: index === 0 ? 0 : -15 }]}
				source={{
					uri: avatar
				}}
    />)}
  </View>)
}

const RightArrowCircle = () => (
  <View style={styles.rightArrowCircle}>
    <RightArrowIcon color={'white'}  width={11} height={11} />
  </View>
)

const styles = StyleSheet.create({
  iconContainer: { alignItems: 'flex-end', flex: 1},
  rightArrowCircle: { borderRadius: 50, backgroundColor: Colors2G.Accent, padding: 7},
  ctaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarsRow: {
    flexDirection: 'row',
    
    marginRight: 10
  },
  avatar: {
		width: 30,
		height: 30,
		borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white'
	},
	joinButtonContainer: {
		alignSelf: 'center',
		padding: 20,
    paddingHorizontal: 10,
		width: '100%',
		marginTop: 30,
		borderRadius: 12
	},
	joinButtonText: {
		color: 'white',
    fontSize: 12,
		fontWeight: '600',
		textAlign: 'center',
	}
})
