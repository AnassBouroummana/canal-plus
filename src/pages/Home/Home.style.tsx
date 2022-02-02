import styled from 'styled-components';
import {
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from 'stylesheet';

export const HomeContainer = styled.div`
  padding: ${getSpacing(20)};
  background: ${colorPalette.secondary};
`;
HomeContainer.displayName = 'HomeContainer';

export const Title = styled.h1`
  color: ${colorPalette.white};
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.main};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  margin-bottom: ${getSpacing(10)};
  text-align: center;
`;
Title.displayName = 'Title';

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
