import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Library from '../screens/Library';
import SvgTabHome from '../icons/Svg.TabHome';
import SvgTabSearch from '../icons/Svg.TabSearch';
import { gStyle } from '../constants';

export default function SideBar() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <View style={styles.homeCardBg}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={gStyle.flexRowCenterAlign}>
            <View style={gStyle.p2}>
              <SvgTabHome />
            </View>
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={gStyle.flexRowCenterAlign}>
            <View style={gStyle.p2}>
              <SvgTabSearch />
            </View>
            <Text style={styles.text}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={gStyle.flex1}>
        <Library style={styles.homeCardBg} />
      </View>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  homeCardBg: {
    backgroundColor: '#121212',
    borderRadius: 8,
    margin: 8,
    marginBottom: 0
  }
});
