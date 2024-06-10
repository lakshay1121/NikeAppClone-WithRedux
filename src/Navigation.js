import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import ProductScreen from "./screens/ProductScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation:'slide_from_bottom'}}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ headerTitleAlign: "center"}}
          
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
