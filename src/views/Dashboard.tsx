import {Box, Grid, Paper, styled} from "@mui/material";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import BasicCard from "../components/BasicCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <PermanentDrawerLeft/>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid container item spacing={2}>
                        <Grid item xs={4}>
                            <BasicCard title={'Total Savings'}/>
                        </Grid>
                        <Grid item xs={4}>
                            <BasicCard title={'Current Month Savings'}/>
                        </Grid>
                        <Grid item xs={4}>
                            <BasicCard title={'Total Savings'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default Dashboard;
