import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FloatLabelInput from '../components/FloatLabelInput';

const TipModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snippet, setSnippet] = useState('');
  return (
    <View>
      <Text>Hello world</Text>
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
    </View>
  );
};

export default TipModal;
