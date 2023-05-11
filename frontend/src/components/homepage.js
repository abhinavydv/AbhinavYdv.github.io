import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";


export default function HomePage(){
    return (
        <Box display="flex" flexDirection="column">
            <Navbar />
        </Box>
    )
}
