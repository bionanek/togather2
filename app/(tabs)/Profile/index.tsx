import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Profile" }} />
      <Text>Fookin Profile page innit</Text>
    </View>
  );
}
