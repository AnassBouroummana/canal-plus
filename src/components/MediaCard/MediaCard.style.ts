import { Card, Typography } from '@mui/material';
import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

export const StyledCard = styled(Card)`
  && {
    margin: ${getSpacing(2)};
    max-width: 345px;
    display: flex;
    flex: 1 0 21%;
    flex-direction: column;
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
