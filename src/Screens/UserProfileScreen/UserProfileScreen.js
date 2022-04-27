import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../Themes/colors';

const UserProfileScreen = () => {
  return (
    <View>
      <Text style={styles.normalText}>UserProfileScreen</Text>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  normalText: {
    color: colors.black,
  },
});
