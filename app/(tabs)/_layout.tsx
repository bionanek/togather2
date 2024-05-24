import { Tabs } from "expo-router";
import HomePageIcon from "@icons/NavigationIcons/home-page-icon.svg";
import ExplorePageIcon from "@icons/NavigationIcons/explore-page-icon.svg";
import CreateEventPageIcon from "@icons/NavigationIcons/create-event-page-icon.svg";
import ProfilePageIcon from "@icons/NavigationIcons/profile-page-icon.svg";
import NotificationsPageIcon from "@icons/NavigationIcons/notifications-page-icon.svg";
import { Colors2G } from "@constants/Colors";

export default function TabsLayout() {
  const iconColor = (focused: boolean) =>
    focused ? Colors2G.Accent : "#F2F2F2";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black", margin: 10, borderRadius: 12 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomePageIcon color={iconColor(focused)} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarLabel: "Explore",
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <ExplorePageIcon color={iconColor(focused)} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreateEvent"
        options={{
          tabBarLabel: "Create Event",
          title: "Create Event",
          tabBarIcon: ({ focused }) => (
            <CreateEventPageIcon color={iconColor(focused)} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <NotificationsPageIcon color={iconColor(focused)} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfilePageIcon color={iconColor(focused)} />
          ),
        }}
      />
    </Tabs>
  );
}
