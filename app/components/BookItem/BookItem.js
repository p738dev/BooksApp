import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const BookItem = ({ item, openModal }) => {
  const [error, setError] = useState("");

  const deleteBook = async (id) => {
    try {
      await axios.delete(
        `https://test-api.dev.eura7.com/api/delete-book/${id}`
      );
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.contentBook}
      >{`ID: ${item.id}, Name: ${item.name}, Price: ${item.price}`}</Text>
      <Button
        title="View More"
        onPress={() => openModal(item)}
      />
      <Button
        title="Delete"
        onPress={() => deleteBook(item.id)}
      />
      {error ? <Text style={styles.deleteBook}>Delete book error</Text> : ""};
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentBook: {
    marginBottom: 20,
  },
  deleteBook: {
    fontSize: 16,
    color: "red",
  },
});
