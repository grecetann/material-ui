
import {useState} from 'react';
import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import SideBar from './components/SideBar';
import Add from './components/Add';
function App() {
  const [mode,setMode]=useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
  <SideBar mode={mode} setMode={setMode}/>
  <Feed/>
  <Rightbar/>
  </Stack>
  <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
