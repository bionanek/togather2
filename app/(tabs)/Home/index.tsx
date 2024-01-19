import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import Sport from "./sport";
import Projects from "./projects";
import UserGreetingHeader from "../../components/userGreetingHeader/UserGreetingHeader";
import DynamicComponentSwitcher, {
  DynamicComponentSwitcherTabType,
} from "../../components/dynamicComponentSwitcher/dynamicComponentSwitcher";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const tabSelectorItems: DynamicComponentSwitcherTabType[] = [
    { title: "Sport", component: <Sport /> },
    { title: "Projects", component: <Projects /> },
  ];

  return (
    <View style={styles.pageContainer}>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <View>
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
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {/* TODO: add search bar icon */}
      {tabSelectorItems?.length > 0 ? (
        <DynamicComponentSwitcher tabSelectorItems={tabSelectorItems} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    margin: 20,
    flexDirection: "column",
  },
});
