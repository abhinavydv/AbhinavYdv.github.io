import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";


export function Projects() {
    const projects = [
        {
            name: "The Watcher",
            description: "TheWatcher is a spyware using which the adversary can see the screen, control the mouse and keyboard and log the keyboard of the victim computer.",
            url: "https://github.com/AbhinavYdv/TheWatcher",
            from: "Oct 2022",
            to: "Apr 2023"
        },
        {
            name: "Functional Roadbot",
            description: "A project for robotics competition organised by e-yantra, IIT Bombay. The problem statement was an analogy of the following : \"The robot has to find potholes on roads and then dispense Road construction material in a container placed around the pothole\"",
            url: "https://github.com/mehul-sri/eyrc22_fb-4178",
            from: "Sep 2022",
            to: "Mar 2023"
        },
        {
            name: "QueryLane",
            description: "A project for DBMS-II course at IIT Hyderabad. This is a QnA platform with minimal functionality.",
            url: "https://github.com/Sephamore/QueryLane",
            from: "Feb 2023",
            to: "Mar 2023"
        },
        {
            name: "NotifyMe Snap",
            description: "An extension for metamask flask that notifies a user for spam ERC20 tokens.",
            url: "https://github.com/Ganesh-RB/21_notifyMe-snap",
            from: "Feb 2023",
            to: "Feb 2023"
        },
        {
            name: "Treasure Hunter",
            description: "A top down shooter game using unity for milan (inter hostel competitions), IIT Hyderabad.",
            url: "https://github.com/abhinavydv/MilanGameJam",
            from: "Sep 2022",
            to: "Sep 2022"
        },
        {
            name: "Lost Summer",
            description: "A simple one-level platformer game using python kivy library.",
            url: "https://github.com/abhinavydv/LostSummer",
            from: "Jun 2022",
            to: "Jun 2022"
        }
    ]

    return <Box display="flex" flexDirection="column">
        <Box>
            <Typography align="center" fontSize="3.5rem">
                Projects
            </Typography>
        </Box>
        <Box>
            <Box sx={{paddingX: {lg: 10, md: 7, sm: 4, xs: 2}, paddingY: {lg: 5, md: 4, sm: 2, xs: 1}}}>
                <Grid container spacing={{lg: 10, md: 7, sm: 5, xs: 3}} justifyContent="center">
                    {projects.map((project) => (
                        <Grid key={project.name} item width={{xl: "30%", lg: "40%", md: "40%", sm: "40%", xs: "60%"}}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h4" component="div" align="center">
                                        {project.name}
                                    </Typography>
                                    <Divider/>
                                    <Typography color="text.secondary" fontSize="small">
                                        {project.from} - {project.to}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={project.url}>
                                        View project
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    </Box>
}


export default function ProjectsPage() {
    return <Box display="flex" flexDirection="column">
        <Navbar />
        <Projects />
    </Box>
}
