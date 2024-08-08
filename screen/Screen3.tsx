import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import { styles } from '../themes/appThemes';

export const Screen3 = () => {
  return (
    <View style={styles.imagenScreen2}>
    <Text style={styles.textoScreen2}>IMAGEN 2</Text>
    <Image source={{ uri:'https://upload.wikimedia.org/wikipedia/commons/5/5a/Canis_lupus_265b.jpg' }} style={styles.imagenScreen2} height={400}/>
  </View>
  )
}
