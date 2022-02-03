import styled from 'styled-components';
import { colorPalette, fontSize, getSpacing } from 'stylesheet';

export const StyledFooter = styled.div`
  margin-top: ${getSpacing(3)};
  text-align: center;
  border-top: 2px solid ${colorPalette.primary};
  color: ${colorPalette.white};
  padding: ${getSpacing(3)};
  font-size: ${fontSize.small};
`;
