import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ItemDetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Text style={styles.backText}>{" < "}Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backText: {
    fontSize: 20,
    color: "blue",
    marginVertical: 4,
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
