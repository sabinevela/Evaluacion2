import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { styles } from '../themes/appThemes';
export const Screen5 = () => {
  const Screen5 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const handlePress = () => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      if (isNaN(number1) || isNaN(number2)) {
        setResult('Por favor ingrese números válidos.');
        return;
      }
  
      if (number1 <= number2) {
        setResult(`Número menor o igual: ${number1}`);
      } else {
        setResult(`Número menor o igual: ${number2}`);
      }
    };
  return (
    <View>
    <TextInput
      keyboardType="numeric"
      value={num1}
      onChangeText={setNum1}
      placeholder="Ingrese el primer número"
    />
    <TextInput
      keyboardType="numeric"
      value={num2}
      onChangeText={setNum2}
      placeholder="Ingrese el segundo número"
    />
    <Button title="<=" onPress={handlePress} />
    <Text>{result}</Text>
  </View>
);
}};


