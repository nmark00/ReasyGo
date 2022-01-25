import React from 'react';
import {View} from 'react-native';

const centerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const Center = ({children}) => {
  return <View style={centerStyle}>{children}</View>;
};
