import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(Home)/index"
        options={{ headerShown: true, headerTitle: "Home Page", title: "Home" }}
      />
      <Tabs.Screen
        name="(Discover)/index"
        options={{
          headerShown: true,
          headerTitle: "Discover Page",
          title: "Discover",
        }}
      />
    </Tabs>
  );
}
