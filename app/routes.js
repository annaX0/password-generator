import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./(tabs)/home/index";
import Passwords from "./(tabs)/passwords/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons size={size} color={color} name="home"></Ionicons>
              );
            }
            return <Ionicons size={size} color={color} name="home"></Ionicons>;
          },
        }}
        name="Home"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons
                  size={size}
                  color={color}
                  name="lock-closed"
                ></Ionicons>
              );
            }
            return (
              <Ionicons size={size} color={color} name="lock-closed"></Ionicons>
            );
          },
        }}
        name="Passwords"
        component={Passwords}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
