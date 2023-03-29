import './App.css';
import { Grid, Container } from "@mui/material";
import Gauge from './components/Gauge';
import Client from './components/Client';
function App() {
  return (
    <Container sx={{ padding: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Gauge />
        </Grid>
        <Grid item xs={12} md={6}>
          <Client />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
