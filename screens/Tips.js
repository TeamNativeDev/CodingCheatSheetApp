/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import Tip from '../components/Tip';
import FloatLabelInput from '../components/FloatLabelInput';
import * as SecureStore from 'expo-secure-store';
import AppButton from '../components/AppButton';
import { Entypo } from '@expo/vector-icons';
import BASEURL from '../helpers/BaseUrl';
import { connect } from 'react-redux';
import Gradient from '../components/Gradient';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Tips = ({ route, navigation, isLogin }) => {
  const { color, id, data = null } = route.params;
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
      backgroundColor: color,
    },
  });

  useEffect(() => {
    if (data) {
      setTips((prevState) => [data, ...prevState]);
    }
  }, [data]);

  const fetchTips = useCallback(async () => {
    const result = await fetch(BASEURL + `categories/${id}`);
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

  const y = new Animated.Value(0);

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  return (
    <View style={styles.container}>
      <Gradient />
      <FloatLabelInput
        mainLabel="Search your Favorite Tip"
        // if second label is not given it will use main
        secondLabel="Let's discover!!"
        value={input}
        setValue={setInput}
      />
      <AnimatedFlatList
        scrollEventThrottle={16}
        data={filter}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ index, item }) => (
          <Tip {...item} index={index} y={y} hexCode={color} />
        )}
        refreshing={isRefreshing}
        onRefresh={() => handleRefresh()}
        {...{ onScroll }}
      />
      <AppButton
        style={styles.button}
        onPress={() =>
          isLogin
            ? navigation.navigate('TipModal', { ...route.params, id })
            : navigation.navigate('Auth')
        }
      >
        <Entypo name="add-to-list" size={24} color="black" /> Add your brand new
        learned Tip
      </AppButton>
    </View>
  );
};
const mapStateToProps = ({ authStore }) => ({
  isLogin: authStore.isLogin,
});

export default connect(mapStateToProps)(Tips);
