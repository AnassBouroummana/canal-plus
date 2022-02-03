import styled from 'styled-components';
import { colorPalette, getSpacing } from 'stylesheet';

export const PublicLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${getSpacing(8)};
  background: ${colorPalette.secondary};
`;
PublicLayoutContainer.displayName = 'PublicLayoutContainer';

export const PageContent = styled.main`
  margin: ${getSpacing(1)};
`;
PageContent.displayName = 'PageContent';
