import React, { useState } from 'react';
import { View, PanResponder, Dimensions, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DrawingCanvas = () => {
  const [currentDrawingPath, setCurrentDrawingPath] = useState('');
  const [drawingSessions, setDrawingSessions] = useState([]);
  const [drawing, setDrawing] = useState(false);

  const handlePanResponderMove = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const point = `${locationX},${locationY + 75}`;
    
    if (drawing) {
      setCurrentDrawingPath((prevPath) => `${prevPath} L${point}`);
    } else {
      setCurrentDrawingPath((prevPath) =>
        prevPath === '' ? `M${point}` : `${prevPath} L${point}`
      );
      setDrawing(true);
    }
  };

  const handlePanResponderRelease = () => {
    setDrawing(false);
    const updatedSession = { path: currentDrawingPath };
    setDrawingSessions([...drawingSessions, updatedSession]);
    setCurrentDrawingPath('');
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: handlePanResponderRelease,
  });

  return (
    <View {...panResponder.panHandlers} style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Svg width={Dimensions.get('window').width} height={Dimensions.get('window').height}>
        {drawingSessions.map((session, index) => (
          <Path
            key={index}
            d={session.path}
            stroke="black"
            strokeWidth={2}
            fill="transparent"
          />
        ))}
        <Path d={currentDrawingPath} stroke="black" strokeWidth={2} fill="transparent" />
      </Svg>
    </View>
  );
};

export default DrawingCanvas;
