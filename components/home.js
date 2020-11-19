import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './homeStyle';

export default function Home() {
  return (
    <View style={styles.MainView}>
      <View style={styles.CardTop}>
        <View style={styles.Name}>
          <View style={styles.NameBox} />
          <Text style={{marginHorizontal: 10}}> Name </Text>
          <View style={styles.NameBox} />
        </View>
      </View>

      <View style={styles.CardBottom}>
        <View style={styles.Balance}>
          <Text> Balance </Text>
        </View>
      </View>
    </View>
  );
}
