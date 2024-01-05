import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <View style={{ marginBottom: 20 }}>
        <Text>Fookin Home page innit :)</Text>
      </View>
      <Text>You wanna test navigating with route parameters? Aight!</Text>
      <Text>
        Pressie pressie them links below. Come on now mate! It's bloody fun,
        innit!{" "}
      </Text>
      <Link href="/Profile/bobOne" style={{ fontWeight: "600" }}>
        Go to user 'bobOne'
      </Link>
      <Link href="/Profile/bobTwo" style={{ fontWeight: "600" }}>
        Go to user 'bobTwo'
      </Link>
    </View>
  );
}
