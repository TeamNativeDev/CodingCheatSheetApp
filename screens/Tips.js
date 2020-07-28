import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Tip from '../components/Tip';

const TIPS = [
  { title: 'tip 1', description: 'this is info on tip 1' },
  { title: 'tip 2', description: 'this is info on tip 2' },
  { title: 'tip 3', description: 'this is info on tip 3' },
  { title: 'tip 4', description: 'this is info on tip 4' },
  { title: 'tip 5', description: 'this is info on tip 5' },
  { title: 'tip 6', description: 'this is info on tip 6' },
  { title: 'tip 7', description: 'this is info on tip 7' },
  { title: 'tip 8', description: 'this is info on tip 8' },
  { title: 'tip 9', description: 'this is info on tip 9' },
];

const Tips = ({ route }) => {
  const { color } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={TIPS}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Tip
            title={item.title}
            hexCode={color}
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
