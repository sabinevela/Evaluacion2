import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from '../themes/appThemes'; // Ensure this is correctly defined

export const ScreenImagen1 = () => {
  return (
    <View style={styles.imagenScreen2}>
      <Text style={styles.textoScreen2}>IMAGEN 1</Text>
      <Image 
        source={{ uri: 'https://www.loboswiki.com/Imagenes/guia-de-los-lobos.jpg', height:400 }} 
        style={styles.imagenScreen2} 
      />
    </View>
  );
};

