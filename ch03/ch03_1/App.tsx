import React from 'react';
import {StyleSheet, SafeAreaView, Image, ImageBackground} from 'react-native';

import * as D from './src/data';

const avatarUrl = D.raddomAvatarUrl();
const avatarSize = 50;
export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={styles.flex}
        source={require('./src/assets/images/image.jpg')}>
        <Image source={{uri: avatarUrl}} style={styles.image} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  ImageBackground: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
});
