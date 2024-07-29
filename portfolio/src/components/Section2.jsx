
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileAlt, faBriefcase, faAddressBook, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faBlogger } from '@fortawesome/free-brands-svg-icons';
// import './Section2.css'; 
// import { NavLink } from 'react-router-dom';

// const Section2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className=" container section2main">
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
//       </div>
//       <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
//         <nav className="section2nav">
//           <ul>
//             <li>
//               <NavLink exact to="/" activeClassName="active" className="nav-link">
//                 <FontAwesomeIcon icon={faAddressBook} />
//                 <span>About</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Resume" activeClassName="active" className="nav-link">
//                 <FontAwesomeIcon icon={faFileAlt} />
//                 <span>Resume</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/portfolio" activeClassName="active" className="nav-link">
//                 <FontAwesomeIcon icon={faBriefcase} />
//                 <span>Works</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Blogs" activeClassName="active" className="nav-link">
//                 <FontAwesomeIcon icon={faBlogger} />
//                 <span>Blogs</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Contact" activeClassName="active" className="nav-link">
//                 <FontAwesomeIcon icon={faAddressBook} />
//                 <span>Contact</span>
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Section2;



import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faBriefcase, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook as farAddressBook } from '@fortawesome/free-regular-svg-icons';  
import './Section2.css'; 
import { NavLink } from 'react-router-dom';

const Section2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400); // Delay to match the CSS transition duration
  };
  return (
    <div className="container section2main">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="section2nav">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={farUser} />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Resume" activeClassName="active" className="nav-link" onClick={closeMenu}>
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active" className="nav-link" onClick={closeMenu}>
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blogs" activeClassName="active" className="nav-link" onClick={closeMenu}>
                <FontAwesomeIcon icon={faBlogger} />
                <span>Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active" className="nav-link" onClick={closeMenu}>
              <FontAwesomeIcon icon={farAddressBook} />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section2;
