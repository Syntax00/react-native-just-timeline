import React from 'react';
import {View, Text} from 'react-native';
import {Timeline} from 'react-native-just-timeline';

import data from './Example2.data';
import styles from './Example2.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Customized Timline 1</Text>
    <View style={styles.underline} />
  </View>
);

const Example2 = () => {
  return (
    <View style={styles.exampleContainer}>
      <Timeline TimelineHeader={TimelineHeader} data={data} />
    </View>
  );
};

export default Example2;
