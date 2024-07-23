import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "../routes.js";

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Routes />
    </NavigationContainer>
  );
}
