import * as React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from 'react-native'

import Carousel from 'react-native-snap-carousel'

export default class CarouselView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    }
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: 'beige',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          // ...StyleSheet.absoluteFillObject,
          height: 250,
          position: 'absolute',
          backgroundColor: 'transparent',
          // flexDirection: 'row',
          // marginBottom: 0,
          bottom: 0,
          width: '100%',
          // justifyContent: 'center',
        }}
      >
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          renderItem={this._renderItem}
          // containerCustomStyle={{ backgroundColor: 'yellow' }}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
      </View>
    )
  }
}
