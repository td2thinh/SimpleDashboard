import './App.css';
import { Box, Container } from "@mui/material";
import Gauge from './components/Gauge';
import Client from './components/Client';

const gridTemplate = `
  "gauge client"
  "gauge client"
  "gauge client"
  "gauge client"
  "map client"
  "map client"
  "map client"
  "map stats"
  "map stats"
  "map stats"
  "map stats"
  "map stats"
`
function App() {
  return (
    <Container sx={{ padding: 10 }}>
      <Box width="100%" height="100%" display="grid"
        gap="1.5rem"
        sx={{
          gridTemplate: gridTemplate,
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}>
        <Box sx={{ gridArea: "gauge" }}>
          <Gauge />
        </Box>
        <Box sx={{ gridArea: "client" }}>
          <Client />
        </Box>
        <Box sx={{ gridArea: "map" }}>
          <Client />
        </Box>
        <Box sx={{ gridArea: "stats" }}>
          <Gauge />
        </Box>
      </Box>
    </Container >
  );
}

export default App;
