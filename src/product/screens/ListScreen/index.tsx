import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from "react-native";
import { PropsWithNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import listItemResponse from "../../__mock__/listItemResponse";
import { Product } from "../../types";
import { useAddItemMutation, useItemListQuery } from "../../api";
import routes from "../../../navigation/routes";
import AddItemForm from "./AddItemForm";
import GridItem from "./GridItem";
import ListItem from "./ListItem";

export default function ListScreen({ navigation }: PropsWithNavigation) {
  const [isGridMode, setIsGridMode] = useState(false);
  const [shouldShowAddItemForm, setShouldShowAddItemForm] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false); // State for pull-to-refresh

  const {
    data = listItemResponse,
    isLoading: isLoadingItems,
    refetch,
  } = useItemListQuery();
  const [addItem, { isLoading: isAddingItem }] = useAddItemMutation();

  const handleRefresh = () => {
    setIsRefreshing(true);

    // Simulate refreshing by fetching new data (replace this with your actual data fetch)
    // Note: This is because BE API is not available
    setTimeout(async () => {
      // After fetching new data, update your items and stop refreshing
      await refetch();
      setIsRefreshing(false);
    }, 2000); // Simulate a 2-second delay
  };

  const handleAddItem = async (item: Product) => {
    await addItem({ item });
    setShouldShowAddItemForm(false);
    Alert.alert("🎉 Successfully added new item");
  };

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.ItemDetailScreen, { item })}
        style={styles.container}
      >
        {isGridMode ? <GridItem item={item} /> : <ListItem item={item} />}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          key={`${isGridMode}`}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_id.toString()}
          numColumns={isGridMode ? 2 : 1}
          refreshControl={
            <RefreshControl
              refreshing={isLoadingItems || isRefreshing}
              onRefresh={handleRefresh}
            />
          }
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGridMode(!isGridMode)}
        >
          <Text style={styles.toggleText}>
            {isGridMode ? "Switch to List" : "Switch to Grid"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShouldShowAddItemForm(true)}
        >
          <Text style={styles.toggleText}>Add Item</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <AddItemForm
        isVisible={shouldShowAddItemForm}
        onAddItem={handleAddItem}
        isAddingItem={isAddingItem}
        onClose={() => setShouldShowAddItemForm(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginVertical: 8,
  },
  toggleButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  toggleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
