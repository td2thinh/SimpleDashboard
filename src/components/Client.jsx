import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Client = () => {
    return (
        <>
            <Paper elevation={3}>
                <Typography padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CLIENT
                </Typography>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Nom
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Client;