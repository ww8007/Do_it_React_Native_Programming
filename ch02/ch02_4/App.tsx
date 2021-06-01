// @flow
import * as React from 'react';

import {SafeAreaView, Alert, Button} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
} from 'react-native';

const onPress = () => Alert.alert('home pressed', 'message');

export default function App() {
  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>터쳐블</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>터쳐블 하이라이트</Text>
      </TouchableHighlight>
      <Text onPress={onPress}>그냥 텍스트</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('on Focus')}
        onBlur={() => console.log('on Blur')}
        onEndEditing={() => console.log('end edit')}
      />
    </SafeAreaView>
  );
}
