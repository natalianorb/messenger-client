import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormEvent, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../apollo/mutations/user';

export default function SignIn() {
  const [newUser] = useMutation(CREATE_USER);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const addUser = (e: FormEvent) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username, age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
      setUsername('');
      setAge(0);
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
        <Box component="form" onSubmit={addUser} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Your name"
            name="username"
            autoFocus
          />
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
              <Link href="#" variant="body2">
                Already have account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}
