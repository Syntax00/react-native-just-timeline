import moment from 'moment';

export default [
  {
    title: {
      content: 'Item Deleted Event',
      style: {
        color: '#d2584b',
      },
    },
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
    title: {
      content: 'Item Added Event',
      style: {
        color: '#00b48b',
      },
    },
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
    title: {
      content: 'Item Edited Event',
      style: {
        color: '#49acd1',
      },
    },
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
    title: {
      content: 'Item Expiring Event',
      style: {
        color: '#fccd05',
      },
    },
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
