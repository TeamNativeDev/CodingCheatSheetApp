import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import Tip from '../Tip';
import Gradient from '../../helpers/Gradient';

const Profile = (props) => {
  const { user, categories } = props;
  const findColor = (categories, id) => {
    let output = categories.find((cat) => cat.id === id);
    return output?.color;
  };

  return (
    <View style={styles.container}>
      <Gradient />
      <View style={styles.userContainer} />
      <View style={styles.tipsContainer}>
       
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
    flex: 2,
    backgroundColor: 'yellow',
  },
  tipsContainer: {
    flex: 3,
    backgroundColor: 'red',
  },
});

export default connect(mapStateToProps)(Profile);
