import { Tabs } from "expo-router";
import HomePageIcon from "../../assets/NavigationIcons/home-page-icon.svg";
import ExplorePageIcon from "../../assets/NavigationIcons/explore-page-icon.svg";
import CreateEventPageIcon from "../../assets/NavigationIcons/create-event-page-icon.svg";
import ProfilePageIcon from "../../assets/NavigationIcons/profile-page-icon.svg";
import NotificationsPageIcon from "../../assets/NavigationIcons/notifications-page-icon.svg";

export default function TabsLayout() {
  const iconColor = (focused: boolean) => (focused ? "#FD5A26" : "#F2F2F2");
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
