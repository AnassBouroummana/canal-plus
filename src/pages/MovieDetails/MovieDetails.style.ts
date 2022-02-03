import styled from 'styled-components';
import { colorPalette, fontWeight, fontSize, getSpacing } from 'stylesheet';
import { IMG_BASE_PATH } from 'utils/constants';
interface BachDropProps {
  $backDrop?: string;
}
export const StyledMovieContainer = styled.div<BachDropProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  ${(props) => props.$backDrop && `background-image : url(${IMG_BASE_PATH}${props.$backDrop})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 60vh;
`;

export const StyledTitle = styled.div`
  font-size: ${fontSize.XLarge};
  font-weight: ${fontWeight.bold};
  color: white;
  padding: ${getSpacing(4)};
  background: ${colorPalette.primary};
  opacity: 0.7;
`;

export const StyledDetails = styled.div`
  color: white;
`;
export const StyledMovieName = styled.h1`
  font-size: ${fontSize.large};
`;
export const StyledMovieOverview = styled.p`
  font-size: ${fontSize.small};
`;
