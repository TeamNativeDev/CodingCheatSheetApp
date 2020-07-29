/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import Tip from '../components/Tip';
import FloatLabelInput from '../components/FloatLabelInput';

const Tips = ({ route }) => {
  const { color, id } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);
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

  const fetchTips = useCallback(async () => {
    const result = await fetch(
      `https://flatiron-cheat-sheet.herokuapp.com/api/v1/categories/${id}`,
    );
    const fetchedTips = await result.json();
    setTips(fetchedTips);
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchTips();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchTips();
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
      <FloatLabelInput
        mainLabel="Search your Favorite Tip"
        // if second label is not given it will use main
        secondLabel="Let's discover!!"
        value={input}
        setValue={setInput}
      />
      <FlatList
        data={filter}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Tip {...item} hexCode={color} />}
        refreshing={isRefreshing}
        onRefresh={() => handleRefresh()}
      />
    </View>
  );
};

export default Tips;
