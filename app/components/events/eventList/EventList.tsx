import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import EventTile from "../eventTile/EventTile";

type EventListProps = {
  selectedCategory: string;
};

export default function EventList({ selectedCategory }: EventListProps) {
  const [eventIds, setEventIds] = useState([]);

  useEffect(() => {
    if (selectedCategory == "Sport") {
      setEventIds([1, 4]);
    } else if (selectedCategory == "Projects") {
      setEventIds([2, 5]);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.userContainer}>
      {eventIds.map((eventId) => (
        <EventTile key={eventId} eventId={eventId} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {},
});
