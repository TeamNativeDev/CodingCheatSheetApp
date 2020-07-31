/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Tip from '../components/Tip';
import FloatLabelInput from '../components/FloatLabelInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { borderRadius, shadow } from '../styles/MainStyles';
import AppButton from '../components/AppButton';

const Tips = ({ route, navigation }) => {
  const { color, id } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(tips);

  // console.warn(props);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchTips();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTips();
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
        onPress={() => navigation.navigate('TipModal')}
      >
        Add your brand new learned Tip
      </AppButton>
    </View>
  );
};

export default Tips;
