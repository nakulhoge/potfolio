
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCamera, faCode } from '@fortawesome/free-solid-svg-icons';
import "./About.css";

export default function About() {
  const services = [
    { title: 'App Development', icon: faMobileAlt, clicon:'#DE3163',bg: '#fff4f4', para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpa' },
    { title: 'Photography', icon: faCamera, clicon:'#7E098E',bg: '#eef5fa', para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpa' },
    { title: 'Web Development', icon: faCode, clicon:'#192C85',bg: '#fff4f4', para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpa' },
  ];

  return (
    <div className="col-12 aboutpage">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15 about">
          <h2 className="pagetitle">About</h2>
          <p>
          Recent B.Tech graduate with a solid foundation in full-stack development, specializing in the MERN stack and Java. Passionate about developing and maintaining dynamic web applications. Quick learner with excellent problem-solving abilities, eager to contribute to innovative IT projects.
          </p>
          <p>
            My aim is to leverage my expertise in the MERN stack to build scalable and efficient applications. Striving to continuously learn and adapt to new technologies in the ever-evolving IT landscape.
          </p>
        </div>
      </div>

      <div className="section-wrapper pl-60 pr-60 whatido">
        <div className="bostami-section-title-wrap mb-30">
          <h3 className="section-title">What I Do!</h3>
        </div>
        <div className="bostami-what-do-wrap mb-30">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                <div className={`bostami-what-do-item abtbox`} style={{ backgroundColor: service.bg }}>
                  <div className="icon1" style={{ margin: '0px auto' }}>
                    <FontAwesomeIcon icon={service.icon} className="product-img" style={{ color: service.clicon ,fontSize:'20px' }} />
                  </div>
                  <div className="text">
                    <h4 className="title">{service.title}</h4>
                    <p className=''>{service.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
