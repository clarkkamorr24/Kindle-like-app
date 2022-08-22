import React, {useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
const RenderText = ({item, index, title}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.page}>Page {index + 1}</Text>
        {index == 0 && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.content}>{item}</Text>
      </ScrollView>
    </>
  );
};

export default RenderText;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    fontFamily: 'monospace',
    marginHorizontal: 10,
    fontSize: Platform.OS == 'ios' ? 18 : 25,
  },
  title: {
    fontFamily: 'Roboto',
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  page: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
