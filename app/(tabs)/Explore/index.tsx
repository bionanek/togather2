import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Explore" }} />
      <Text>Explore</Text>
    </View>
  );
}
