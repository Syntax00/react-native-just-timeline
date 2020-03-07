import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Timeline} from 'react-native-just-timeline';
import moment from 'moment';

import CustomDialog from '../components/CustomDialog/CustomDialog';
import PopupContent from '../components/PopupContent/PopupContent';

import styles from './Example5.style';

const TimelineHeader = () => (
  <View style={styles.timelineHeadingContainer}>
    <Text style={styles.timelineHeadingTitleText}>Clickable Events</Text>
    <View style={styles.underline} />
  </View>
);

const Example5 = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const data = [
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Bakr',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/1.jpg')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: '#fff',
            }}
          />
        </View>
      ),
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Nancy',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/2.jpg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              borderWidth: 3,
              borderColor: '#FFF',
            }}
          />
        </View>
      ),
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Omar Khaled',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/4.jpg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              borderWidth: 3,
              borderColor: '#e0ffef',
            }}
          />
        </View>
      ),
    },
    {
      pressAction: () => setModalStatus(true),
      title: {
        content: 'Mohamed Ahmed',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/5.jpg')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: '#f9f0ca',
            }}
          />
        </View>
      ),
    },
    {
      title: {
        content: 'Nancy',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/2.jpg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              borderWidth: 3,
              borderColor: '#FFF',
            }}
          />
        </View>
      ),
    },
    {
      title: {
        content: 'Nancy',
      },
      description: {
        content: 'Comment goes right here',
      },
      time: {
        content: moment().format('ll'),
        style: {
          paddingTop: 8,
        },
      },
      icon: () => (
        <View>
          <Image
            source={require('../assets/images/2.jpg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              borderWidth: 3,
              borderColor: '#FFF',
            }}
          />
        </View>
      ),
    },
  ];
  return (
    <View style={styles.exampleContainer}>
      <CustomDialog
        isVisible={isModalOpen}
        dismissAction={() => setModalStatus(false)}>
        <PopupContent pressAction={() => setModalStatus(false)} />
      </CustomDialog>
      <Timeline TimelineHeader={TimelineHeader} data={data} />
    </View>
  );
};

export default Example5;
