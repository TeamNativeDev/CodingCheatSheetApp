import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Tip from '../Tip';
import Gradient from '../../helpers/Gradient';
import { absoluteCenter } from '../../styles/MainStyles';

const Profile = (props) => {
  const { user, categories } = props;
  const findColor = (catArray, id) => {
    let output = catArray.find((cat) => cat.id === id);
    return output?.color;
  };

  return (
    <View style={styles.container}>
      <Gradient />
      <View style={styles.userContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/profileIcon.png')}
        />
        <View>
          <Text style={styles.username}>{user.username.toUpperCase()}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>4 tipss</Text>
            <Text>4 tipss</Text>
          </View>
        </View>
      </View>
      <View style={styles.tipsContainer}>
        <FlatList
          data={user.tips}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Tip
              tip={item}
              color={findColor(categories, item.category_id)}
              {...props}
            />
          )}
        />
      </View>
    </View>
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
    backgroundColor: 'yellow',
  },
  tipsContainer: {
    flex: 3,
  },
  logo: {
    width: 150,
    height: 150,
  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps)(Profile);
