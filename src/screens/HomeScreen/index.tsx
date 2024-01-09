import React from 'react';
import {View, Text} from 'react-native';

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Nhóm 14</Text>
      <Text style={{textAlign: 'center', paddingHorizontal: 10}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, numquam
        eaque! Ad, et! In, provident? Suscipit numquam quis error, ad hic
        aspernatur dolore excepturi, natus incidunt rem cum, ab quae!
      </Text>
    </View>
  );
};

export default HomeScreen;
