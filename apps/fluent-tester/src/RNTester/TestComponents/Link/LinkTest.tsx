import * as React from 'react';
import { Alert } from 'react-native';
import { Link } from '@fluentui-react-native/link';
import { Separator } from '@fluentui-react-native/separator';
import { Stack } from '@fluentui-react-native/stack';
import { stackStyle } from '../Common/styles';
import { LINK_TESTPAGE } from './consts';
import { Text, View } from 'react-native';
import { commonTestStyles as commonStyles } from '../Common/styles';

export const LinkTest: React.FunctionComponent<{}> = () => {
  const doPress = (): void => {
    Alert.alert('Alert.', 'You have been alerted.');
  };
  return (
    <View>
      <Text style={commonStyles.section} testID={LINK_TESTPAGE}>
        Link Test Page
      </Text>
      <Separator />
      <Stack style={stackStyle}>
        <Link url="https://www.bing.com/" content="Click to navigate." />
        <Link onPress={doPress} content="Click to alert." />
      </Stack>
    </View>
  );
};