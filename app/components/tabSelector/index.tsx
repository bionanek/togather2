import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function DynamicComponentSwitcher({ tabSelectorItems }) {
  const [selectedTitle, setSelectedTitle] = useState(tabSelectorItems[0].title);

  const selectComponent = (title) => {
    setSelectedTitle(title);
  };

  return (
    <View>
      <View style={styles.tabSelector}>
        {tabSelectorItems.map((item) => (
          <Button
            key={item.title}
            title={item.title}
            onPress={() => selectComponent(item.title)}
          />
        ))}
      </View>

      <View style={styles.tabContent}>
        <Text>{selectedTitle}</Text>
        {
          tabSelectorItems.find((item) => item.title === selectedTitle)
            ?.component
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabSelector: {},
  tabContent: {},
});
