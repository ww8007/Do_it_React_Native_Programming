// @flow
import * as React from 'react';
import {Text} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();

export const ArrowComponet = () => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
};
