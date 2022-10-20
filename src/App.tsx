import { useMemo, useState, createContext } from 'react'

import Home from './pages/Home'

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    },
  }), []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home/>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
