import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../../shared/ProductGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListByCategory } from '../../store/reducers/productSlice';
import { AppState } from '../../store/reducers/combineReducers';

const Category: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state: AppState) => state.product.data);

  useEffect(() => {
    dispatch(getProductListByCategory(id as string));
  }, [dispatch, id]);

  return <ProductGrid products={productList?.products} />;
};

export default Category;
