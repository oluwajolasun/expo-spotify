import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { colors, device, func, gStyle, images } from '../constants';

// components
import TouchIcon from '../components/TouchIcon';

// context
import Context from '../context';

function WebMusicPlayer() {
  // get main app state
  const { currentSongData } = React.useContext(Context);

  // local state
  const [favorited, setFavorited] = React.useState(false);
  const [paused, setPaused] = React.useState(true);

  // ui state
  const favoriteColor = favorited ? colors.brandPrimary : colors.white;
  const favoriteIcon = favorited ? 'heart' : 'heart-o';
  const iconPlay = paused ? 'play-circle' : 'pause-circle';
  const timePast = func.formatTime(0);
  const timeLeft = func.formatTime(currentSongData.length);

  return (
    <View style={[gStyle.flexRowCenter, gStyle.flex1]}>
      <View style={gStyle.flex1}>
        <View style={gStyle.flexRow}>
          <Image source={images[currentSongData.image]} style={styles.image} />
          <View style={gStyle.flexRowSpace}>
            <View style={styles.containerSong}>
              <Text numberOfLines={1} style={styles.song}>
                {currentSongData.title}
              </Text>
              <Text style={styles.artist}>{currentSongData.artist}</Text>
            </View>
            <View style={styles.containerFavorite}>
              <TouchIcon
                icon={<FontAwesome color={favoriteColor} name={favoriteIcon} />}
                onPress={() => setFavorited(!favorited)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={gStyle.flex1}>
        <View style={styles.containerControls}>
          <TouchIcon
            icon={<Feather color={colors.greyLight} name="shuffle" />}
            onPress={() => null}
          />
          <View style={gStyle.flexRowCenterAlign}>
            <TouchIcon
              icon={<FontAwesome color={colors.white} name="step-backward" />}
              iconSize={32}
              onPress={() => null}
            />
            <View style={gStyle.pH3}>
              <TouchIcon
                icon={<FontAwesome color={colors.white} name={iconPlay} />}
                iconSize={64}
                onPress={() => setPaused(!paused)}
              />
            </View>
            <TouchIcon
              icon={<FontAwesome color={colors.white} name="step-forward" />}
              iconSize={32}
              onPress={() => null}
            />
          </View>
          <TouchIcon
            icon={<Feather color={colors.greyLight} name="repeat" />}
            onPress={() => null}
          />
        </View>
        <View style={styles.containerVolume}>
          <Slider
            minimumValue={0}
            maximumValue={currentSongData.length}
            minimumTrackTintColor={colors.white}
            maximumTrackTintColor={colors.grey3}
          />
          <View style={styles.containerTime}>
            <Text style={styles.time}>{timePast}</Text>
            <Text style={styles.time}>{`-${timeLeft}`}</Text>
          </View>
        </View>
      </View>
      <View style={gStyle.flex1}>
        <View style={styles.containerDevices}>
          <TouchIcon
            style={gStyle.p2}
            icon={<Feather color={colors.greyLight} name="speaker" />}
            onPress={() => null}
          />
          <TouchIcon
            style={gStyle.p2}
            icon={
              <MaterialIcons color={colors.greyLight} name="playlist-play" />
            }
            onPress={() => null}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    marginLeft: 30,
    marginRight: 10,
    width: 70
  },
  containerSong: {
    flex: 6
  },
  song: {
    ...gStyle.textSpotifyBold16,
    color: colors.white
  },
  artist: {
    ...gStyle.textSpotify12,
    color: colors.greyInactive
  },
  containerFavorite: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  containerTime: {
    ...gStyle.flexRowSpace
  },
  time: {
    ...gStyle.textSpotify10,
    color: colors.greyInactive
  },
  containerControls: {
    ...gStyle.flexRowSpace,
    marginTop: device.iPhoneNotch ? 24 : 8
  },
  containerDevices: {
    ...gStyle.flexRow,
    justifyContent: 'flex-end'
  }
});

export default WebMusicPlayer;
