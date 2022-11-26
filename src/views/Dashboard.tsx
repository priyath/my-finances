import {Box} from "@mui/material";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <PermanentDrawerLeft/>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
            </Box>
        </Box>
    )
};

export default Dashboard;
