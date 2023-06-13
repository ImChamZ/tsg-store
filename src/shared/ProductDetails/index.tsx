import { Chip, Stack, Typography } from '@mui/material';
import PriceFormat from '../PriceFormat';
import StarRating from '../StarRating';
import { memo } from 'react';

type ProductDetails = {
  description: string;
  title: string;
  price: number;
  rating: number;
  stock: number;
};

const ProductDetails: React.FC<ProductDetails> = ({
  description,
  title,
  price,
  rating,
  stock,
}) => (
  <Stack direction="column" spacing={1}>
    <Typography variant="body1" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <PriceFormat price={price} />
    </Typography>
    <StarRating rating={rating} />
    <Chip
      size="small"
      sx={{ width: '100px' }}
      label={stock > 0 ? 'In stock' : 'Out of stock'}
      color={stock > 0 ? 'success' : 'error'}
    />
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Stack>
);

export default memo(ProductDetails);
