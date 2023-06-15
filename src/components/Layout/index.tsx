import { Suspense, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '../../shared/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AppSlice, setNavigation } from '../../store/reducers/appSlice';
import { AppState } from '../../store/reducers/combineReducers';
import ErrorCard from '../../shared/ErrorCard';
import { Card, Container } from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import ActionHeader from '../../shared/ActionHeader';

type sxBoxContainer = {
  display: string;
  placeContent: string;
  position: string;
  left: string;
  top: string;
  transform: string;
  zIndex: number;
};

const sxBoxContainer: sxBoxContainer = {
  display: 'grid',
  placeContent: 'center',
  left: '50%',
  top: '30%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
};

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, error } = useSelector<AppState, AppSlice>(
    (state: AppState) => state.app
  );

  useEffect(() => {
    dispatch(setNavigation(location.pathname));
  }, [dispatch, location]);

  return (
    <>
      <ResponsiveAppBar />
      <Suspense
        fallback={
          <Box sx={sxBoxContainer}>
            <Loader />
          </Box>
        }
      >
        {loading && (
          <Box sx={sxBoxContainer}>
            <Loader />
          </Box>
        )}
        <Container component={'main'}>
          <Card sx={sxBoxContainer}>{!loading && error && <ErrorCard />}</Card>
          <ActionHeader />
          <Outlet />
        </Container>
      </Suspense>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
