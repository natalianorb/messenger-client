import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import User from './models/user';

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(new User());
  const page = isLoggedIn
    ? <Main user={user} />
    : <SignIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        { page }
      </div>
    </ThemeProvider>
  );
}

export default App;
