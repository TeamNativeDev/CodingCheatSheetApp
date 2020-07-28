import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TIPS_PREVIEW = [
  { title: 'the first tip' },
  { title: 'tip 2' },
  { title: 'tip 3' },
  { title: 'tip 4' },
  { title: 'tip 5' },
];

const TipsPreview = () => {
  return (
    <FlatList
      horizontal={true}
      data={TIPS_PREVIEW.slice(0, 3)}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <Text style={styles.text}> {item.title} </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    // padding: 1,
  },
  box: {
    flex: 1,
    // height: 50,
    // width: 50,
    marginRight: 10,
    flexWrap: 'wrap',
    borderColor: '#FEF5E7',
    borderWidth: 1,
  },
});
export default TipsPreview;
