import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText style={styles.getStartedText}>{path}</MonoText>
        </View>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: '5%',
    // marginHorizontal: 50,
  },
  logo: {
    height: 90,
    width: 250,
    marginLeft: 20,
    marginTop: 20,
  },
  homeScreenFilename: {
    backgroundColor: 'white',
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    color: 'black',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 50,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
