import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import ProductScreen from "./screens/ProductScreen";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_bottom" , contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerRight: () => (
              <Pressable
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="grey" />
                <Text style={{ marginLeft: 5 }}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCartScreen}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
