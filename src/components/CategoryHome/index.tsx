import { Card, CardActionArea, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  categorySearch,
  loadCategories,
} from '../../store/reducers/categorySlice';
import ActionHeader from '../../shared/ActionHeader';
import { AppState } from '../../store/reducers/combineReducers';

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
  const [filtered, setFiltered] = useState([] as string[]);
  const { searchText, data } = useSelector(
    (state: AppState) => state?.category
  );

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    const result: string[] = data?.filter((category: string) =>
      category.includes(searchText)
    );
    setFiltered(result);
  }, [data, searchText]);

  return (
    <>
      <ActionHeader searchFunc={categorySearch} />
      <Grid container spacing={2} mt={0}>
        {((searchText && filtered) || data)?.map((category: string) => (
          <Grid key={category} item {...colWidth} mt={0}>
            <Link to={`./${category}`}>
              <Card>
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
    </>
  );
};

export default CategoryHome;
