import React from 'react';
import {StyleSheet, View} from 'react-native';
import Example1 from './Example1/Example1';

const App = () => {
  const examples = {
    '1': <Example1 />,
  };
  return <View style={styles.appContainer}>{examples['1']}</View>;
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
});

export default App;
