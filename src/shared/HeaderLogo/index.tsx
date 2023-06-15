import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type HeaderLogo = {
  desktop?: boolean;
};

const HeaderLogo: React.FC<HeaderLogo> = ({ desktop = true }) => {
  const navigate = useNavigate();

  return (
    <Typography
      variant="h5"
      noWrap
      sx={{
        mr: 2,
        display: desktop
          ? { xs: 'none', sm: 'flex' }
          : { xs: 'flex', sm: 'none' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        flexGrow: desktop ? 0 : 1,
        cursor: 'pointer',
      }}
      onClick={() => navigate('/products')}
    >
      TSG
    </Typography>
  );
};

export default HeaderLogo;
