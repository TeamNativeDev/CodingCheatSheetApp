import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import FloatLabelInput from '../helpers/FloatLabelInput';
import AppButton from '../helpers/AppButton';
import BASEURL from '../helpers/BaseUrl';
import { newTip } from '../actions/authActions';
import { connect } from 'react-redux';

const TipModal = (props) => {

  const { route, navigation, jwt } = props;
  const { id, title: categoryTitle, color, tip } = route.params;

  const [title, setTitle] = useState(tip?.title || '');
  const [description, setDescription] = useState(tip?.description || '');
  const [snippet, setSnippet] = useState(tip?.code_snippet || '');
  const [moreInfo, setMoreInfo] = useState(tip?.more_info || '');

  const handleSubmit = () => {
    const configObject = {
      method: tip ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        tip: {
          title,
          description,
          code_snippet: snippet,
          category_id: id || tip.category_id,
          more_info: moreInfo,
        },
      }),
    };
    const url = BASEURL + (tip ? `tips/${tip.id}` : 'tips');
    fetch(url, configObject)
      .then((data) => data.json())
      .then((json) => {
        if (json.error) {
          Alert.alert(json.message);
        } else {
          if (tip) {
            navigation.navigate('Auth');
            // TODO update the TIP
          } else {
            props.newTip(json.data);
            navigation.navigate('Tips', { data: json.data, ...route.params });
          }
        }
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      backgroundColor: color,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <FloatLabelInput value={title} setValue={setTitle} mainLabel="Title" />
      <FloatLabelInput
        value={description}
        setValue={setDescription}
        mainLabel="Description"
        multiline={true}
        numberOfLines={5}
      />
      <FloatLabelInput
        value={snippet}
        setValue={setSnippet}
        mainLabel="Snippet"
        multiline={true}
        numberOfLines={5}
        code={true}
      />
      <FloatLabelInput
        value={moreInfo}
        setValue={setMoreInfo}
        mainLabel="Write a Url with more useful info about it"
        secondLabel="Url to another resource"
      />
      <AppButton style={styles.button} onPress={() => handleSubmit()}>
        {tip ? 'Edit your Tip' : `Send, your new ${categoryTitle} Tip`}
      </AppButton>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({ authStore }) => ({
  jwt: authStore.jwt,
});

export default connect(mapStateToProps, { newTip })(TipModal);
