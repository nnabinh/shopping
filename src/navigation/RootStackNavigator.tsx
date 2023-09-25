import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../product/screens/ListScreen";
import routes from "./routes";
import ItemDetailScreen from "../product/screens/ItemDetailScreen";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.ListScreen} component={ListScreen} />
      <Stack.Screen
        name={routes.ItemDetailScreen}
        component={ItemDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
