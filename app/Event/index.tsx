import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { CustomButton } from "../components/buttons/CircleIconButton";

export default function EventPage() {
  return (
    <View style={{ marginHorizontal: 30 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.topBar}>
        <CustomButton
          onPress={() => console.log("pressed custom")}
          icon="left-arrow"
        />
        <Text>Category</Text>
        <CustomButton
          onPress={() => console.log("pressed custom")}
          icon="heart"
        />
      </View>
      <View>
        <Text>The event title thingy</Text>
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
        underlayColor={"#E74C3C"}
      >
        <Text style={styles.joinButtonText}>I want to join this event</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.joinButtonContainer, { backgroundColor: "#ECE7E3" }]}
        onPress={() => console.log("nicely pressed")}
        underlayColor={"#E74C3C"}
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
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
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
    backgroundColor: "#FD5A26",
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
