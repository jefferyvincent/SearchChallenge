import React from 'react';
import ProfileRouting from './components/ProfileRouting';
import ProfilesContextProvider from './components/ProfilesContextProvider';
import { ThemeProvider } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import './styles.css';

function App() {
  const theme = {
    isMobile: useMediaQuery({maxWidth: 767}),
    isTablet: useMediaQuery({minWidth: 767, maxWidth: 992}),
    isDesktop: useMediaQuery({minWidth: 992})
  };

  return (
    <ProfilesContextProvider>
      <ThemeProvider theme={theme}>
        <ProfileRouting />
      </ThemeProvider>
    </ProfilesContextProvider>
  );
}

export default App;
