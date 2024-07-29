


// import "./App.css";
// import Main from "./components/Main";
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import About from './components/About';
// import Contact from './components/Contact';
// import Section1 from './components/Section1';
// import Section2 from './components/Section2'
// import Blogs from './components/Blogs';
// import Resume from './components/Resume';
// import Works from "./components/Works";
// import LeftSide from "./components/LeftSide";

// export default function App() {
//   return (
   
    
//    <div className="container-fluid mainpage">
//     <div className="container  maincont">
//         <div className="col-4">
//             <Section1/>
//         </div>
//         <div className="col-8 ">
//             <div className="col">
//                 <Section2/>
//             </div>
//             <div className="col">
//             <switch>
//                 <Routes>
//                 <Route exact path="/" element={<About />} />  
//                 <Route path="/Resume" element={<Resume/>}/>
//                 <Route path="/portfolio" element={<Works/>} />
//                 <Route path="/Blogs" element={<Blogs/>} />
//                 <Route path="/Contact" element={<Contact/>} />
//                 </Routes>
//                 </switch>
//             </div>
//         </div>
//     </div>
//    </div>
   
  
//   )
// }



import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Blogs from './components/Blogs';
import Resume from './components/Resume';
import Works from "./components/Works";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globalStyles';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';


// Assuming ThemeToggle is defined or imported correctly
const ThemeToggle = ({ onClick, children }) => (
  <button onClick={onClick} className="theme-toggle">
    {children}
  </button>
  
 

);

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
   if ( theme === 'light' )
    {  var element = document.getElementById("main");
    element.classList.add("mystyle");
}


if ( theme === 'dark' )
    {  var elemeleent = document.getElementById("main");
        elemeleent.classList.remove("mystyle");
}


};

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div id="main"> 

      <div className="container-fluid mainpage">
        <div className="container togglebtnmain">
        
          
          <ThemeToggle onClick={themeToggler}className='togglebtn'>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
          
          
        </div>
        <div className="container maincont">
          <div className="col-4 section1app">
            <Section1 />
          </div>
          <div className="col-8 part2">
            <div className="col part21hide">
              <Section2 />
            </div>
            <div className="col">
              <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/portfolio" element={<Works />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      </div>

    </ThemeProvider>
  );
}
