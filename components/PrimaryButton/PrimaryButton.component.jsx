import { TouchableOpacity, Text } from "react-native";

import PrimaryButtonStyles from "./PrimaryButton.styles";

export default function PrimaryButton({ onPress, children }) {
  return (
    <TouchableOpacity style={PrimaryButtonStyles.button} onPress={onPress}>
      <Text style={PrimaryButtonStyles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
