
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Section1 from './Section1';
import Section2 from './Section2'
import Blogs from './Blogs';

export default function Main() {
  return (
    
    
   <div className="container-fluid mainpage">
    <div className="container  maincont">
        <div className="col-4">
            <Section1/>
        </div>
        <div className="col-8 ">
            <div className="col">
                <Section2/>
            </div>
            <div className="col">
                
                <Routes>
                <Route exact path="../components/About.jsx" element={<About />} />  
                <Route path="../components/Blogs.jsx" element={<Blogs/>} />
                {/* <About/> */}
                {/* <Contact/> */}
                </Routes>
            </div>
        </div>
    </div>
   </div>
   
  
  )
}



// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Section1 from './Section1';
// import Section2 from './Section2';
// import Resume from './Resume';  // Make sure to create this component
// import Works from './Works';    // Make sure to create this component
// import Blogs from './Blogs';    // Make sure to create this component

// export default function Main() {
//   return (
//     <BrowserRouter>
//     <Router>
//       <div className="container-fluid mainpage">
//         <div className="container maincont">
//           <div className="col-4">
//             <Section1 />
//           </div>
//           <div className="col-8">
//            <div className="col">
//             <Section2 />
//             </div>
//             <div className="col">
//               <Routes>
//                 <Route path="/about" element={<About />} />
//                 <Route path="/resume" element={<Resume />} />
//                 <Route path="/works" element={<Works />} />
//                 <Route path="/blogs" element={<Blogs />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//     </BrowserRouter>
//   );
// }
