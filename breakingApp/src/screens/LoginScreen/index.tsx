/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {baseStyles, colors} from '../../theme/BaseTheme';
import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../interfaces/interface';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const {email, password, onChange} = useForm<LoginInterface>({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(`Email -> ${email}`);
    console.log(`Password -> ${password}`);
  }, [email, password]);

  const onLogin = () => {
    if (!(email === '1' && password === '1')) return;
    navigation.navigate('Home');
  };
  return (
    <View style={style.Container}>
      <Image
        style={style.image}
        source={{
          uri: 'https://images.hdqwalls.com/walls/thumb/breaking-bad-minimal-4k-on.jpg',
        }}
      />
      <Text style={baseStyles.title}>BreakingBad</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="white"
        value={email as string}
        onChangeText={value => onChange('email', value)}
        style={style.input}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="email-address"
        placeholderTextColor="white"
        value={password as string}
        onChangeText={value => onChange('password', value)}
      />
      <TouchableOpacity style={style.buttonLogin} onPress={onLogin}>
        <Text style={style.text}>Sing in</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    color: 'white',
    marginTop: '5%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
  },
  buttonLogin: {
    marginTop: '10%',
    borderRadius: 20,
    backgroundColor: colors.pink,
    borderColor: 'white',
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    letterSpacing: 2,
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    margin: 18,
  },
});

export default Component;
