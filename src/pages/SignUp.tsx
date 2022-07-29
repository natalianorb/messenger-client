import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CREATE_USER from '../apollo/mutations/user';
import User from '../models/user';

export default function SignUp({ setIsLoggedIn, setUser }: {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<User>>,
}) {
  const [createUserFn] = useMutation(CREATE_USER);
  const addUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    createUserFn({
      variables: {
        email,
        password,
      },
    }).then(({ data }) => {
      setIsLoggedIn(true);
      const { createUser } = data;
      setUser(new User(createUser.id, createUser.email, createUser.name));
    }).catch(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
        >
          Messenger
        </Typography>
        <Typography
          variant="h5"
          component="h2"
        >
          Create account
        </Typography>
        <Box component="form" onSubmit={addUser} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Your name"
            name="name"
            autoFocus
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/">
                Already have account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}
