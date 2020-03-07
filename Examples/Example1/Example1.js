import React from 'react';
import {View, Text} from 'react-native';
import {Timeline} from 'react-native-just-timeline';

import data from './Example1.data';
import styles from './Example1.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Default Timeline</Text>
    <View style={styles.underline} />
  </View>
);

const Example1 = () => {
  return (
    <View style={styles.exampleContainer}>
      <Timeline TimelineHeader={TimelineHeader} data={data} />
    </View>
  );
};

export default Example1;
