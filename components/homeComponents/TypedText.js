import React, { useState } from 'react';
import TypeWriter from 'react-native-typewriter';

const greetings = [
  'Coders.',
  'Alumni.',
  'Students.',
  'Fellowships.',
  'Flatironers.',
];

const TypedText = () => {
  const [deleting, setDeleting] = useState(1);
  async function makeloop() {
    if (deleting === 1) {
      await _sleep(1000);
    }
    setDeleting((prev) => (prev === 1 ? -1 : 1));
    if (deleting === -1) {
      greetings.push(greetings.shift());
    }
  }

  return (
    <TypeWriter
      minDelay={200}
      typing={deleting}
      onTypingEnd={makeloop}
      initialDelay={1500}
    >
      {greetings[0]}
    </TypeWriter>
  );
};

export default TypedText;

function _sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
