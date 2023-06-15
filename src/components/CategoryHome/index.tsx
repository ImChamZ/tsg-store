import { Card, CardActionArea, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryList } from '../../store/reducers/categorySlice';
import { AppState } from '../../store/reducers/combineReducers';
import { setAppLoading } from '../../store/reducers/appSlice';

const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } as const;

type SXCardArea = {
  height: string;
  display: string;
  textTransform: string;
};

const sxCardArea: SXCardArea = {
  height: '125px',
  display: 'grid',
  textTransform: 'capitalize',
};

const CategoryHome: React.FC = () => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState<string[]>([]);
  const { data } = useSelector((state: AppState) => state?.category);
  const { searchText } = useSelector((state: AppState) => state?.app);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  useEffect(() => {
    const result: string[] = data?.filter((category: string) =>
      category.includes(searchText)
    );
    setFiltered(result);
    if (searchText) dispatch(setAppLoading(false));
  }, [data, dispatch, searchText]);

  return (
    <Grid container spacing={2} mt={0}>
      {((searchText && filtered) || data)?.map((category: string) => (
        <Grid key={category} item {...colWidth} mt={0}>
          <Link to={`./${category}`}>
            <Card sx={{ '&:hover': { transform: 'scale(1.02)' } }}>
              <CardActionArea sx={sxCardArea}>
                <Typography variant="h6" component="div">
                  {category?.replace('-', ' ')}
                </Typography>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryHome;
