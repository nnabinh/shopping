import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

declare module "@react-navigation/native" {
  type PropsWithNavigation<P = {}> = {
    navigation: StackNavigationProp<ParamListBase>;
  } & P;
}
