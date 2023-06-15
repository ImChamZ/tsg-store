import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MobileAppBar from './components/Mobile';
import DesktopAppBar from './components/Desktop';

const ResponsiveAppBar = () => (
  <AppBar position="fixed">
    <Container>
      <Toolbar disableGutters>
        <MobileAppBar />
        <DesktopAppBar />
      </Toolbar>
    </Container>
  </AppBar>
);

export default ResponsiveAppBar;
