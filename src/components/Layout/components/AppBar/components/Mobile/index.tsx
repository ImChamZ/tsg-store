import { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderLogo from '../../../../../../shared/HeaderLogo';
import { navItems } from '../../../NavItemList';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../store/reducers/combineReducers';

const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: '100%',
          maxWidth: '100%',
          left: '0 !important',
          top: '56px !important',
          borderRadius: '0px 0px 4px 4px',
        },
      },
    },
  },
});

const MobileAppBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { currentLocation } = useSelector((state: AppState) => state.app);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path?: string) => {
    setAnchorElNav(null);
    if (path) navigate(`${path}`);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <ThemeProvider theme={theme}>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={() => handleCloseNavMenu()}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            {navItems.map(({ title, path }) => (
              <MenuItem
                key={title}
                onClick={() => handleCloseNavMenu(path)}
                sx={{ background: currentLocation === path ? '#f0f0f0' : '' }}
              >
                <Typography textAlign="center">{t(title)}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </ThemeProvider>
      </Box>

      <HeaderLogo desktop={false} />
    </>
  );
};

export default MobileAppBar;
