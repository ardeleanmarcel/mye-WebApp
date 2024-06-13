import { useNavigate } from 'react-router-dom';
import { useFormikContext } from 'formik';

import {
  Button,
  Card,
  CardContent,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { withFormik } from '../../withFormik';

const initialValues = {
  username: '',
  password: '',
};

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: 'grid',
    gap: '50px',
  },
  title: {
    color: theme.palette.text.primary,
    marginTop: '30px !important',
    //TODO -> remove '!important'
  },
  actionText: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
}));

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const { handleChange, values, handleSubmit, isSubmitting } =
    useFormikContext<typeof initialValues>();

  return (
    <Card>
      <CardContent
        sx={{
          textAlign: 'left',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className={classes.container}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              className={classes.title}
            >
              Manage Your Expenses
            </Typography>
            <TextField
              id="username"
              variant="outlined"
              label="Username"
              type="username"
              name="username"
              color="inputsColor"
              onChange={handleChange}
              value={values.username}
              disabled={isSubmitting}
            />
            <TextField
              id="password"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              color="inputsColor"
              onChange={handleChange}
              value={values.password}
              disabled={isSubmitting}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                boxShadow: 3,
              }}
              fullWidth
              disabled={isSubmitting}
            >
              Login
            </Button>
            <div className={classes.actionText}>
              You do not have an account? Register below
            </div>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                border: '1px solid black',
                boxShadow: 3,
              }}
              fullWidth
              onClick={handleRegister}
              disabled={isSubmitting}
            >
              Register
            </Button>
            {/* TODO -> culoarea la register button pe dark theme */}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const LoginWithFormik = withFormik(initialValues, handleSubmit, Home);

export default LoginWithFormik;
