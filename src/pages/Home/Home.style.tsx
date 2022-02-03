import styled from 'styled-components';
import { colorPalette, getSpacing } from 'stylesheet';

export const StyledMediaList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
StyledMediaList.displayName = 'StyledMediaList';

export const StyledSearchContainer = styled.div`
  margin: ${getSpacing(8)} 0;
  align-items: center;
`;
StyledSearchContainer.displayName = 'StyledSearchContainer';

export const StyledEmptyList = styled.h2`
  margin: ${getSpacing(8)} 0;
  color: ${colorPalette.white};
`;
StyledEmptyList.displayName = 'StyledEmptyList';
