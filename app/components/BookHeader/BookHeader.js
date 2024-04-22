import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BookHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Books</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default BookHeader;
