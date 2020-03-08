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

## Basic
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

![Basic Timeline](https://i.imgur.com/aJDVOgt.png)

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

Check the ```/Examples/Example1``` and ```/Examples/Example2``` for clearer overlook and more tweaks ;)


## Render props
Render props is always a great React.js/React Native pattern that embraces reusability and customizability.
If you felt like you are kind of limited with the previous structure of ```{ content: "", style: {} }``` and need more control, you can send a function that returns a React Native component, whatsoever it is. And, we can do that on each part of the row individually without having to follow the same pattern on all of them, i.e. in the following code, we can mix up the render props in ```title``` with basic ```{ content: "", style: {} }``` on the rest.
**_You get the default style of ```title```, ```description```, ```icon```, and ```time``` as a prop to the function_```

```javascript
const RenderPropsUsage = () => {
  const data = [
  // First row in Timeline
  {
    // Here we send a function that returns a component instead of object
    title: ({ styles }) => (
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
  
  // Second row in Timeline
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
  }];
  
  return (
    <View style={styles.container}>
      <Timeline data={data} />
    </View>
  );
};
```
This code gets you something like:

![Render Props Timeline](https://i.imgur.com/23kWCC0.png)

Check the ```/Examples/Example3``` and ```/Examples/Example4``` for more.


## Clickable Rows
Well, you may face that case in which you need to perform an action on a certain event/row in the Timeline when pressing. This functionality is available, you control it on each event/row's object individually by sending a ```pressAction``` function which gets executed ```onPress```.

```javascript
const Example5 = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const data = [
    // First row in Timeline
    {
      pressAction: () => setModalStatus(true), // Gets triggered on row's press
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
    
    // Second row in Timelind
    {
      pressAction: () => setModalStatus(true), // Gets triggered on row's press
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
    }
  ];
  
  return (
    <View style={styles.exampleContainer}>
    
      {/* Toggle this modal on event/row's press */}
      <CustomDialog
        isVisible={isModalOpen}
        dismissAction={() => setModalStatus(false)}>
        <PopupContent pressAction={() => setModalStatus(false)} />
      </CustomDialog>
      
      
      <Timeline data={data} />
    </View>
  );
};
```
This code gets you something like:

![Clickable Rows Timeline](https://i.imgur.com/FnrbCBd.gif)

Check the ```/Examples/Example5``` for more.


## Lazy-loading, Infinite Scrolling
Internally, the package utilizes React Native's ```FlatList``` to manage the list of rows in a performant way. That brings us to an important hint: _you can send any props that you usually send to FlatList to JustTimeline_. However, **_some props are renamed, refer to the props table to know about that_**

So, with ```FlatList``` in mind, we can create a lazy-loadable Timeline using the exact same functionality as we might do in a normal ```FlatList```, using ```onEndReached``` function.
```onEndReached``` will be a function that creates an async call and then appends the new data to our state.
```TimelineFooter``` a prop that accepts a React Native component to display at the end/bottom of the Timeline, we use it to render a loading spinner at the end of the Timeline while fetching the data.

```javascript
const LazyLoadableTimeline = () => {
  const [{loading, data}, setState] = useReducer(
    (base, next) => ({...base, ...next}),
    {
      loading: false,
      data: defaultData, // The already-existing data that were, for instance, fetched on component mounting
    },
  );

  return (
    <View style={styles.container}>
      <Timeline
        data={data}
        TimelineFooter={() => (loading ? <ActivityIndicator /> : null)} // Loader component
        onEndReached={() => {
          // When the user reaches the end of the Timeline, set a loader
          setState({loading: true});
          
          // Your asyncronous behavious, e.g. AJAX call
          setTimeout(() => {
            // Append the new data to the state's array
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
                }
              ]),
              
              // Turn off the loader
              loading: false,
            });
          }, 2500);
        }}
      />
    </View>
  );
};

```

The previous code gets you the following behavior:

![Lazy Loading Timeline](https://i.imgur.com/JtmUBlJ.gif)

Check the ```/Examples/Example6``` for more.
