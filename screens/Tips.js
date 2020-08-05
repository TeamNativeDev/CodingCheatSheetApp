/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Tip from '../components/Tip';
import FloatLabelInput from '../components/FloatLabelInput';
import * as SecureStore from 'expo-secure-store';
import AppButton from '../components/AppButton';

const Tips = ({ route, navigation }) => {
  const { color, id, data = null } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(tips);
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);

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
      backgroundColor: color,
    },
  });

  useEffect(() => {
    if (data) {
      setTips((prevState) => [data, ...prevState]);
    }
    async function checkLogin() {
      const userData = await SecureStore.getItemAsync('user');
      console.log(userData);
      if (userData) {
        const userObject = await JSON.parse(userData);
        setUserId(userObject.id);
        setIsLogin(true);
      }
    }
    checkLogin();
  }, [data]);

  const fetchTips = useCallback(async () => {
    const result = await fetch(
      // `http://localhost:3000/api/v1/categories/${id}`,
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
        onPress={() => navigation.navigate('TipModal', { ...route.params, id })}
      >
        Add your brand new learned Tip
      </AppButton>
    </View>
  );
};

export default Tips;
