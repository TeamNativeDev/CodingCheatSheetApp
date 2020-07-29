import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import Tip from '../components/Tip';

const Tips = ({ route }) => {
  const { color, id } = route.params;
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(tips);
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    floatLabel: {
      paddingHorizontal: 5,
      paddingTop: 18,
      marginBottom: 10,
    },
    label: {
      position: 'absolute',
      left: 10,
      top: isFocused ? 0 : 18,
      fontSize: isFocused ? 16 : 20,
      color: isFocused ? '#000' : '#555',
    },
    input: {
      paddingHorizontal: 5,
      fontSize: 20,
      borderBottomWidth: 2,
      borderBottomColor: isFocused ? 'blue' : 'black',
    },
    container: {
      paddingHorizontal: 10,
    },

    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

  useEffect(() => {
    fetch(`https://flatiron-cheat-sheet.herokuapp.com/api/v1/categories/${id}`)
      .then((resp) => resp.json())
      .then((data) => setTips(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (input === '') {
      setFilter(tips);
    } else {
      let regex = new RegExp(input, 'gi');
      let arr = tips.filter(
        (e) => e.title.match(regex) || e.description.match(regex),
      );
      setFilter(arr);
    }
  }, [input, tips]);

  return (
    <View style={styles.container}>
      <View style={styles.floatLabel}>
        <Text style={styles.label}>
          {isFocused ? "Let's discover!!" : 'Search your Favorite Tip'}
        </Text>
        <TextInput
          onChangeText={(text) => setInput(text)}
          value={input}
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <FlatList
        data={filter}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Tip {...item} hexCode={color} />}
      />
    </View>
  );
};

export default Tips;
