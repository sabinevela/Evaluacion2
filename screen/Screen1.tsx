import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { ButtonComponents } from '../componentesreutilizables/ButtonReutilizable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../themes/appThemes';
import { ScreenImagen1 } from './ScreenImagen1';
import { Screen2 } from './Screen2';
import { Screen3 } from './Screen3';
import { Screen4 } from './Screen4';
import { Screen5 } from './Screen5';


export const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.textBienvenidos}>Bienvenido</Text>
        <View style={styles.botonesScreen1}>
          <ButtonComponents textButton='Imagen1' onPress={() => navigation.navigate('ScreenImagen1')} />
          <ButtonComponents textButton='Imagen2' onPress={() => navigation.navigate('Screen2')} />
          <ButtonComponents textButton='Mayor Igual' onPress={() => navigation.navigate('Screen3')} />
          <ButtonComponents textButton='Menor Igual' onPress={() => navigation.navigate('Screen4')} />
          <ButtonComponents textButton='Otro' onPress={() => navigation.navigate('Screen5')} />
        </View>
      </View>
    </View>
  );
};