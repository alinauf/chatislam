import React, {FC} from 'react';
import Box from './box';
import {SpacingProps} from '@shopify/restyle';
import {Theme} from '../theme';

const HorizontalLine: FC<SpacingProps<Theme>> = props => (
  <Box height={1} backgroundColor="dimBorder" {...props} />
);

export default HorizontalLine;
