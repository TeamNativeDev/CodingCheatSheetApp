import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Category from '../components/Category';
import Gradient from '../helpers/Gradient';
import { absoluteCenter } from '../styles/MainStyles';

const Categories = (props) => {
  const { navigation, categories } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <Text style={styles.headerText}> All Categories:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Tips', item)}>
            {/* using destructuring to clean & readable code */}
            <Category {...item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...absoluteCenter,
    marginTop: 40,
    paddingHorizontal: 10,
    flex: 1,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 10,
  },
});

const mapStateToProps = ({ categoriesStore }) => ({
  categories: categoriesStore.categories,
});
export default connect(mapStateToProps)(Categories);
