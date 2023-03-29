import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { max } from 'd3';


const Circular = (props) => {
    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                    variant="determinate"
                    value={props.value}
                    style={{
                        color: "#4dabf5",
                        width: "100px",
                        height: "100px",
                        borderRadius: "100%",
                        boxShadow: "inset 0 0 0px 11px #D3D3D3",
                        backgroundColor: "transparent",

                    }}
                    thickness={5}
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary" fontSize={20}>
                        {`${props.value}%`}
                    </Typography>
                </Box>

            </Box>
            <Typography align='center' margin={2}>
                {props.name}
            </Typography>
        </>
    )
}

export default Circular;