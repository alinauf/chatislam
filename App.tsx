import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ThemeProvider, useTheme} from '@shopify/restyle';
import theme, {Theme} from './src/theme';
import Text from './src/components/text';
import Box from './src/components/box';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <Box marginTop="l" gap="s" marginHorizontal="screenMargin">
      <Text variant="heading">{title}</Text>
      <Text variant="subheading">{children}</Text>
    </Box>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const appTheme = useTheme<Theme>();

  const backgroundStyle = {
    backgroundColor: appTheme.colors.White,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Box
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Welcome to Chat Islam AI">
              Ask me a question, and I will try to answer it based on my
              training knowledge.
            </Section>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
