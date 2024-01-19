import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import EventList from "../events/eventList/EventList";

type ContentFilterProps = {
  initialCategory?: string;
  categories: string[];
};

export default function ContentFilter({
  initialCategory,
  categories,
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
        {<EventList eventIds={[1, 2, 3]} />}
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
