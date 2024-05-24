import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CalendarIcon from "@icons/OtherIcons/calendar-icon.svg";
import LocationIcon from "@icons/OtherIcons/location-icon.svg";
import ProfileIcon from "@icons/OtherIcons/profile-icon.svg";
import { Colors } from "@constants/Colors";

type EventMetadataPanelProps = {
  date: string;
  participants: number;
  distance: number;
};

export default function EventMetadataPanel({
  date,
  participants,
  distance,
}: EventMetadataPanelProps) {
  return (
    <View style={styles.metadataRow}>
      <View style={styles.metadataItem}>
        {/* TODO: implement MobX store for event details and read date, num of participants and distance from it or pass this data as a prop */}
        <CalendarIcon color={Colors.Placeholder} />
        <Text style={styles.metadataItemText}>{date}</Text>
      </View>
      <View style={styles.metadataItem}>
        <ProfileIcon color={Colors.Placeholder} />
        <Text style={styles.metadataItemText}>{participants}</Text>
      </View>
      <View style={styles.metadataItem}>
        <LocationIcon color={Colors.Placeholder} />
        <Text style={styles.metadataItemText}>{distance} km</Text>
        {/* TODO: Distance should be checked and converted if necessary  */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  metadataRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  metadataItem: {
    marginHorizontal: 30,
    alignItems: "center",
  },
  metadataItemText: {
    marginTop: 10,
    fontWeight: "600",
  },
});
