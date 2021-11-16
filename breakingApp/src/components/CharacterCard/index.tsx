/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CharacterInterface } from '../../interfaces/interface';
import { colors } from '../../theme/BaseTheme';

interface Props {
  character: CharacterInterface
}

const Component = (props: Props) => {
  const {character} = props;
  const {name, img, status, nickname} = character;
  return (
      <View style={style.Container}>
        <Image
        style={style.Image}
        source={{
          uri: img,
        }}
        />
        <View style={style.InfoContainer}>
        <Text style={style.Name}>
          {name}
        </Text>
        <Text style={style.Nickname}>
          {nickname}
        </Text>
        <Text style={style.Status}>
          {status}
        </Text>
        </View>
      </View>
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderBottonWidth: 0.5,
    height: 100,
  },
  InfoContainer: {
    marginStart: 100,
    marginVertical: -70,
  },
  Image: {
    borderRadius: 100,
    height: '80%',
    width: '20%',
  },
  Name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2.5,
  },
  Nickname: {
    color: colors.secondary,
    fontWeight: '500',
    fontSize: 18,
  },
  Status: {
    paddingLeft: 210,
    paddingVertical: -1,
    marginVertical: -20,
    color: colors.status,
    fontSize: 15,
  },
});
export { Component as CharacterCard };
export default Component;
