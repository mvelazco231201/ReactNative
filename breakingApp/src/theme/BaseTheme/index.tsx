/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#282c34',
  pink: '#e20c79',
  white: '#dfff',
  secondary: '#d73070',
  status: '#43aa8b',
};

export const baseStyles = StyleSheet.create({
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 5,
      },
});
