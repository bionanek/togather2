import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EventLayout() {
  return <Stack />;
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
