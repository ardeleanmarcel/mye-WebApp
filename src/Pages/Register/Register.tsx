import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const inputsStyle = {
    marginBottom: '21px',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 5,
    padding: '16px',
    width: '380px',
  };

  const requiredInfoStyle = {
    marginBottom: '15px',
    fontSize: '15px',
    color: 'grey',
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoToSignIn = () => {
    navigate('/');
  };

  return (
    <Card sx={cardContainerStyle}>
      <CardContent
        sx={{
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          sx={{
            marginBottom: '40px',
          }}
        >
          Register account
        </Typography>
        <Typography sx={requiredInfoStyle}>
          * indicates a required field
        </Typography>
        <Stack>
          <TextField
            required
            label="First Name"
            name="firstName"
            value={userInput.firstName}
            onChange={(e) => handleInput(e)}
            aria-invalid="false"
            sx={inputsStyle}
            fullWidth
          />
        </Stack>
        <Stack>
          <TextField
            required
            label="Last Name"
            value={userInput.lastName}
            name="lastName"
            onChange={(e) => handleInput(e)}
            sx={inputsStyle}
            fullWidth
          />
        </Stack>
        <Stack>
          <TextField
            required
            label="Username"
            value={userInput.username}
            name="username"
            onChange={(e) => handleInput(e)}
            sx={inputsStyle}
            fullWidth
          />
        </Stack>
        <Stack>
          <TextField
            required
            label="Password"
            type="password"
            value={userInput.password}
            name="password"
            onChange={(e) => handleInput(e)}
            sx={inputsStyle}
            fullWidth
          />
        </Stack>
        <Stack>
          <TextField
            required
            label="Confirm Password"
            type="password"
            value={userInput.confirmPassword}
            name="confirmPassword"
            onChange={(e) => handleInput(e)}
            sx={inputsStyle}
            fullWidth
          />
        </Stack>

        <Button
          variant="contained"
          sx={{
            bgcolor: 'black',
            color: 'white',
            boxShadow: 3,
            marginTop: '40px',
            marginBottom: '40px',
          }}
          fullWidth
        >
          Register
        </Button>
        <Typography sx={{ marginBottom: '20px', textAlign: 'center' }}>
          You already have an account? Login below
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            border: '1px solid black',
            boxShadow: 3,
            marginBottom: '20px',
          }}
          fullWidth
          onClick={handleGoToSignIn}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  );
}
