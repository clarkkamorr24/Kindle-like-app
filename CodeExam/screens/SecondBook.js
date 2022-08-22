import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import RenderText from './RenderText';
import Carousel from 'react-native-snap-carousel';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width * 1);

const SecondBook = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const isCarousel = React.useRef(null);
  return (
    <>
      <View>
        <Carousel
          ref={isCarousel}
          data={route.params.data}
          renderItem={({item, index}) => {
            return (
              <RenderText
                item={item}
                index={index}
                title={'Lorem Ipsum Book2'}
              />
            );
          }}
          sliderWidth={width}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
    </>
  );
};

export default SecondBook;

const styles = StyleSheet.create({});
