import { StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../../types";

const GridItem = ({ item }: { item: Product }) => (
  <View style={styles.container}>
    <Image source={{ uri: item.image_url }} style={styles.image} />
    <Text style={styles.title}>{item.name}</Text>
    <Text>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 20,
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
    width: "100%",
    height: 200,
  },
});

export default GridItem;
