import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface UserProfileEventTileProps {
  // Define the props for your component here
}

const UserProfileEventTile: React.FC<
  UserProfileEventTileProps
> = ({}: UserProfileEventTileProps) => {
  // Implement your component logic here

  return (
    <View style={styles.userTile}>
      <Text>User tile</Text>
    </View>
  );
};

export default UserProfileEventTile;

const styles = StyleSheet.create({
  userTile: {
    marginVertical: 30,
  },
});
