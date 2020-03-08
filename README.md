# react-native-just-timeline
React Native's customizable, RTL-supported, elegant, lazy-loading-ready Timeline component

![React Native Just Time's Banner](https://i.imgur.com/ShVLzEY.png)


# Overview
React Native Just Timeline is a package intended to provide an elegant, highly flexible and customizable, performant solution to render a sequence of events, taking in mind the support for RTL orientation and the package was developed with that concern in mind.
So, this package has the following as its major concerns:
1. Support for RTL
2. Clean design
3. Flexibility to customize that design
4. Perfomance, by providing the ability to lazy-load
5. Lightweight

# Installation
The installation for the Timeline itself is pretty straightforward, just:
```javascript
npm install react-native-just-timeline
```

However, ```react-native-vector-icons``` is internally used to provided the icons, so you'll have to make sure it's correctly installed in your project and properly linked, or otherwise, **an error would pretty much occur**, e.g. _Unable to resolve 'FontAwesome'_.

# Usage
Actually, to get the Timeline up and running, all you need to do is to call the component ```Timeline``` and provide it with a ```data``` array of objects. Every object represents a timeline event or row. The basic ```data``` shape to get the default Timeline functionality and styling is:

```javascript
const BasicTimeline = () => {
  const data = [
    // First row in the Timeline
    {
      title: {
        content: 'Event One Title',
      },
      description: {
        content: 'Event One Description',
      },
      time: {
        content: moment().format('ll'),
      },
    },

    // Second row in the Timeline
    {
      title: {
        content: 'Event Two Title',
      },
      description: {
        content: 'Event Two Description',
      },
      time: {
        content: moment().format('ll'),
      },
    },

    // You got the idea..
    {
      title: {
        content: 'Event Three Title',
      },
      description: {
        content: 'Event Three Description',
      },
      time: {
        content: moment().format('ll'),
      },
      icon: {
        content: 'pencil',
      },
    }
  ];

  return (
    <View style={styles.container}>
      <Timeline data={data} />
    </View>
  );
};

```

This code gets you the default basic Timeline, like below:
![Basic Timeline](https://i.imgur.com/Z32luWP.png)

The ```title```, ```description```, ```time```, and ```icon``` are objects because we can provide each of them with another property that is adjacent to ```content``` for styling ```style```, and it accepts normal styling properties and is used to override the default styling of each of them, e.g.:
```javascript
  const data = [
    {
      title: {
        content: 'Event One Title',
        style: {
          color: '#fff',
          backgroundColor: '#222',
        }
      },
      description: {
        content: 'Event One Description',
        style: {
          color: 'green',
        }
      },
      time: {
        content: moment().format('ll'),
        style: styles.time,
      },
    },
    ...
  ];
```

