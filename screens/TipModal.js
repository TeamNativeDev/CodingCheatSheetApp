import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import FloatLabelInput from '../components/FloatLabelInput';

const TipModal = () => {
  const [title, setTitle] = useState('');
  return (
    <View>
      <Text>Hello world</Text>
      <FloatLabelInput
        value={title}
        setValue={setTitle}
        mainLabel="Tip Title"
        secondLabel="Think of Something Unique!"
      />
    </View>
  );
};

export default TipModal;
