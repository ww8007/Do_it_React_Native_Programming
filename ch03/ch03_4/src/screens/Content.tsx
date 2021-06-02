import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';

const avatars = D.makeArray(200).map(notUsed => D.raddomAvatarUrl());
const title = 'Content';
export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avartarView}>
      <Image style={styles.avartar} source={{uri: avatarUrl}} />
    </View>
  ));
  return (
    <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: Colors.blue900,
  },
  text: {fontSize: 20},
  avartarView: {padding: 3},
  avartar: {width: 50, height: 50, borderRadius: 25},
});
