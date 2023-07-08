// Imports the Dialogflow library
import dialogflow, {protos} from '@google-cloud/dialogflow';
type IContext = protos.google.cloud.dialogflow.v2.IContext;

// projectId: ID of the GCP project where Dialogflow agent is deployed
const projectId: string = 'chatislam';
const sessionId = '123456';

const query = 'hello';

const languageCode = 'en';

const privateKey =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCe0wvn/KyugtIF\nl1CVJRFVR/YAEz26WPu6t62iLhytEAvZrJsmLPx3XCGgLUUR8zsbHYksrXlB/yVq\n8TJv/9XZGAvmDOIPiyT9hJoMY73aNUCHb6dCgrJf/KzOg2uf8atSHvtCM9KuBfFc\nb49dx4aHiAfSc66ccagBSHCSjlXbKc9b3RXW0WhNU/e4SHaGsSZnpO2pYdbvB/NT\n4aiztFOrB09SllchYRkd7mwoGwzmdQb4coqUgK2bYkXJWhvOOBxl2B+3xuhV43cV\nUFzwuYdwceD2L/hWnXKjYVsSp+H8oNOXs9voaiSZvU/iYO14mh7O4GilY1sE3g6y\nxOg9fYrLAgMBAAECggEAMPsuY1PCH6m5wr6pO+3sHAxu2hQVB+jUbX+jHW6yKk9W\nEEISsSHTlK4FssPzVrdYJaMkwHIZgNiCvin3n6HbXjHzzXVwrFGBzWu9JJAIJ4kf\nxwUQpMrw3vhqhN/z66ZY6yEh5QdddIzhpFvFb6sOmrLBks5ZbecBZK/mA9TAtq+A\nVxqOfEeHIg782nJgvYBl5oYPqSXWi8b/uU9s9JYhyL/gFV8hlN0OAqqPqUP1XHfk\nyxSadZLpwghnR05YUXdN5ZWN6XFfdtoxBxCowKqPkKNfWD51nLwuoWPDL/Ae4L23\nI6nwj1Px49YjYT9B/i2JXiJGDz/CS8+rE2/NvPFvBQKBgQDPYemb4V/8Chy2+loF\nD0ljqrdzO7PQjc9bOTV6d1gCjjslw2QlE1hCd88SwGWmn9iiiWa/tsEQv7rZ8W2D\n+RYmAQZ28VIzT2A05OuW55LqZOtCL9o3WLum8ViKou6fn8NK3iR/3enbR3M2J2wr\nP1nKnY0lPoSFpm6Z8gKZCQyCzwKBgQDEDuoqbKFnLRFU85G5rvg0pRP0k8XhBQ/x\nQ1KIgbGJJG1B+FWUKOqgDJCKqMXJrHL4k4gtz6pa2XxtwN0zx4i68nUw1yIrgdiy\n7sS4pMMUpegpZzv/0BpoiC/oMgX+Fo+tZqQCOpzyaoNPctCYFAGhnj0m+PtmtGTe\nYVWgRvNnRQKBgQCbMiYWHsqrHpIwqRg3EyKT8M1K8lH18DpOhXitBqUZfIFtGFVY\nnap+S5Tu7obj9Fm2AWegb076jtFxioivq/fURw4kcyJV/b/8tZhNHU5IFXAt3wvK\nQaBlJdZiId68HF6VJ7te6Z66GDVzQHtlvgofZFqdlbStJEk+8erZxfjT5wKBgBtm\nVjV9nwTzWHO94oTHviplU6efq0zqTzMRjIxFS9F1xMsucI9XNIsPlne6ZIHt1teE\njsiQOCegM3KHPKLK5QHzdotP1Zes+uLu2ZFQfW76TLrUkZ8Lr1Uii0dxDkNXVdcO\n/CbPmDWMyzMkQaCvUxcKLVOwAjp1RY+KnNPcdpHdAoGBAMrQspzqQNBITVYYfJfP\nvDYfjMEQb/blLYwEGRAqN4qf8euFLKdOiA8qMqcBMIAk/wBA8/wjJck+WbDNnHEp\naPnDBValOYKi+/nQ23/XKPfIM9v2ydWoQyl+OaVocRNmggad9raTRtUzt1f1ic6U\nhW/GZYOcIGgdU0DTdVSRKP0+\n-----END PRIVATE KEY-----\n';

let config = {
  credentials: {
    private_key: privateKey,
    client_email: 'chatislam@chatislam.iam.gserviceaccount.com',
  },
};

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient(config);

export const sendTextMessageToDialogFlow = async (
  textMessage: string,
  sessionId: string,
) => {
  // Define session path
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId,
  );
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: textMessage,
        languageCode: languageCode,
      },
    },
  };
  try {
    let responses = await sessionClient.detectIntent(request);
    console.log(
      'DialogFlow.sendTextMessageToDialogFlow: Detected intent',
      responses,
    );
    return responses;
  } catch (err) {
    console.error('DialogFlow.sendTextMessageToDialogFlow ERROR:', err);
    throw err;
  }
};
