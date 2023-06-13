import { Rating } from '@mui/material';
import { memo } from 'react';

type IconSize = 'small' | 'large';

type StarRating = {
  rating: number;
  precision?: number;
  size?: IconSize;
};

const StarRating: React.FC<StarRating> = ({
  rating,
  precision = 0.5,
  size = 'small',
}: StarRating) => (
  <Rating
    name="rating"
    size={size}
    value={+rating}
    precision={precision}
    readOnly
  />
);

export default memo(StarRating);
