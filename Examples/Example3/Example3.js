import React from 'react';
import {View, Text} from 'react-native';
import {Timeline} from 'react-native-just-timeline';

import data from './Example3.data';
import styles from './Example3.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Customized Timline 2</Text>
    <View style={styles.underline} />
  </View>
);

const Example3 = () => {
  return (
    <View style={styles.exampleContainer}>
      <Timeline
        TimelineHeader={TimelineHeader}
        data={data}
        timeContainerStyle={{display: 'none'}}
        contentContainerStyle={{flexBasis: '80%'}}
      />
    </View>
  );
};

export default Example3;
