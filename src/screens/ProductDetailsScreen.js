import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("Add to cart");
  };
  return (
    <View>
      <ScrollView>
        {/* image carousel  */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ padding: 20 }}>
          {/* title */}

          <Text style={styles.title}>{product.name}</Text>
          {/* price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* add to cart button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1,
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 25,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
