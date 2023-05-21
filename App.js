import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import ProductsScreen from "./src/screens/ProductsScreen";
// import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/navigation";
import {Provider} from 'react-redux';
import {store} from './src/store';
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
