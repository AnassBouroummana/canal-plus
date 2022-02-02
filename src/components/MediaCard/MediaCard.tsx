import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from 'logo.svg';
import { StyledCard, StyledOverview } from './MediaCard.style';
import { Media } from 'modules/Media';

interface Props {
  media: Media;
}

const getMediaImagePath = (backdrop_path: string, poster_path: string) => {
  const originPath = 'https://image.tmdb.org/t/p/original/';
  return !!backdrop_path
    ? originPath.concat(backdrop_path)
    : originPath.concat(poster_path);
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
        src={logo}
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
          Start
        </Button>
      </CardActions>
    </StyledCard>
  );
};
export default MediaCard;
