import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { EventMetadataPanel } from "@event/components/EventMetadataPanel";
import { TopBar } from "@event/components/TopBar";
import CTAButton from "@event/components/CTAButton";
import UserProfileEventTile from "@event/components/UserProfileEventTile";
import EventLocation from "./components/EventLocation";

// TODO: use @EventPageProps later, when implementing navigation and passing id from the list
type EventPageProps = {
  eventId: number;
};
type EventData = {
  title: string;
  description: string;
  noOfParticipants: number;
  distanceFromUser: number;
  date: string;
};
const eventData: EventData = {
  title:
    "The event title thingy that should be too long to be handled by this poor ass component :) The event title thingy that should be too long to be handled by this poor ass component :)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut suscipit ante, in posuere lorem. Pellentesque pellentesque metus velit, a rhoncus enim varius vitae. Pellentesque a feugiat tortor. Phasellus ornare nisi sada, porta justo ac, faucibus ipsum. Nam tempor varius odio id tempor. Suspendisse potenti",
  noOfParticipants: 4,
  distanceFromUser: 12,
  date: "17.10",
};

export default function EventPage() {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleOnFavouritePress = () => {
    setIsFavourite(!isFavourite);
  };

  const onBackPress = () => console.log("back pressed");
  const onJoinPress = () => console.log("join press");
  const onCheckoutParticipantsPress = () =>
    console.log("checkout participants press");

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
        onBackButtonPress={onBackPress}
      />
      <View>
        <Text numberOfLines={3} style={styles.eventTitle}>
          {eventData.title}
        </Text>
      </View>
      <UserProfileEventTile />

      <EventMetadataPanel
        date={eventData.date}
        distance={eventData.distanceFromUser}
        participants={eventData.noOfParticipants}
      />

      <CTAButton onPress={onJoinPress} type="join" />
      <CTAButton
        onPress={onCheckoutParticipantsPress}
        type="check-participants"
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text>{eventData.description}</Text>
      </View>
      <EventLocation />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: { marginHorizontal: 30 },

  eventTitle: {
    fontWeight: "600",
    fontSize: 20,
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
});
