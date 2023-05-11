import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"



export function About(){ 
    return <Box display="flex" flexDirection="column"
        sx={{paddingLeft: {lg: 20, md: 15, sm: 10}, paddingRight: {lg: 5, md: 4, sm: 3}, paddingY: {lg: 5, md: 3, sm: 2}}}
    >
        <Box display="flex" flexDirection="row">
            <Box width="55%" sx={{paddingRight: 10}}>
                <Box
                    alignItems="center"
                    sx={{paddingTop: 3}}
                >
                    <Typography align="center" fontSize={"4.4rem"}>
                        Abhinav Yadav
                    </Typography>
                </Box>
                <Divider />
                <Box>
                    <Typography align="center" fontSize={"3.5rem"}>
                        CSE Sophomore at IIT Hyderabad
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{paddingY: 2}}>
                    <Typography>
                        I am a system geek interested in exploring things and tinkering with code.
                        I love playing with python. Almost everything that involves a computer and
                        some code falls into my domain of interest. I have tried my hands on game
                        dev, software dev, web dev, cybersecurity and robotics (Yeah yeah! I know.
                        I didn't do ML. Not much interested!).
                    </Typography>
                </Box>
                <Divider />
                <Box>
                    <Box display="flex" flexDirection="row" sx={{paddingY: 2}} justifyContent="center">
                        <Link to="https://github.com/AbhinavYdv">
                            <GitHub style={{color: "white"}} sx={{marginX: 1}} /> 
                        </Link>
                        <Link to="https://linkedin.com/in/abhinav-ydv">
                            <LinkedIn style={{color: "white"}} sx={{marginX: 1}} />
                        </Link>
                        <Link to="mailto:abhinavyadavdev@gmail.com">
                            <Mail style={{color: "white"}} sx={{marginX: 1}} />
                        </Link>
                    </Box>
                </Box>
            </Box>
             <Box width= "45%">
                <Box
                    width="100%"
                    component="img"
                    src="/images/me4.png"
                />
             </Box>
        </Box>
    </Box>
}


export default function AboutPage() {
    return <Box display="flex" flexDirection="column">
        <Navbar/>
        <About />
    </Box>
}
