import React from 'react';
import {View, Text} from 'react-native';
import {Timeline} from 'react-native-just-timeline';

import data from './Example4.data';
import styles from './Example4.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Customized Timline 3</Text>
    <View style={styles.underline} />
  </View>
);

const Example4 = () => {
  return (
    <View style={styles.exampleContainer}>
      <Timeline TimelineHeader={TimelineHeader} data={data} />
    </View>
  );
};

export default Example4;
