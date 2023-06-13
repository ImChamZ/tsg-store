import { Grid } from '@mui/material';
import ProductCard from '../ProductCard';
import { memo } from 'react';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductList = {
  products: Product[];
  total?: number;
  limit?: number;
  skip?: number;
};

const ProductGrid: React.FC<ProductList> = ({ products = [] }) => (
  <Grid container spacing={2} mt={0}>
    {products.map(
      ({ id, title, description, thumbnail, rating, price, stock }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          description={description}
          thumbnail={thumbnail}
          rating={rating}
          price={price}
          stock={stock}
        />
      )
    )}
    <Grid item md={4}></Grid>
  </Grid>
);

export default memo(ProductGrid);
