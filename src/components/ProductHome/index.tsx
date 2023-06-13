import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Product } from '../../shared/ProductGrid';
import { useFetch } from '../../hooks/useFetch';
import ProductDetails from '../../shared/ProductDetails';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers/combineReducers';
import ImageSlider from '../../shared/ImageSlider';

const colWidth = { xs: 12, sm: 6 };

const ProductHome: React.FC = () => {
  const { id } = useParams();
  const { loading, error } = useSelector((state: AppState) => state.app);

  const { data } = useFetch<Product>(`https://dummyjson.com/products/${id}`);

  const { title, images, price, rating, stock, description } = data;

  return (
    <Box>
      {!loading && !error && data?.id && (
        <Grid container spacing={2}>
          <Grid item container sx={colWidth}>
            <Box flex={1} p={2} pl={0}>
              <ImageSlider imageList={images} />
              {/* <LazyLoadImage source={thumbnail} title={title} /> */}
            </Box>
            <Box flex={1} p={2}>
              <ProductDetails
                title={title}
                description={description}
                price={price}
                rating={rating}
                stock={stock}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductHome;
