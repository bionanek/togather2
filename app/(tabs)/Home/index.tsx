import React from "react";
import { IconButton, Searchbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.page}>
      <View style={styles.userContainer}>
        <View style={styles.smallerUserContainer}>
          <Text style={styles.userGreeting}>Hello</Text>
          <Text style={styles.username}>Mr lil Shit</Text>
        </View>
        <IconButton
          icon="camera"
          size={20}
          style={styles.userIcon}
          onPress={() => console.log("Pressed")}
        ></IconButton>
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    margin: 20,
    flexDirection: "column",
  },
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
