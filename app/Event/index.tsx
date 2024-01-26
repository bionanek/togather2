import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { CustomIconButton } from "../components/buttons/CustomIconButton";
import { Colors } from "../../assets/Constants/Colors";

export default function EventPage() {
  return (
    <View style={styles.pageContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.topBar}>
        <CustomIconButton
          onPress={() => console.log("pressed custom")}
          icon="left-arrow"
        />
        <CustomIconButton
          onPress={() => console.log("pressed custom")}
          icon="basketball"
          labelText="Sport"
        />
        {/* TODO: implement MobX store for event categories and create a
        useSelectedCategory hook or smth
         that would return icon and name,
        that would be then passed to the CustomIconButton in props */}
        <CustomIconButton
          onPress={() => console.log("pressed custom")}
          icon="heart"
        />
      </View>
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
      <View style={styles.metadataRow}>
        <View style={styles.metadataItem}>
          <Text>Date</Text>
        </View>
        <View style={styles.metadataItem}>
          <Text>People</Text>
        </View>
        <View style={styles.metadataItem}>
          <Text>Dist.</Text>
        </View>
      </View>

      <TouchableHighlight
        style={styles.joinButtonContainer}
        onPress={() => console.log("nicely pressed")}
        underlayColor={Colors.DarkerAccent}
      >
        <Text style={styles.joinButtonText}>I want to join this event</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.joinButtonContainer,
          { backgroundColor: Colors.AccentBackground },
        ]}
        onPress={() => console.log("nicely pressed")}
        underlayColor={Colors.DarkerAccent}
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
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "black",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            This is MAP
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: { marginHorizontal: 30 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  eventTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  userTile: {
    marginVertical: 30,
  },
  metadataRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  metadataItem: {
    marginHorizontal: 30,
  },
  joinButtonContainer: {
    alignSelf: "center",
    backgroundColor: Colors.Accent,
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
    flexDirection: "column",
    alignItems: "flex-start",
  },
  locationTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },
});
