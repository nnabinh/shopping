import { StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../../types";

const ListItem = ({ item }: { item: Product }) => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      source={{ uri: item.image_url }}
      style={styles.image}
    />
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 80,
    margin: 8,
  },
});

export default ListItem;
