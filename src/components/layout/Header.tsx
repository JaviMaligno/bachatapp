import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bachata Learning
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/history')}>History</Button>
        <Button color="inherit" onClick={() => navigate('/music')}>Music</Button>
        <Button color="inherit" onClick={() => navigate('/dance')}>Dance</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 