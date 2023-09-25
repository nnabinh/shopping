import React, { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const AddItemForm = ({ onAddItem, onClose, isVisible, isAddingItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddItem = () => {
    if (!name || !description || !imageUrl) {
      alert("Please fill in all fields.");
      return;
    }

    const newItem = {
      name,
      description,
      image_url: imageUrl,
    };

    onAddItem(newItem);

    setName("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      visible={isVisible}
      transparent
    >
      <TouchableOpacity onPress={onClose} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Add New Item</Text>
          <TextInput
            placeholder="Product Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Image URL"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            style={styles.input}
          />
          {isAddingItem ? (
            <ActivityIndicator />
          ) : (
            <Button title="Add" onPress={handleAddItem} />
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "gray",
    width: "95%",
    backgroundColor: "#C5C6D0",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
});

export default AddItemForm;
