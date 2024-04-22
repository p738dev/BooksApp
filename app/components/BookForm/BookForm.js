import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { Category } from "../../constans/category";

const BookForm = () => {
  const [name, setName] = useState("");
  const [ISBN, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const addBook = async () => {
    if (name === "" || price === "") {
      setError("Field name and price are require.");
      return;
    }
    try {
      await axios.post("https://test-api.dev.eura7.com/api/add-book", {
        name,
        ISBN,
        description,
        price,
        category,
      });
      setName("");
      setISBN("");
      setDescription("");
      setPrice("");
      setCategory("");
      setError("");
    } catch (error) {
      setError("Error adding book", error);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ISBN"
        value={ISBN}
        onChangeText={(text) => setISBN(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <MultipleSelectList
        data={Category}
        setSelected={(text) => setCategory(text)}
        save="value"
        placeholder="Category"
      />
      <TouchableOpacity>
        <Button
          title="Dodaj"
          onPress={addBook}
        />
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default BookForm;

const styles = StyleSheet.create({
  form: {
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  error: {
    marginBottom: 15,
    paddingTop: 15,
    color: "red",
    textAlign: "center",
  },
});
