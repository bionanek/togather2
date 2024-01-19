import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import UserGreetingHeader from "../../components/userGreetingHeader/UserGreetingHeader";
import ContentFilter from "../../components/contentFilter/ContentFilter";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  //add type restrictions for this
  const filterCategories: string[] = ["Sport", "Projects"];

  return (
    <View style={styles.pageContainer}>
      <Stack.Screen options={{ headerShown: false, title: "Home" }} />
      <UserGreetingHeader />
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {/* TODO: add search bar icon */}
      {filterCategories?.length > 0 ? (
        <ContentFilter categories={filterCategories} initialCategory="" />
      ) : null}

      <View style={styles.routeParamNav}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    //add safe space and padding in generic place for whole app instead
    margin: 30,
    marginTop: 70,
    flexDirection: "column",
  },
  routeParamNav: {
    marginTop: 30,
  }
});
