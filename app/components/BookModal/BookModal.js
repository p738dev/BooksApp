import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";

const BookModal = ({ selectedBook, closeModal }) => {
  return (
    <Modal
      visible={selectedBook !== null}
      animationType="slide"
    >
      <View style={styles.container}>
        <Text style={styles.titleModal}>ID: {selectedBook.id}</Text>
        <Text style={styles.titleModal}>Name: {selectedBook.name}</Text>
        <Text style={styles.titleModal}>ISBN: {selectedBook.ISBN}</Text>
        <Text style={styles.titleModal}>
          Description: {selectedBook.description}
        </Text>
        <Text style={styles.titleModal}>Price: {selectedBook.price}</Text>
        <Text style={styles.titleModal}>Category: {selectedBook.Category}</Text>
        <Button
          title="close"
          color="red"
          onPress={closeModal}
        />
      </View>
    </Modal>
  );
};

export default BookModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleModal: {
    marginBottom: 10,
    fontSize: 18,
  },
});
