import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LOGIN from '../apollo/queries/user';
import User from '../models/user';

export default function SignIn({ setIsLoggedIn, setUser }: {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<User>>,
 }) {
  const [login] = useLazyQuery(LOGIN);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    login({
      variables: {
        input: {
          email: formData.get('email'),
          password: formData.get('password'),
        },
      },
    }).then(({ data }) => {
      const { user } = data;
      setIsLoggedIn(true);
      setUser(new User(user.id, user.email));
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
          variant="h5"
          component="h1"
        >
          Sign in to Messenger
        </Typography>
        <Box
          component="form"
          onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
