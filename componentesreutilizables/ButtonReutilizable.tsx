import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

interface Props{
    textButton: string,
    onPress:()=> void;
}

export const ButtonComponents = ({ textButton, onPress }:Props) => {
  return (
   <TouchableOpacity
   onPress={onPress}
 >
    <Text >{textButton}</Text>
   </TouchableOpacity>
  )
}