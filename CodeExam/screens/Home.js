import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {book1, book2} from '../assets';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = () => {
  const navigation = useNavigation();
  const first = book1.match(/.{1,10000}/g);
  const second = book2.match(/.{1,10000}/g);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.first}
        onPress={() => navigation.navigate('FirstBook', {data: first})}
        title="Go to first screen!">
        <Text style={styles.title}>Lorem Ipsum Book 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second}
        onPress={() => navigation.navigate('SecondBook', {data: second})}
        title="Go to first screen!">
        <Text style={styles.title}>Lorem Ipsum Book 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#f5f4f2',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
  first: {
    flex: 1,
    borderRadius: 7,
    marginRight: 10,
    backgroundColor: '#9E9D24',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  second: {
    flex: 1,
    borderRadius: 7,
    backgroundColor: '#558B2F',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: wp('80%'),
    height: hp('60%'),
  },
  content: {
    marginHorizontal: 10,
    fontSize: Platform.OS == 'ios' ? 18 : 30,
  },
});
