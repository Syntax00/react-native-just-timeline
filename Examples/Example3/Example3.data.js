import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

export default [
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#d2584b'}]}>
          Item Deleted Event
        </Text>
      </View>
    ),
    description: {
      content: 'Item Deleted Event Description',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'trash',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#d2584b',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#00b48b'}]}>
          Item Added Event
        </Text>
      </View>
    ),
    description: {
      content: 'Item Added Event Description',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'check',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#00b48b',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#49acd1'}]}>
          Item Edited Event
        </Text>
      </View>
    ),
    description: {
      content: 'Item Edited Event Description',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'pencil',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#49acd1',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#fccd05'}]}>
          Item Expiring Event
        </Text>
      </View>
    ),
    description: {
      content: 'Item Expiring Event Description',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'clock-o',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#fccd05',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: {
      content: 'Normal Event',
    },
    description: {
      content: 'Normal Event Description',
    },
    time: {
      content: moment().format('ll'),
    },
  },
  {
    title: {
      content: 'Normal Event',
    },
    description: {
      content: 'Normal Event Description',
    },
    time: {
      content: moment().format('ll'),
    },
  },
  {
    title: {
      content: 'Normal Event',
    },
    description: {
      content: 'Normal Event Description',
    },
    time: {
      content: moment().format('ll'),
    },
  },
];
