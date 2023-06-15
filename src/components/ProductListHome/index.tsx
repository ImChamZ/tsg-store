import { useParams } from 'react-router-dom';
import ProductGrid from '../../shared/ProductGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductList } from '../../store/reducers/productSlice';
import { AppState } from '../../store/reducers/combineReducers';

export type IProductDataResponse = {
  data: {
    products: [];
    total: number;
    limit: number;
    skip: number;
  };
};

const ProductListHome: React.FC = () => {
  const { id = '' } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state: AppState) => state.product.data);

  useEffect(() => {
    dispatch(getProductList(id));
  }, [dispatch, id]);

  return <ProductGrid products={productList?.products} />;
};

export default ProductListHome;
