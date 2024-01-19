import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePageIcon from "../../../assets/NavigationIcons/profile-page-icon.svg";
import { useTheme } from "react-native-paper";

{
  /* TODO: Move colours externally (theme isn't detecting colours atm) */
}

export default function UserGreetingHeader() {
  const theme = useTheme();

  return (
    <View style={styles.userContainer}>
      <View style={styles.smallerUserContainer}>
        <Text style={styles.userGreeting}>Hello</Text>
        <Text style={styles.username}>Mr lil Shit</Text>
      </View>
      <ProfilePageIcon color={theme.colors.primary} />
      <ProfilePageIcon color={theme.colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
  },
  smallerUserContainer: {},
  userGreeting: {
    color: "#ff8d02",
  },
  username: {
    color: "#000000",
  },
  userIcon: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
