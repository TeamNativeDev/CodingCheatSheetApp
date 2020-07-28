import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import Tip from '../components/Tip';

const Tips = ({ route }) => {
  const { color, id } = route.params;
  const [tips, setTips] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(tips);

  // const TIPS = [
  //   {
  //     title: 'The title for a fake tip 1',
  //     description:
  //       'this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough.',
  //     code_snippet: 'rails new <YOURAPPNAME> --api --database=postgres',
  //     votes: [1, 3, 56, 6, 7, 5],
  //   },
  //   {
  //     title: 'The title for a fake tip 2',
  //     description:
  //       'this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough.',
  //     code_snippet: 'rails new <YOURAPPNAME> --api --database=postgres',
  //     votes: [1, 3, 56, 6, 7, 5],
  //   },
  //   {
  //     title: 'The title for a fake tip 3',
  //     description:
  //       'this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough.',
  //     code_snippet: 'rails new <YOURAPPNAME> --api --database=postgres',
  //     votes: [1, 3, 56, 6, 7, 5],
  //   },
  //   {
  //     title: 'The title for a fake tip 4',
  //     description:
  //       'this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough. this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough.',
  //     code_snippet: 'rails new <YOURAPPNAME> --api --database=postgres',
  //     votes: [1, 3, 56, 6, 7, 5],
  //   },
  //   {
  //     title: 'The title for a fake tip 5',
  //     description:
  //       'this is a fake description that i am tryuing to make really long so i have something to scroll wiith aND can learn how scrollView work in react native. Great hopefully trhis is long enough.',
  //     code_snippet: 'rails new <YOURAPPNAME> --api --database=postgres',
  //     votes: [1, 3, 56, 6, 7, 5],
  //   },
  // ];

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
      <View>
        <TextInput onChangeText={(text) => setInput(text)} value={input} />
      </View>
      <FlatList
<<<<<<< HEAD
        data={filter}
=======
        scrollEnabled={true}
        data={tips}
>>>>>>> e3d98d7cc9badcd82e9faae29a6fe88db610a0f1
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Tip {...item} hexCode={color} />}
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
