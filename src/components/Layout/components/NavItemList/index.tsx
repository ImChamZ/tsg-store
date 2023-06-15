import { Box, Button } from '@mui/material';
import { setNavigation } from '../../../../store/reducers/appSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../store/reducers/combineReducers';
import React from 'react';
import { useTranslation } from 'react-i18next';

type TopNavItem = {
  title: string;
  path: string;
};

export const navItems: TopNavItem[] = [
  { title: 'menu.allproducts', path: '/products' },
  { title: 'menu.shopbycategory', path: '/category' },
];

type SxMenuButton = {
  my: number;
  color: string;
  display: string;
  padding: number;
  borderRadius: string;
  textTransform: string;
  lineHeight: number;
  height: string;
};

const sxMenuButton: SxMenuButton = {
  my: 2,
  color: 'white',
  display: 'block',
  borderRadius: 'unset',
  textTransform: 'capitalize',
  lineHeight: 0,
  padding: 0,
  height: '32px',
};

const NavItemList: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { currentLocation } = useSelector((state: AppState) => state.app);

  return (
    <Box sx={{ flexGrow: 1, gap: '12px', display: { xs: 'none', sm: 'flex' } }}>
      {navItems.map(({ title, path }) => (
        <Button
          key={title}
          onClick={() => navigate(`${path}`)}
          sx={{
            ...sxMenuButton,
            borderBottom: currentLocation === path ? '1px solid #fff' : '',
          }}
        >
          {t(title)}
        </Button>
      ))}
    </Box>
  );
};

// text-transform: capitalize;
//     border-bottom: 1px solid #f0f0f0;
//     padding: 0;
//     line-height: 0;
//     border-radius: 0;

export default NavItemList;
