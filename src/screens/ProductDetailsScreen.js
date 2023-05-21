import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";
const ProductDetailsScreen = () => {
  const product = useSelector(state => state.products.selectedProduct);
  const { width } = useWindowDimensions(); //uses hook react native to make image to be the window width
  const addtoCart = () => {
    console.warn("Add to cart");
  };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }} // makes the style of width the window demensions
            />
          )}
          horizontal //makes flatlist horizontal
          showsHorizontalScrollIndicator={false} // removes the scroll indicator at the bottom
          pagingEnabled // use to center image when scrolling (kinda of snaps)
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addtoCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
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

export default ProductDetailsScreen;
