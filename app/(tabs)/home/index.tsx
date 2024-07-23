import ModalPassword from "@/components/ModalPassword";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Modal } from "react-native";

export default function Home() {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  let charset = "abcdefghijklmnopqrstuvwxyz1234567890";

  function generatePass() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setIsOpenModal(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Image source={require("../../../assets/images/logo.png")} />
        <Text style={styles.title}>{size} caracteres</Text>
      </View>

      <View style={styles.containerSlider}>
        <Slider
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={10}
          step={1}
          onValueChange={(e) => setSize(e)}
        />
      </View>
      <Text style={styles.btnGenerate} onPress={generatePass}>
        Gerar senha
      </Text>

      <Modal visible={isOpenModal} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} close={setIsOpenModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    margin: "auto",
  },
  containerSlider: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 6,
  },
  btnGenerate: {
    backgroundColor: "#392DE9",
    padding: 12,
    borderRadius: 8,
    margin: "auto",
    width: "80%",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    height: 48,
    fontSize: 18,
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
