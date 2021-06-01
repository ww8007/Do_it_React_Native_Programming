import React from 'react';
// prettier-ignore
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  Dimensions,
  View,
} from 'react-native';
import {Colors} from 'react-native-paper';
import Color from 'color';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={styles.text}>os: {Platform.OS}</Text>
      <Text style={styles.text}>width: {width}</Text>
      <Text style={styles.text}>height: {height}</Text>
      <View style={[styles.box, styles.border]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: Colors.blue500,
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
  box: {
    width: '70%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}),
  },
  border: {borderWidth: 10, borderColor: Colors.lime500},
});
