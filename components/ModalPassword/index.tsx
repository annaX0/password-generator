import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "@/hooks/useStorage";
import Passwords from "@/app/(tabs)/passwords";
export default function ModalPassword({
  password,
  close,
}: {
  password: string;
  close: (value: boolean) => void;
}) {
  const { saveItem } = useStorage();

  async function handleCopy() {
    await Clipboard.setStringAsync(password);
    alert("Senha copiada com sucesso");

    await saveItem("@pass", password);
    close(false);
  }

  async function handleSave() {
    await Clipboard.setStringAsync(password);
    alert("Senha salva com sucesso");

    await saveItem("@pass", password);
    close(false);
  }
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.passwordContainer} onLongPress={handleCopy}>
          <Text style={styles.pass}>{password}</Text>
        </Pressable>

        <View style={styles.containerButtons}>
          <Text style={styles.btnBack} onPress={() => close(false)}>
            Voltar
          </Text>
          <Text style={styles.btnSave} onPress={handleSave}>
            Salvar senha
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: { color: "black", fontSize: 26, fontWeight: "bold", margin: "auto" },
  passwordContainer: {
    backgroundColor: "#0E0E0E",
    padding: 12,
    width: "100%",
    borderRadius: 8,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    width: "80%",
    backgroundColor: "#F3F3FF",
    padding: 20,
    borderRadius: 8,
  },
  bg: {
    backgroundColor: "rgba(24, 24,24,0.6)",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pass: {
    color: "white",
    textAlign: "center",
  },
  containerButtons: {
    flexDirection: "row",
    gap: 16,
  },
  btnBack: {
    padding: 12,
    borderRadius: 8,
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "bold",
    flex: 1,
  },
  btnSave: {
    backgroundColor: "#392DE9",
    padding: 12,
    borderRadius: 8,
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    flex: 1,
  },
});
