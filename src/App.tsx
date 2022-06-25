import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/SignIn';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <SignIn />
      </Container>
    </ThemeProvider>
  );
}

export default App;
