import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

type DynamicComponentSwitcherProps = {
  tabSelectorItems: TabSelectorItemType[];
};

export type TabSelectorItemType = {
  title: string;
  component: React.ReactNode;
};

export default function DynamicComponentSwitcher({
  tabSelectorItems,
}: DynamicComponentSwitcherProps) {
  const [selectedTitle, setSelectedTitle] = useState(tabSelectorItems[0].title);

  return (
    <View>
      <View style={styles.tabSelector}>
        {tabSelectorItems.map((item) => (
          <Button
            key={item.title}
            title={item.title}
            onPress={() => setSelectedTitle(item.title)}
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
  tabSelector: {
    flexDirection: "row",
  },
  tabContent: {},
});
