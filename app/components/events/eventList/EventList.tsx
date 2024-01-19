import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EventTile from "../eventTile/EventTile";

type EventListProps = {
  eventIds: number[];
};

export default function EventList({ eventIds }: EventListProps) {
  return (
    <View style={styles.userContainer}>
      {eventIds.map((eventId) => (
        <EventTile eventId={eventId} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {},
});
