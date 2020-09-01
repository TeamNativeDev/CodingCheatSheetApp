import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatLabelInput from './FloatLabelInput';
import { connect } from 'react-redux';
import Tip from './Tip';

const Profile = (props) => {
  const [username, setUsername] = useState(props.user.username);
  const [userEmail, setUserEmail] = useState(props.user.email);
  const [bio, setBio] = useState(props.user.bio);

  const findColor = (categories, id) => {
    let output = categories.find((cat) => cat.id === id);
    return output?.color;
  };

  return (
    <SafeAreaView>
      <Text>User Profile</Text>
      <FloatLabelInput
        value={username}
        setValue={setUsername}
        // Bug on label and on not editable
        mainLabel="Username"
        autoFocus={false}
      />
      <FloatLabelInput
        value={userEmail}
        setValue={setUserEmail}
        mainLabel="Your Email"
        autoFocus={false}
      />
      <FloatLabelInput
        value={bio}
        setValue={setBio}
        mainLabel="Write something about you"
        multiline={true}
        numberOfLines={3}
        autoFocus={false}
      />

      <View>
        <Text>My Tips</Text>
      </View>

      <FlatList
        data={props.user.tips}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Tip
            tip={item}
            color={findColor(props.categories, item.category_id)}
            {...props}
          />
        )}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = ({ authStore, categoriesStore }) => ({
  user: authStore.user,
  jwt: authStore.jwt,
  categories: categoriesStore.categories,
});

export default connect(mapStateToProps)(Profile);
