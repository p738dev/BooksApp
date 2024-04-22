import { StyleSheet, View } from "react-native";

import BookForm from "./app/components/BookForm/BookForm";
import BookHeader from "./app/components/BookHeader/BookHeader";
import BooksList from "./app/components/BooksList/BooksList";
import BookModal from "./app/components/BookModal/BookModal";

const App = () => {
  return (
    <View style={styles.container}>
      <BookHeader />
      <BookForm />
      <BooksList />
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
