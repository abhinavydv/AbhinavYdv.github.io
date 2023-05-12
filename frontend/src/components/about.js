import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"



export function About(){ 
    return <Box display="flex" flexDirection="column"
        // sx={{paddingLeft: {lg: 20, md: 15, sm: 10}, paddingRight: {lg: 5, md: 4, sm: 3}, paddingY: {lg: 5, md: 3, sm: 2}}}
        sx={{paddingY: {lg: 5, md: 3, sm: 2}}}
    >
        <Box display="flex" flexDirection={{xl: "row", lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse"}}
        alignSelf="center"
        width={{xl: 1150, lg: 1150, md: 900}}
        >
            <Box width={{xl: "55%", lg: "55%", md: "70%"}} sx={{paddingRight: {xl: 10, lg: 10, md: 10}, paddingX: {sm: 10, xs: 10}}}>
                <Box
                    sx={{paddingTop: 3}}
                    width="100%"
                >
                    <Typography align="center" fontSize={{xl: "4.4rem", lg: "4.4rem", md: "3.6rem", sm: "3.7rem", xs: "3.5rem"}}>
                        Abhinav Yadav
                    </Typography>
                </Box>
                <Divider />
                <Box>
                    <Typography align="center" fontSize={{xl: "3.5rem", lg: "3.5rem", md: "2.8rem", sm: "2.7rem", xs: "2.5rem"}}>
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
             <Box
                display="flex"
                width= {{xl: "45%", lg: "45%", md: "30%", sm: "100%", xs: "100%"}}
                justifyContent={{sm: "center", xs: "center"}}
                alignItems="center"
            >
                <Box
                    width={{xl: "100%", lg: "100%", md: "100%", sm: "45%", xs: "45%"} }
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
