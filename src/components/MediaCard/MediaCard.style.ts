import { Card, Typography } from '@mui/material';
import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

export const StyledCard = styled(Card)`
  && {
    margin: ${getSpacing(3)};
    max-width: 300px;
    min-width: 200px;
    display: flex;
    flex: 2 0 21%;
    flex-direction: column;
    cursor: pointer;
  }
`;
StyledCard.displayName = 'StyledCard';

export const StyledOverview = styled(Typography)`
  && {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
StyledOverview.displayName = 'StyledOverview';
