import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledCard, StyledOverview } from './MediaCard.style';
import { Media } from 'modules/Media';
import { FormattedMessage } from 'react-intl';
import { IMG_BASE_PATH } from 'utils/constants';

interface Props {
  media: Media;
}

const getMediaImagePath = (backdrop_path: string, poster_path: string) => {
  return IMG_BASE_PATH.concat(!!backdrop_path ? backdrop_path : poster_path);
};

const MediaCard: React.FC<Props> = ({ media }) => {
  const { name, overview, backdrop_path, poster_path } = media;
  const mediapath = getMediaImagePath(backdrop_path, poster_path);
  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt="backdropImage"
        height="140"
        image={mediapath}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <StyledOverview title={overview} variant="body2" color="text.secondary">
          {overview}
        </StyledOverview>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          <FormattedMessage id="home.card.start" />
        </Button>
      </CardActions>
    </StyledCard>
  );
};
export default MediaCard;
