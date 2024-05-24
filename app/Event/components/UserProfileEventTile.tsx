import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { User } from "@event/types/User";
import StarIcon from "@icons/OtherIcons/star-icon.svg";
import { Colors2G } from "@constants/Colors";
interface UserProfileEventTileProps {
  user: User;
}

/**
 * Simple tile component that displays small circle user image, user name and user rating.
 */
const UserProfileEventTile: React.FC<UserProfileEventTileProps> = ({
  user,
}: UserProfileEventTileProps) => {
  return (
    <View style={styles.userTileContainer}>
      <Image
        style={styles.image}
        source={{
          uri: user.profileImage,
        }}
      />
      <View style={styles.metadata}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{user.rating}</Text>
          <StarIcon color={Colors2G.Accent} width={20} height={13} />
        </View>
      </View>
    </View>
  );
};

export default UserProfileEventTile;

const styles = StyleSheet.create({
  userTileContainer: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  metadata: {
    marginLeft: 10,
    flexDirection: "column",
    marginTop: 3,
  },
  name: {
    fontWeight: "600",
    fontSize: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 13,
    lineHeight: 25,
  },
});
