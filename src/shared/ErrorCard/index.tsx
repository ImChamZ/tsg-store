import { Alert, AlertColor, Typography } from '@mui/material';

type ErrorCard = {
  message?: string;
  type?: AlertColor | undefined;
};

const ErrorCard: React.FC<ErrorCard> = ({
  message = 'Error loading data, please try again',
  type = 'error',
}) => (
  <Alert variant="outlined" severity={type} sx={{ border: 'none' }}>
    <Typography variant="body1" component="span">
      {message}
    </Typography>
  </Alert>
);

export default ErrorCard;
