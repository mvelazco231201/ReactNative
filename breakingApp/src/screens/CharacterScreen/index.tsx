/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import breakingBadApi from '../../api/breakingBapApi';
import {CharacterInterface} from '../../interfaces/interface';
import { CharacterCard } from '../../components/CharacterCard';

const Component = () => {
  const [characters, setCharacters] = useState<[CharacterInterface] | null>(
    null,
  );

  //mediante fun asincrona, aqui no se tiene control en caso de algun error
  const getCharacters = async () => {
    const {data} = await breakingBadApi.get<[CharacterInterface]>(
      '/characters',
    );
    //console.log(data[0].name);
    setCharacters(data);
  };
  /*const getCharacters = () => {
    breakingBadApi
      .get('/characters')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };*/
  useEffect(() => {
    getCharacters();
  }, []);

  /* useEffect(() => {
    const character = characters ? characters[0].name : 'EMPTY';
    console.log(character);
  }, [characters]);*/

  const renderCharacters = characters?.map((character, index) => {
    return (
      <CharacterCard key={`character-${index}`} character={character} />
    );
  });

  return (
    <ScrollView>
      {renderCharacters}
    </ScrollView>
  );
};
export default Component;
