import { Text, FlatList, View, StyleSheet } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListHeaderComponent={() => (
        <View style={styles.totalsContainer}>
          <View style={styles.row}>
            <Text>Subtotal</Text>
            <Text>324</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  totalsContainer: {},
});

export default ShoppingCart;
