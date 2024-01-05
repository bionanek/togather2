import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Notifications() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Notifications" }} />
      <Text>Fookin Notifications page innit</Text>
    </View>
  );
}
