import * as React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, gStyle, images } from '../constants';

function TracksHorizontal({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {console.log(data)}
      <FlatList
        contentContainerStyle={styles.containerContent}
        data={data}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Album', { title: item.album })}
            style={styles.item}
          >
            <View style={styles.image}>
              {item.image && (
                <Image source={images[item.image]} style={styles.image} />
              )}
            </View>
            <Text style={styles.trackTitle}>{item.trackTitle}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

TracksHorizontal.propTypes = {
  // required
  data: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 16
  },
  item: {
    marginRight: 16,
    width: 148
  },
  image: {
    height: 148,
    width: 148
  },
  trackTitle: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    marginTop: 4,
    textAlign: 'center'
  },
  artist: {
    ...gStyle.textSpotify12,
    color: colors.white,
    marginTop: 4,
    textAlign: 'center'
  }
});

export default TracksHorizontal;
