import './App.css';
import { Box, Container, useMediaQuery } from "@mui/material";
import Gauge from './components/Gauge';
import Client from './components/Client';

const gridTemplate = `
  "gauge client"
  "gauge client"
  "gauge client"
  "gauge client"
  "map client"
  "map client"
  "map stats"
  "map stats"
  "map stats"
  "map stats"
  "map stats"
  "map stats"
`

const gridTemplateSmallScreen = `
  "gauge"
  "gauge"
  "gauge"
  "gauge"
  "client"
  "client"
  "client"
  "client"
  "client"
  "client"
  "client"
  "map"
  "map"
  "map"
  "map"
  "map"
  "map"
  "map"
  "map"
  "stats"
  "stats"
  "stats"
  "stats"
  "stats"
`

const App = () => {
  const isBigScreen = useMediaQuery('(min-width: 1200px)');
  return (
    <Container sx={{ padding: 10 }}>
      <Box width="100%" height="100%" display="grid"
        gap="1.5rem"
        sx={
          isBigScreen ? {
            gridTemplate: gridTemplate,
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }
            : {
              gridTemplate: gridTemplateSmallScreen,
              gridAutoColumns: "1fr",
              gridAutoRows: "1fr",
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
