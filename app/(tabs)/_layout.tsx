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
      <Tabs.Screen
        name="CreateEvent"
        options={{
          tabBarLabel: "Create Event",
          title: "Create Event",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
        }}
      />
    </Tabs>
  );
}
