import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import ProductDetails from '../ProductDetails';
import LazyLoadImage from '../LazyLoadImage';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };

type SxCardActionArea = {
  height: string;
  flexDirection: string;
  alignItems: string;
};

const sxCardActionArea: SxCardActionArea = {
  height: '400px',
  flexDirection: 'column',
  alignItems: 'baseline',
};

type ProductCard = {
  id: string;
  description: string;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  stock: number;
};

const ProductCard: React.FC<ProductCard> = ({
  id,
  description,
  thumbnail,
  title,
  price,
  rating,
  stock,
}) => (
  <Grid key={id} item {...colWidth} mt={0}>
    <Card>
      <Link to={`./${id}`}>
        <CardActionArea sx={sxCardActionArea}>
          <LazyLoadImage title={title} source={thumbnail} />
          <CardContent>
            <ProductDetails
              title={title}
              price={price}
              rating={rating}
              stock={stock}
              description={description}
            />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  </Grid>
);

export default memo(ProductCard);
