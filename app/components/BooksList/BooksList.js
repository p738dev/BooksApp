import {
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import BookItem from "../BookItem/BookItem";
import BookModal from "../BookModal/BookModal";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://test-api.dev.eura7.com/api/get-all-books"
      );
      setBooks(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setisModalVisible(null);
  };

  return (
    <ScrollView>
      <Text style={styles.headerBookList}>BooksList</Text>
      {isLoading ? (
        <ActivityIndicator
          size={"large"}
          color="#0000ff"
        />
      ) : error ? (
        <Text>Loading error</Text>
      ) : (
        <FlatList
          data={books.sort((a, b) => a.id - b.id)}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => (
            <BookItem
              item={item}
              openModal={openModal}
            />
          )}
        />
      )}
      <BookModal
        selectedBook={selectedBook}
        closeModal={closeModal}
      />
    </ScrollView>
  );
};

export default BooksList;

const styles = StyleSheet.create({
  headerBookList: {
    marginBottom: 30,
    fontSize: 26,
    fontWeight: "bold",
  },
});
