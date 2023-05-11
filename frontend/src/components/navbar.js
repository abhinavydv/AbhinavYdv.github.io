import { Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"


function RightLink(props) {
    // console.log(props)
    return <Box
                className={(props.selectedValue == props.to) && "selected-link-right" || ""}
                sx={{paddingX: 0.5, marginX: 1}}
            >
            <Link className={"link link-right"} to={props.to}>
                {props.children}
            </Link>
        </Box>
}


export default function Navbar(current) {
    const [path, setPath] = useState("");

    if (window && !path) {
        setPath(window.location.pathname)
    }
    return <Box display="flex" flexDirection="row" className="navbar">
        <Box
            width={"100%"}
            display="flex"
            flexDirection="row"
            sx={{
                paddingX: {sm: "2%", md: "4%", lg: "5%"},
                paddingY: {sm: "1%", md: "1%", lg: "2%"}
            }}
        >
            <Link className="link" to="/">Home</Link>
            <Box sx={{flexGrow: 1}} />
            <RightLink to="/about" selectedValue={path}>About</RightLink>
            <RightLink to="/projects" selectedValue={path}>Projects</RightLink>
            <RightLink to="/experience" selectedValue={path}>Experience</RightLink>
            <RightLink to="/hobbies" selectedValue={path}>Hobbies</RightLink>
            <Box sx={{flexGrow: 1}} />
        </Box>
    </Box>
}
