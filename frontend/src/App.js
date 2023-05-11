import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/homepage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AboutPage from './components/about';
import ProjectsPage from './components/projects';
import HobbiesPage from './components/hobbies';
import ExperiencePage from './components/experience';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/hobbies' element={<HobbiesPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className='container'>
//         <Routes>
//           <Route exact path='/' element={<HomePage/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
