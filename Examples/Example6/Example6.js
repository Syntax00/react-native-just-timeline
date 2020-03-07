import React, {useReducer} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Timeline} from 'react-native-just-timeline';
import moment from 'moment';

import defaultData from './Example6.data';
import styles from './Example6.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>
      Infinite Scroll / Lazy Loading
    </Text>
    <View style={styles.underline} />
  </View>
);

const Example6 = () => {
  const [{loading, data}, setState] = useReducer(
    (base, next) => ({...base, ...next}),
    {
      loading: false,
      data: defaultData,
    },
  );

  return (
    <View style={styles.exampleContainer}>
      <Timeline
        TimelineHeader={TimelineHeader}
        data={data}
        TimelineFooter={() => (loading ? <ActivityIndicator /> : null)}
        onEndReached={() => {
          setState({loading: true});

          setTimeout(() => {
            setState({
              data: data.concat([
                {
                  title: {
                    content: 'New Event 1',
                  },
                  description: {
                    content: 'New Event 1 description',
                  },
                  time: {
                    content: moment().format('ll'),
                  },
                },
                {
                  title: {
                    content: 'New Event 2',
                  },
                  description: {
                    content: 'New Event 2 description',
                  },
                  time: {
                    content: moment().format('ll'),
                  },
                },
                {
                  title: {
                    content: 'New Event 3',
                  },
                  description: {
                    content: 'New Event 3 description',
                  },
                  time: {
                    content: moment().format('ll'),
                  },
                },
                {
                  title: {
                    content: 'New Event 4',
                  },
                  description: {
                    content: 'New Event 4 description',
                  },
                  time: {
                    content: moment().format('ll'),
                  },
                },
                {
                  title: {
                    content: 'New Event 5',
                  },
                  description: {
                    content: 'New Event 5 description',
                  },
                  time: {
                    content: moment().format('ll'),
                  },
                },
              ]),
              loading: false,
            });
          }, 2500);
        }}
      />
    </View>
  );
};

export default Example6;
