import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#202040",
      }}
    >
      {fontsLoaded ? (
        <Text style={{ fontSize: 40, color: "#fff" }}>Hello World</Text>
      ) : (
        <View />
      )}
    </View>
  );
}
