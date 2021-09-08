import React from 'react';
import { Animated, Button, Text, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

  const { fadeIn, fadeOut, opacity } = useFade()

  return (

    <View style={{ 
      flex: 1, 
      backgroundColor: "grey", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>

      <Animated.View style={{ 
        backgroundColor: "#084f6a", 
        width: 150, 
        height: 150,
        marginBottom: 10,
        borderColor: "white",
        borderWidth: 10,
        opacity
      }}/> 

      <Button 
        title="FadeIn"
        onPress={fadeIn}
      />

      <Button 
        title="FadeOut"
        onPress={fadeOut}
      />

    </View>
  );
}