// import firebase from '../firebaseDB';
import React from 'react';
import {View, Text, Image} from 'react-native';
import { Icon } from 'react-native-elements';

export const Post = () => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/profile-pic.png')} />
          <Text style={styles.boldText}>sallyscloset</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.boldText}>$3/day</Text>
        </View>
      </View>
      <Image
        source={require('../assets/item-image.png')}
        style={{width: '100%'}}
      />
      <View style={styles.sectionActions}>
        <Icon name="heart" />
      </View>
    </View>
  );
};

const styles = {
  centerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '500',
    margin: 10,
  },
  sectionActions: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
};
