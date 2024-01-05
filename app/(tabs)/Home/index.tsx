import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <Text>Fookin Home page innit :)</Text>
    </View>
  );
}
