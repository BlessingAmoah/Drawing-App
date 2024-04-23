import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform, ActionSheetIOS, Alert, Modal, TouchableHighlight } from 'react-native';
import DrawingCanvas from './components/DrawingCanvas';
import DrawingModal from './components/DrawingModal';
import DrawingToolbar from './components/DrawingToolbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [brushSize, setBrushSize] = useState(2);

  const helpSessionQuestions = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const clearCanvas = () => {
    // Logic to clear the canvas
  };

  const undoLastAction = () => {
    // Logic to undo the last action
  };

  const shareOrSaveDrawing = async () => {
    // Logic to share or save the drawing
  };

  return (
    <View style={styles.container}>
      <DrawingCanvas />
      <DrawingToolbar
        clearCanvas={clearCanvas}
        undoLastAction={undoLastAction}
        shareOrSaveDrawing={shareOrSaveDrawing}
        setBrushSize={setBrushSize}
      />
      <TouchableOpacity onPress={helpSessionQuestions} style={[styles.helpIcon, { zIndex: 2 }]}>
        <MaterialCommunityIcons name="information" size={24} color="white" />
      </TouchableOpacity>
      <DrawingModal modalVisible={modalVisible} handleCloseModal={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIcon: {
    position: 'absolute',
    top: 5,
    right: 5, 
  },
});

export default DrawingScreen;
