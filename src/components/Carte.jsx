import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useState } from 'react';
import { color } from 'd3';

const detailArray = [
    {
        date: "12/12/2021",
        conducteur: "John Doe",
        position: [45.759948, 4.832781]
    },
    {
        date: "15/12/2021",
        conducteur: "Joshua",
        position: [45.754496982, 4.825996696]
    },
    {
        date: "16/12/2021",
        conducteur: "Manny",
        position: [45.7694389, 4.85938932]
    },
]

const itinerary = [
    {
        from: [45.759948, 4.832781],
        to: [45.754496982, 4.825996696]
    },
    {
        from: [45.754496982, 4.825996696],
        to: [45.7694389, 4.85938932]
    },
    {
        from: [45.7694389, 4.85938932],
        to: [45.759948, 4.832781]
    }
]


const Carte = () => {
    const [details, setDetails] = useState({
        date: "12/12/2021",
        conducteur: "John Doe"
    })

    const handlePopup = (detail) => {
        setDetails({
            date: detail.date,
            conducteur: detail.conducteur
        })
    }


    return (
        <Paper elevation={3}>
            <Typography padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                PROCHAINE TOURNÉE
            </Typography>
            <Grid container xs={12} justifyContent="space-between">
                <Typography inline padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Date : {details.date}
                </Typography>
                <Typography inline align="right" padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Conducteur: {details.conducteur}
                </Typography>
            </Grid>
            <Box padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <MapContainer center={[45.764043, 4.835659]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        detailArray.map((detail, index) => {
                            return (
                                <Marker key={index} position={detail.position} eventHandlers={{
                                    click: () => handlePopup(detail)
                                }}>
                                </Marker>
                            )
                        })
                    }
                    {
                        itinerary.map((item, index) => {
                            return (
                                <Polyline key={index} positions={[item.from, item.to]} color={'red'} />
                            )
                        }
                        )
                    }
                </MapContainer>
            </Box>
        </Paper >
    )
}

export default Carte;