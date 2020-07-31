/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Tip from '../components/Tip';
import FloatLabelInput from '../components/FloatLabelInput';

import AppButton from '../components/AppButton';

const Tips = ({ route, navigation }) => {
  const { color, id } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(tips);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      flex: 1,
    },

    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'red',
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
      <AppButton
        style={styles.button}
        onPress={() => navigation.navigate('TipModal', { ...route.params })}
      >
        Add your brand new learned Tip
      </AppButton>
    </View>
  );
};

export default Tips;
