import { Box, Divider } from "@mui/material";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar";
import { About } from "./about";
import { Projects } from "./projects";
import { Hobbies } from "./hobbies";


export default function HomePage(){
    return <Navigate replace to="/about" />

    return (
        <Box display="flex" flexDirection="column">
            <Navbar />
            <About />
            <Divider sx={{borderBottomWidth: 5, marginBottom: 5}} />
            <Projects />
            <Divider sx={{borderBottomWidth: 5, marginBottom: 5}} />
            <Hobbies />
        </Box>
    )
}
