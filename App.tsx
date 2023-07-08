import React, {useCallback, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';

import {ThemeProvider, useTheme} from '@shopify/restyle';
import theme, {Theme} from './src/theme';
import Text from './src/components/text';
import Box from './src/components/box';
import HorizontalLine from './src/components/horizontal-line';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <Box gap="s">
      <Text variant="heading">{title}</Text>
      <Text variant="subheading">{children}</Text>
    </Box>
  );
}

const fetchFakeData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API request
    setTimeout(() => {
      const randomNumber = Math.random();

      // Simulating a successful response
      const responseData = {
        data: "That's a very good question. The meaning of life is to worship Allah.",
      };

      resolve(responseData);
    }, 2000); // Simulating a 2-second delay
  });
};

function App(): JSX.Element {
  const appTheme = useTheme<Theme>();

  const backgroundStyle = {
    backgroundColor: appTheme.colors.White,
  };
  const screenHeight = useWindowDimensions().height;

  const [text, onChangeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isTimeoutSet, setIsTimeoutSet] = useState(false);

  // creat callback to a async function
  const callDialogFlow = useCallback(async () => {
    setLoading(true);
    setAnswer('');
    setQuestion(text);
    setIsTimeoutSet(true); // Set the timeout status

    // Set a timeout of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // Code to be executed after the timeout
      setIsTimeoutSet(false); // Reset the timeout status
      // Add any additional code you want to execute after the timeout
    }, 2000);

    const islamicQuestionsAndAnswers = [
      {
        question: 'What is the meaning of Islam?',
        answer:
          'Hi. The word "Islam" means submission to the will of Allah (God).',
      },
      {
        question: 'Who is the final prophet in Islam?',
        answer:
          'The final prophet in Islam is Prophet Muhammad (peace be upon him).',
      },
      {
        question: 'What is the book of Islam called?',
        answer: 'Hello. The holy book of Islam is called the Quran.',
      },
      {
        question: 'What are the pillars of Islam?',
        answer:
          'The five pillars of Islam are Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage).',
      },
      {
        question: 'What is the significance of Ramadan in Islam?',
        answer:
          'Ramadan is the ninth month of the Islamic lunar calendar and is observed by Muslims worldwide as a month of fasting, prayer, self-reflection, and increased devotion.',
      },
      {
        question: 'What is the Kaaba?',
        answer:
          'That is a great question. The Kaaba is a black cube-shaped structure located in Mecca, Saudi Arabia. It is considered the most sacred site in Islam and is the direction towards which Muslims pray.',
      },
      {
        question: 'What is the concept of Jihad in Islam?',
        answer:
          "Jihad, in its true meaning, refers to the inner struggle to maintain faith and do good deeds. It can also refer to the defense or protection of oneself, others, or one's faith.",
      },
      {
        question: 'What is the significance of the Hajj pilgrimage?',
        answer:
          'Hajj is an annual Islamic pilgrimage to Mecca that is mandatory for adult Muslims who are physically and financially capable. It is considered one of the five pillars of Islam.',
      },
      {
        question: 'What are the major branches of Islam?',
        answer:
          'The major branches of Islam are Sunni and Shia. The majority of Muslims worldwide are Sunni, while Shia Muslims constitute a significant minority.',
      },
      {
        question: 'What is the Islamic concept of Tawheed?',
        answer:
          'Tawheed is the belief in the oneness of Allah and is the most fundamental concept in Islam. It emphasizes the unity and uniqueness of God.',
      },
    ];

    const response = islamicQuestionsAndAnswers.find(
      item => item.question === text,
    );

    setLoading(false);

    if (response != null && response) {
      setAnswer(response.answer);
    } else {
      setAnswer(
        "Sorry, I haven't learned the answer to that question yet. I'm still learning! 😅",
      );
    }

    // console.log(response);
  }, [text]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Box
            height={screenHeight}
            marginHorizontal="screenMargin"
            justifyContent="space-between"
            marginTop="l"
            gap="m">
            <Box gap="l" flex={2}>
              <Section title="Welcome to Chat Islam AI 👋">
                Ask me a question, and I will try to answer it based on my
                training knowledge.
              </Section>
              <HorizontalLine />
              <Box gap="s">
                {!isTimeoutSet && question === '' && (
                  <Text variant="question">
                    No question asked yet. Ask me a question!
                  </Text>
                )}

                {!isTimeoutSet && question !== '' && (
                  <Text variant="question">Q: {question}</Text>
                )}

                {!isTimeoutSet && answer !== '' && (
                  <Text variant="answer">A: {answer}</Text>
                )}

                {isTimeoutSet && (
                  <ActivityIndicator
                    size="large"
                    color={theme.colors.Blue500}
                  />
                )}
              </Box>
            </Box>

            <Box flex={1} gap="s">
              <Text variant="heading3">Your question</Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder='e.g. "What is the meaning of life?"'
              />
              <Button
                onPress={callDialogFlow}
                title="Ask"
                color={theme.colors.Blue500}
                accessibilityLabel="Learn more about this purple button"
              />
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: theme.spacing.xl4,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: theme.colors.dimBorder,
  },
});

export default App;
