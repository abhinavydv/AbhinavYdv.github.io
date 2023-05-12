import { Box } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./navbar";


export default function HomePage(){
    return <Navigate replace to="/about" />
    return (
        <Box display="flex" flexDirection="column">
            <Navbar />
        </Box>
    )
}
