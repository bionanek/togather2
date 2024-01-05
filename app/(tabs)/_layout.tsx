import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{ tabBarLabel: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarLabel: "Explore",
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
