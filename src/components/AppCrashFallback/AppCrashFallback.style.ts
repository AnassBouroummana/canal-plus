import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';
import { colorPalette, fontFamily, fontSize, getSpacing, lineHeight } from 'stylesheet';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
Container.displayName = 'Container';

export const PageContent = styled.div`
  padding: ${getSpacing(8)} ${getSpacing(4)};
  font-family: ${fontFamily.main};
  color: ${colorPalette.secondary};
`;
PageContent.displayName = 'PageContent';

export const Title = styled.h1`
  font-size: ${fontSize.large};
`;
Title.displayName = 'Title';

export const HelperList = styled.ul`
  list-style: disc inside;
  margin-top: ${getSpacing(2)};
  line-height: ${lineHeight.medium};
`;
HelperList.displayName = 'HelperList';

export const Button = styled(LoadingButton)`
  padding: ${getSpacing(1)} ${getSpacing(2)};
`;
Button.displayName = 'Button';
