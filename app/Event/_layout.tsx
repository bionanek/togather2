import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function EventLayout() {
	return <Stack />
}

const styles = StyleSheet.create({
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// marginTop: 40,
		marginBottom: 20,
		marginHorizontal: 20
	}
})
