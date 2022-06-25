import { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/SignIn';

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const page = isLoggedIn ? <div /> : <SignIn setIsLoggedIn={setIsLoggedIn} />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        { page }
      </Container>
    </ThemeProvider>
  );
}

export default App;
