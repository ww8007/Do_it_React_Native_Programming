import React, {FC} from 'react';
import {Text, View, Alert} from 'react-native';
import {Image} from 'react-native';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {styles} from './Person.style';
import {Avatar, IconText} from '../components';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const avatarPressed = () => Alert.alert('avatar preseed');
const deletePressed = () => Alert.alert('delete pressed');
const countIconPressed = (name: string) => Alert.alert(`${name} pressed`);

const Person: FC<PersonProps> = ({person}) => {
  return (
    <View style={styles.view}>
      <Image source={{uri: person.avatar}} style={styles.avatar} />
      <View style={[styles.nameEmailView]}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
      </View>
      <View style={[styles.dateVeiw]}>
        <Text style={styles.createDate}>
          {moment(person.createdDate).startOf('day').fromNow()}
        </Text>
        <Text style={styles.text}>{person.comments}</Text>
        <Image style={styles.images} source={{uri: person.image}} />
        <View style={styles.countsView}>
          <Text style={styles.counts}>{person.counts.comment}</Text>
          <Text style={styles.counts}>{person.counts.retweet}</Text>
          <Text style={styles.counts}>{person.counts.heart}</Text>
        </View>
      </View>
    </View>
  );
};

export default Person;
