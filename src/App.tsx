import { GlobalStyles } from '@mui/material';
import AppRoutes from './Routes';

const globalStyle = {
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
