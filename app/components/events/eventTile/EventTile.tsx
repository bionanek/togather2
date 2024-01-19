import React from "react";
import { StyleSheet, Text, View } from "react-native";

type EventTileProps = {
  eventId: number;
};

export default function EventTile({ eventId }: EventTileProps) {
  return (
    <View style={styles.userContainer}>
      <Text>Hello {eventId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {},
});
