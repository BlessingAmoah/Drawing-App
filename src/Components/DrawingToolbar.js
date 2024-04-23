import React from 'react';
import { Modal, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const DrawingModal = ({ modalVisible, handleCloseModal }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.helpText}>
            This is the Drawing page. Express your creativity and relieve stress by using touch and drag gestures to draw on the screen. 
            Adjust the brush size with the size picker, undo your last action with the Undo button, 
            and share or save your artwork using the Share option. 
            Select your preferred brush size by tapping on the size option for a personalized drawing experience.
          </Text>
          <TouchableHighlight style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  closeButtonText: {
    textAlign: 'center',
  },
  helpText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default DrawingModal;
