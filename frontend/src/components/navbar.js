import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { Home, MoreHoriz } from "@mui/icons-material";


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
    const [menuOpen, setMeuOpen] = useState(null);
    const open = Boolean(menuOpen)
    const navigate = useNavigate();

    if (window && !path) {
        setPath(window.location.pathname)
    }
    return <Box display="flex" flexDirection="row" className="navbar">
        <Box
            width={"100%"}
            display={{xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none"}}
            flexDirection="row"
            sx={{
                paddingX: {xs: "1%", sm: "2%", md: "4%", lg: "5%", xl: "6%"},
                paddingY: {xs: "1%", sm: "1%", md: "1%", lg: "2%", xl: "2%"}
            }}
        >
            <Link className="link" to="/">Home</Link>
            <Box flexGrow={1} />
            <RightLink to="/about" selectedValue={path}>About</RightLink>
            <RightLink to="/projects" selectedValue={path}>Projects</RightLink>
            <RightLink to="/hobbies" selectedValue={path}>Hobbies</RightLink>
            <Box flexGrow={1} />
        </Box>
        <Box
            width={"100%"}
            display={{xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex"}}
            flexDirection="row"
            sx={{
                paddingX: {xs: "1%", sm: "2%", md: "4%", lg: "5%"},
                paddingY: {xs: "1%", sm: "1%", md: "1%", lg: "2%"}
            }}
        >
            <Button onClick={() => {
                navigate("/")
            }}>
                <Home style={{color: "white"}} />
            </Button>
            <Box flexGrow={1} />
            <Button onClick={(e) => {
                setMeuOpen(e.currentTarget)
            }}>
                <MoreHoriz style={{color: "white"}} />
            </Button>
            <Menu
                anchorEl={menuOpen}
                open={open}
                onClose={() => setMeuOpen(null)}
            >
                <MenuItem onClick={() => {
                    navigate("/about")
                }}>About</MenuItem>
                <MenuItem onClick={() => {
                    navigate("/projects")
                }}>Projects</MenuItem>
                <MenuItem onClick={() => {
                    navigate("/hobbies")
                }}>Hobbies</MenuItem>
            </Menu>
        </Box>
    </Box>
}
