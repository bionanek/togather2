import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import EventList from "../events/eventList/EventList";

type ContentFilterProps = {
  categories: string[];
  initialCategory?: string;
};

export default function ContentFilter({
  categories,
  initialCategory,
}: ContentFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  return (
    <View>
      <View style={styles.tabSelector}>
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            onPress={() => setSelectedCategory(category)}
          />
        ))}
      </View>

      <View style={styles.tabContent}>
        <Text>selected category: {selectedCategory}</Text>
        {<EventList selectedCategory={selectedCategory} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //rename these
  tabSelector: {
    flexDirection: "row",
  },
  tabContent: {},
});
