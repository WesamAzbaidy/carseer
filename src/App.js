import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Sidebar from './pages/Sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Box
      sx={{ display: "flex" }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          marginTop: "8vh",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>

  );
}

export default App;
