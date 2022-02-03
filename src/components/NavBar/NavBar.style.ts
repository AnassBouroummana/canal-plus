import { Button } from '@mui/material';
import styled from 'styled-components';
import { colorPalette, fontWeight, fontFamily, fontSize, lineHeight, getSpacing } from 'stylesheet';

export const StyledTitle = styled(Button)`
  && {
    color: ${colorPalette.white};
    font-weight: ${fontWeight.bold};
    font-family: ${fontFamily.main};
    font-size: ${fontSize.XLarge};
    line-height: ${lineHeight.medium};
    margin-bottom: ${getSpacing(10)};
    text-align: center;
  }
`;
StyledTitle.displayName = 'StyledTitle';
