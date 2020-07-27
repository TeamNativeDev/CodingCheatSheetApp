import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Tip from '../components/Tip';

const TIPS = [
  { title: 'tip 1', description: 'this is info on tip 1', hexCode: '#A5D0DA' },
  { title: 'tip 2', description: 'this is info on tip 2', hexCode: '#A2D0DA' },
  { title: 'tip 3', description: 'this is info on tip 3', hexCode: '#A5D1DA' },
  { title: 'tip 4', description: 'this is info on tip 4', hexCode: '#A6D3DA' },
  { title: 'tip 5', description: 'this is info on tip 5', hexCode: '#A7D0DA' },
  { title: 'tip 6', description: 'this is info on tip 6', hexCode: '#A5D7DA' },
  { title: 'tip 7', description: 'this is info on tip 7', hexCode: '#A6D1DA' },
  { title: 'tip 8', description: 'this is info on tip 8', hexCode: '#A4D0DA' },
  { title: 'tip 9', description: 'this is info on tip 9', hexCode: '#A5D8DA' },
];

const Tips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Tips:</Text>
      <FlatList
        data={TIPS}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Tip
            title={item.title}
            hexCode={item.hexCode}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Tips;
