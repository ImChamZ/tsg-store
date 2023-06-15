import { Box, Container, Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        position: 'relative',
        bottom: 0,
        color: '#f0f0f0',
        left: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 1,
          }}
        >
          {/* <div>
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </div> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. TSG Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
