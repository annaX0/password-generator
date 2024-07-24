import useStorage from "@/hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const { getItem, removeItem } = useStorage();

  const focused = useIsFocused();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");

      setListPasswords(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function removePass(value: string) {
    const remove = await removeItem("@pass", value);
    alert("removido com sucesso");
    setListPasswords(remove);
  }
  return (
    <SafeAreaView style={styles.listPass}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View>
        <FlatList
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Pressable
              onLongPress={() => removePass(item)}
              style={styles.containerPass}
            >
              {item}
            </Pressable>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: { color: "white", fontSize: 26, fontWeight: "bold" },
  titleContainer: {
    backgroundColor: "#392DE9",
    padding: 14,
    paddingTop: 40,
    marginBottom: 20,
  },
  containerPass: {
    padding: 10,
    backgroundColor: "black",
    color: "white",
    marginBottom: 10,
    width: "80%",
    borderRadius: 8,
    margin: "auto",
  },
  listPass: {},
});
