import { Stack } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Colors2G } from "@constants/Colors";
import { EventMetadataPanel } from "@event/components/EventMetadataPanel";
import { TopBar } from "@event/components/TopBar";

// TODO: use @EventPageProps later, when implementing navigation and passing id from the list
type EventPageProps = {
  eventId: number;
};
export default function EventPage() {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const handleOnFavouritePress = () => {
    setIsFavourite(!isFavourite);
  };

  const handleOnBackPress = () => console.log("back pressed");

  return (
    <ScrollView
      style={styles.pageContainer}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <TopBar
        eventCategory="Sport"
        isFavourite={isFavourite}
        onFavouritePress={handleOnFavouritePress}
        onBackButtonPress={handleOnBackPress}
      />
      <View>
        <Text numberOfLines={3} style={styles.eventTitle}>
          The event title thingy that should be too long to be handled by this
          poor ass component :) The event title thingy that should be too long
          to be handled by this poor ass component :)
        </Text>
      </View>
      <View style={styles.userTile}>
        <Text>User tile</Text>
      </View>

      <EventMetadataPanel date="17.10" distance={12} participants={4} />

      <TouchableHighlight
        style={styles.joinButtonContainer}
        onPress={() => console.log("nicely pressed")}
        underlayColor={Colors2G.DarkerAccent}
      >
        <Text style={styles.joinButtonText}>I want to join this event</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.joinButtonContainer,
          { backgroundColor: Colors2G.AccentBackground },
        ]}
        onPress={() => console.log("nicely pressed")}
        underlayColor={Colors2G.DarkerAccent}
      >
        <Text style={[styles.joinButtonText, { color: "black" }]}>
          Check out other participants
        </Text>
      </TouchableHighlight>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          suscipit ante, in posuere lorem. Pellentesque pellentesque metus
          velit, a rhoncus enim varius vitae. Pellentesque a feugiat tortor.
          Phasellus ornare nisi sada, porta justo ac, faucibus ipsum. Nam tempor
          varius odio id tempor. Suspendisse potenti
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Location</Text>
        <View style={styles.mapContainer}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            This is MAP
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: { marginHorizontal: 30 },

  eventTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  userTile: {
    marginVertical: 30,
  },
  joinButtonContainer: {
    alignSelf: "center",
    backgroundColor: Colors2G.Accent,
    padding: 20,
    width: "100%",
    marginTop: 30,
    borderRadius: 12,
  },
  joinButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  descriptionContainer: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  descriptionTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },
  locationContainer: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  locationTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },
  mapContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
