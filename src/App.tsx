import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import User from './models/user';
import SignUp from './pages/SignUp';

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(new User('', ''));
  const page = isLoggedIn
    ? <Main user={user} />
    : <SignIn setIsLoggedIn={setIsLoggedIn} setUser={setUser} />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={page} />
        <Route path="signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
