import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Tip from '../Tip';
import Gradient from '../../helpers/Gradient';
import { absoluteCenter } from '../../styles/MainStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = (props) => {
  const { user, categories } = props;
  const _findColor = (catArray, id) => {
    let output = catArray.find((cat) => cat.id === id);
    return output?.color;
  };

  const _likes = (array) =>
    array ? array.reduce((acc, tip) => acc + tip.votes.length, 0) : 0;

  return (
    <>
      <Gradient />
      <SafeAreaView style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/profileIcon.png')}
          />
          <View style={absoluteCenter}>
            <Text style={styles.username}>{user.username.toUpperCase()}</Text>
            <View style={styles.stats}>
              <View style={absoluteCenter}>
                <Image
                  style={styles.like}
                  source={require('../../assets/code.png')}
                />
                <Text style={styles.text}>{user.tips?.length || 0} TIPS</Text>
              </View>
              <View style={absoluteCenter}>
                <Image
                  style={styles.like}
                  source={require('../../assets/like.png')}
                />
                <Text style={styles.text}>{_likes(user.tips)} Likes</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tipsContainer}>
          {user.tips ? (
            <FlatList
              data={user.tips}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <Tip
                  tip={item}
                  color={_findColor(categories, item.category_id)}
                  {...props}
                />
              )}
            />
          ) : (
            <Text>Here would be the tips you created!</Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
const mapStateToProps = ({ authStore, categoriesStore }) => ({
  user: authStore.user,
  categories: categoriesStore.categories,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    ...absoluteCenter,
    flex: 2,
  },
  tipsContainer: {
    flex: 3,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 5,
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    padding: 10,
  },
  like: {
    height: 50,
    width: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    padding: 10,
  },
});

export default connect(mapStateToProps)(Profile);
