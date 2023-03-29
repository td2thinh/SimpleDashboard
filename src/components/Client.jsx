import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import LocalShipping from '@mui/icons-material/LocalShipping';
import ZoomIn from '@mui/icons-material/ZoomIn';
import IconButton from '@mui/material/IconButton';

const Client = () => {
    return (
        <>
            <Paper elevation={3}>
                <Typography padding={2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CLIENTS
                </Typography>
                <List sx={{ maxHeight: 400, overflow: 'auto' }} >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => {
                        return (
                            <Grid container direction="row" alignItems="center">
                                <ListItem
                                    secondaryAction={
                                        <Grid container direction="row" alignItems="center">
                                            <Typography sx={{ fontSize: 15 }}>
                                                19%
                                            </Typography>
                                            <IconButton edge="end">
                                                <ZoomIn />
                                            </IconButton>
                                            <IconButton edge="end">
                                                <LocalShipping />
                                            </IconButton>
                                        </Grid>
                                    }
                                >
                                    <ListItemText primary={`Client ${value}`} />
                                </ListItem>
                            </Grid>
                        )
                    })}
                </List>
            </Paper>
        </>
    )
}

export default Client;