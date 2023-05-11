import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";


export default function HobbiesPage() {
    return <Box display="flex" flexDirection="column">
        <Navbar />
        <Box>
            My Hobbies
        </Box>
    </Box>
}
