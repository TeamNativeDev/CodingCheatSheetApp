import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import FloatLabelInput from '../components/FloatLabelInput';
import AppButton from '../components/AppButton';

const TipModal = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snippet, setSnippet] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const { id, title: categoryTitle, color } = route.params;

  const handleSubmit = () => {
    const configObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        tip: {
          title,
          description,
          code_snippet: snippet,
          category_id: id,
          more_info: moreInfo,
          user_id: 10,
        },
      }),
    };
    // fetch('http://localhost:3000/api/v1/tips', configObject)
    fetch(
      'https://flatiron-cheat-sheet.herokuapp.com/api/v1/tips',
      configObject,
    )
      .then((data) => data.json())
      .then((json) => {
        if (json.message === 'ok') {
          navigation.navigate('Tips', { data: json.data, ...route.params });
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
        secondLabel="Url to an other resource"
      />
      <AppButton style={styles.button} onPress={() => handleSubmit()}>
        Send, your new {categoryTitle} Tip
      </AppButton>
    </KeyboardAvoidingView>
  );
};

export default TipModal;
