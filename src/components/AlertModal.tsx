import Modal from "react-native-modal";

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useState, useImperativeHandle } from "react";
import { router } from "expo-router";

const AlertModal = ({ description }, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Expose a method to change the bottom sheet state
  useImperativeHandle(ref, () => ({
    setAlertBoxState: (isOpen: boolean) => {
      setModalVisible(isOpen);
    },
  }));

  const closeBottomSheet = () => {
    // Set the shared boolean value to false when closing
    setModalVisible(false);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible} onBackButtonPress={closeBottomSheet}>
        <View style={styles.modal}>
          <View style={{ flex: 0.85 }}>
            <Text>{description}</Text>
          </View>
          <Pressable
            onPress={() => router.back()}
            style={{
              backgroundColor: "green",
              flex: 0.15,
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22,
            }}
          >
            <Text>Done</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default forwardRef(AlertModal);

const styles = StyleSheet.create({
  modal: {
    flex: 0.45,
    backgroundColor: "#ffffff",
    borderRadius: 22,
  },
});
