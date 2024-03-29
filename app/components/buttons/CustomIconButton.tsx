import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import LeftArrowIcon from "../../../assets/OtherIcons/left-arrow-icon.svg";
import HeartIcon from "../../../assets/OtherIcons/heart-icon.svg";
import { Colors } from "../../../assets/Constants/Colors";
import CategoryBasketballIcon from "../../../assets/CategoryIcons/category-basketball-icon.svg";

type ButtonIcons = "plus" | "left-arrow" | "heart" | "basketball";

type CustomButtonProps = {
  onPress: () => void;
  enabled?: boolean;
  labelText?: string;
  icon?: ButtonIcons;
  shape?: "circle" | "square";
};

export function CustomIconButton({
  onPress,
  enabled: disabled,
  icon,
  labelText,
  shape,
}: CustomButtonProps) {
  const getChosenIcon = (icon: ButtonIcons) => {
    switch (icon) {
      case "left-arrow":
        return <LeftArrowIcon color={"black"} />;
      case "heart":
        return <HeartIcon color={"black"} />;
      default:
        return <CategoryBasketballIcon color={Colors.Accent} />;
    }
  };

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      underlayColor={Colors.DarkerAccentBackground}
      style={styles.buttonContainer}
    >
      <View style={styles.buttonContentWrapper}>
        {icon ? getChosenIcon(icon) : null}
        {labelText ? (
          <Text style={{ marginLeft: icon ? 5 : 0, fontWeight: "600" }}>
            {labelText}
          </Text>
        ) : null}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: Colors.AccentBackground,
    padding: 15,
  },
  buttonContentWrapper: {
    flexDirection: "row",
  },
});
