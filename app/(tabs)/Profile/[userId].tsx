import { Stack, useLocalSearchParams, Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function UserDetails() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: `User ${userId}` }} />
      <Text>user is {userId}</Text>
      <Link href="/Profile" asChild>
        <Pressable>
          <Text>Back to main profile page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
