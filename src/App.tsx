import { GlobalStyles } from '@mui/material';
import AppRoutes from './Routes';

const globalStyle = {
  body: {
    background:
      'radial-gradient(56.81% 50% at 50% 50%, #F5F5F5 0%, #f0f0f0 100%)',
  },
  a: {
    textDecoration: 'none',
    color: 'unset',
  },
};

const App: React.FC = () => (
  <>
    <GlobalStyles styles={globalStyle} />
    <AppRoutes />
  </>
);
export default App;
