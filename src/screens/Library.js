import * as React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { device, gStyle } from '../constants';

// components
import LineItemCategory from '../components/LineItemCategory';
import ScreenHeader from '../components/ScreenHeader';

// mock data
import yourLibrary from '../mockdata/menuYourLibrary.json';

function Library() {
  return (
    <View style={[gStyle.container, styles.homeCardBg]}>
      <View style={styles.containerHeader}>
        <ScreenHeader title="Your Library" />
      </View>

      <FlatList
        contentContainerStyle={styles.containerFlatlist}
        data={yourLibrary}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <LineItemCategory
            icon={item.icon}
            onPress={() => null}
            title={item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  },

  homeCardBg: {
    ...Platform.select({
      web: {
        backgroundColor: '#121212',
        borderRadius: 8,
        margin: 8
      }
    })
  },
  containerFlatlist: {
    marginTop: device.iPhoneNotch ? 88 : 64
  }
});

export default Library;
