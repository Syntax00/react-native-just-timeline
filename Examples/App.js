import React from 'react';
import {StyleSheet, View} from 'react-native';
import Example1 from './Example1/Example1';
import Example2 from './Example2/Example2';
import Example3 from './Example3/Example3';
import Example4 from './Example4/Example4';

const App = () => {
  const examples = {
    '1': <Example1 />,
    '2': <Example2 />,
    '3': <Example3 />,
    '4': <Example4 />,
  };
  return <View style={styles.appContainer}>{examples['4']}</View>;
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
});

export default App;
