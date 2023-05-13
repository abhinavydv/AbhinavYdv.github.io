import { Box, Divider, Typography } from "@mui/material";
import Navbar from "./navbar";
import "../styles/hobbies.css"


export function Hobbies() {
    return <Box display="flex" justifyContent="center">
        <Box display="flex" width={{xl: 1300, lg: 1200}} flexDirection="column">
            <Box>
                <Typography align="center" fontSize="3.5rem">
                    Hobbies
                </Typography>
            </Box>
            <Box>
                <Box display="flex" flexDirection="column" paddingX={{lg: 15, md: 11, sm: 7, xs: 3}} paddingY={{lg: 5, md: 4, sm: 3, xs: 2}}>
                    <Box display="flex" flexDirection={{xl: "row", lg: "row", md: "row", sm: "column", xs: "column", }}>
                        <Box display="flex" width="50%" alignItems="center">
                            <Box
                                display={{xl: "block", lg: "block", md: "block", sm: "none", xs: "none"}}
                                width="100%"
                                component="img"
                                src="/images/chess3.png"
                            />
                        </Box>
                        <Box width={{xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%"}} paddingLeft={{xl: 5, lg: 5, md: 5}}>
                            <Typography variant="h4" align="center">
                                Chess
                            </Typography>
                            <Divider/>
                            <Box display="flex" width="100%" alignItems="center">
                                <Box
                                    display={{xl: "None", lg: "None", md: "None", sm: "block", xs: "block"}}
                                    width="100%"
                                    component="img"
                                    src="/images/chess3.png"
                                />
                            </Box>
                            <Typography marginTop={2}>
                                I started playing chess when I was in class 3rd. Learnt it in a tutorial
                                conducted by school in summer vacations. I taught it to almost everyone
                                in my apartment. I became a fan of it and played it day and night. When
                                I closed my eyes, I saw only chess pieces in front of me.
                            </Typography>
                            <Typography>
                                In class 10th and 11th, I used to play chess with my neighbour on our terrace's
                                boundary. We had also participated in some district level chess competitions
                                from our school. Once, we achieved the first rank in district level team competitions.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection={{xl: "row", lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse", }} paddingY={5}>
                        <Box width={{xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%"}} paddingRight={5}>
                            <Typography variant="h4" align="center">
                                Poetry
                            </Typography>
                            <Divider/>
                            <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                                <Box
                                    marginTop={3}
                                    display={{xl: "None", lg: "None", md: "None", sm: "block", xs: "block"}}
                                    className="rounded-image"
                                    width="60%"
                                    component="img"
                                    src="/images/poetry.jpg"
                                />
                            </Box>
                            <Typography marginTop={2}>
                                I really love poetry. I have been writing since class 9th.
                                I express almost all my feelings through my poems. Each poem
                                is a story in itself describing what I went through at the time
                                of its creation. Its all just feelings.
                            </Typography>
                            <Typography>
                                I took a break from poetry during JEE and started it again after
                                joining IITH. I usually write one poem in around a month's interval.
                            </Typography>
                        </Box>
                        <Box display="flex" width="30%" marginLeft="10%" justifyContent="center" alignItems="center">
                            <Box
                                display={{xl: "block", lg: "block", md: "block", sm: "none", xs: "none"}}
                                className="rounded-image"
                                width="100%"
                                component="img"
                                src="/images/poetry.jpg"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}


export default function HobbiesPage() {
    return <Box display="flex" flexDirection="column">
        <Navbar />
        <Hobbies />
    </Box>
}
