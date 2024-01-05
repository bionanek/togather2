import React from "react";
import { IconButton, Searchbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <View style={styles.jakubBringJakue}>
        <Text>You wanna test navigating with route parameters? Aight!</Text>
        <Text>
          Pressie pressie them links below. Come on now mate! It's bloody fun,
          innit!{" "}
        </Text>
        <Link href="/Profile/bobOne" style={{ fontWeight: "600" }}>
          Go to user 'bobOne'
        </Link>
        <Link href="/Profile/bobTwo" style={{ fontWeight: "600" }}>
          Go to user 'bobTwo'
        </Link>
      </View>
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
  jakubBringJakue: {},
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
