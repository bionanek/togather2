import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import LeftArrowIcon from "@icons/OtherIcons/left-arrow-icon.svg";
import HeartIcon from "@icons/OtherIcons/heart-icon.svg";
import { Colors } from "@constants/Colors";
import CategoryBasketballIcon from "@icons/CategoryIcons/category-basketball-icon.svg";

type ButtonIcons = "plus" | "left-arrow" | "heart" | "basketball";

type CustomButtonProps = {
  onPress: () => void;
  enabled?: boolean;
  labelText?: string;
  icon?: ButtonIcons;
  iconColor?: string;
  shape?: "circle" | "square";
  buttonColor?: string;
};

const DEFAULT_ICON_COLOR = "black";

export function CustomIconButton({
  onPress,
  enabled: disabled,
  icon,
  labelText,
  shape,
  iconColor,
  buttonColor,
}: CustomButtonProps) {
  const getChosenIcon = (icon: ButtonIcons) => {
    switch (icon) {
      case "left-arrow":
        return <LeftArrowIcon color={iconColor ?? DEFAULT_ICON_COLOR} />;
      case "heart":
        return <HeartIcon color={iconColor ?? DEFAULT_ICON_COLOR} />;
      default:
        return (
          <CategoryBasketballIcon color={iconColor ?? DEFAULT_ICON_COLOR} />
        );
    }
  };

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      underlayColor={Colors.DarkerAccentBackground}
      style={[
        styles.buttonContainer,
        buttonColor ? { backgroundColor: buttonColor } : null,
      ]}
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
