import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import FloatLabelInput from '../components/FloatLabelInput';
import AppButton from '../components/AppButton';

const TipModal = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snippet, setSnippet] = useState('');
  const { id, title: categoryTitle, color } = route.params;

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
      <AppButton style={styles.button} onPress={() => console.warn('hello')}>
        Send, your new {categoryTitle} Tip
      </AppButton>
    </KeyboardAvoidingView>
  );
};

export default TipModal;
