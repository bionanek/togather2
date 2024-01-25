import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import LeftArrowIcon from "../../../assets/OtherIcons/left-arrow-icon.svg";
import HeartIcon from "../../../assets/OtherIcons/heart-icon.svg";
import { Colors } from "../../../assets/Constants/Colors";

type ButtonIcons = "plus" | "left-arrow" | "heart";

type CustomButtonProps = {
  onPress: () => void;
  enabled?: boolean;
  labelText?: string;
  icon?: ButtonIcons;
  shape?: "circle" | "square";
};

export function CustomButton({
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
        return <LeftArrowIcon color={"black"} />;
    }
  };

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      underlayColor={Colors.DarkerAccentBackground}
      style={styles.buttonContainer}
    >
      <View>
        {icon ? getChosenIcon(icon) : null}
        {labelText ? <Text>{labelText}</Text> : null}
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
});
