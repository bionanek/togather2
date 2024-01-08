import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import UserGreetingHeader from "../../components/userGreetingHeader";
import DynamicComponentSwitcher from "../../components/tabSelector";
import Sport from "./sport";
import Projects from "./projects";

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const tabSelectorItems = [
    { title: "Sport", component: <Sport /> },
    { title: "Projects", component: <Projects /> },
  ];

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
      <UserGreetingHeader />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* TODO: add search bar icon */}
      <DynamicComponentSwitcher tabSelectorItems={tabSelectorItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    margin: 20,
    flexDirection: "column",
  },
  jakubBringJakue: {},
});
