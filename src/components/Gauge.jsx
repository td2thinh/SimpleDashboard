import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Circular from './Circular';
const Gauge = () => {
    const valuesArray = [
        { value: 66, name: "Sorties" },
        { value: 0, name: "À laver" },
        { value: 33, name: "Propes" },
    ]
    return (
        <>
            <Paper elevation={3}>
                <Typography padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ÉTAT DU STOCK
                </Typography>

                <Grid container
                    direction="row"
                    justifyContent="center"
                    spacing={10}
                    alignItems="center">
                    {valuesArray.map((item, index) => {
                        return (
                            <Grid key={index} marginX={2} item>
                                <Circular value={item.value} name={item.name} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}

export default Gauge;