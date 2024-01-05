import React from "react";
import { Text } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Text>Fookin Home page innit</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </>
  );
}
