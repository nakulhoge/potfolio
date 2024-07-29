

import React from 'react';
import './Resume.css'; // Ensure to import your CSS file

const educationData = [
  {
    period: '2019-2023',
    title: 'B.Tech in E&TC',
    institution: 'Government College of Engineering,',
    location: 'Yavatmal',
    bgClass: 'bg-prink',
  },
  {
    period: '2018-2019',
    title: 'HSC',
    institution: 'Shri Ramkrishna Paramhans College',
    location: 'Parbhani',
    bgClass: 'bg-catkrill',
  },
  {
    period: '2017-2018',
    title: 'SSC',
    institution: 'Arbindo Akshar Jyoti School, ',
    location: 'Parbhani',
    bgClass: 'bg-prink',
  },
];

const experienceData = [
  {
    period: '2024 - Present',
    title: 'ReactJs Developer',
    company: 'Bestowal Services',
    bgClass: 'bg-catkrill',
  },
  // {
  //   period: '2015-2017',
  //   title: 'Cr. Web Developer',
  //   company: 'ib-themes ltd.',
  //   bgClass: 'bg-prink',
  // },
  // {
  //   period: '2014 - 2015',
  //   title: 'Jr. Web Developer',
  //   company: 'Creative Gigs.',
  //   bgClass: 'bg-catkrill',
  // },
];

const skillsData = [
  { title: 'Web Development', percentage: 85, bgClass: 'progress-bg-1' },
  { title: 'Databases', percentage: 80, bgClass: 'progress-bg-2' },
  { title: 'ReactJS', percentage: 75, bgClass: 'progress-bg-3' },
  { title: 'React Native', percentage: 70, bgClass: 'progress-bg-4' },
];

const knowledgeData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'ReactJS',
  'Angular',
  'Node.js',
  'jQuery ',
  'Ajax',
  'Express.js',
  'React Native',
  'Android Studio',
  'Redux',
  ];

export default function Resume() {
  return (
    <div className="resumepagemain">
      <div className="resumepagefirst">
        <div className="pl-60 pr-60 pt-60">
          <div className="mb-15">
            <h2 className="pagetitle">Resume</h2>
          </div>
        </div>
        <div className="section-wrapper pl-60 pr-60 mb-60 resumepage">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <img
                    alt="education"
                    loading="lazy"
                    width="38"
                    height="23"
                    decoding="async"
                    data-nimg="1"
                    srcSet="/logo6.png"
                    src="/logo6.png"
                    style={{ color: 'transparent' }}
                  />
                  Education
                </h4>
              </div>
              <div className="bostami-card-wrap">
                {educationData.map((edu, index) => (
                  <div key={index} className={`bostami-card-item ${edu.bgClass} mb-20`}>
                    
                    <h6 className="card-title">
                      {edu.title} <span>- {edu.institution}</span>
                    </h6>
                    <p className="card-text">{edu.location}</p>
                    <span className="card-subtitle">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <img
                    alt="experience"
                    loading="lazy"
                    width="30"
                    height="27"
                    decoding="async"
                    data-nimg="1"
                    srcSet="/logo6.png"
                    src="/logo6.png"
                    style={{ color: 'transparent' }}
                  />
                  Experience
                </h4>
              </div>
              <div className="bostami-card-wrap">
                {experienceData.map((exp, index) => (
                  <div key={index} className={`bostami-card-item ${exp.bgClass} mb-20`}>
                    <span className="card-subtitle">{exp.period}</span>
                    <h6 className="card-title">{exp.title}</h6>
                    <p className="card-text">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="bostami-section-title-wrap mb-20">
              <h4 className="section-title">Knowledge</h4>
            </div>
            <div className="skill-bar-wrap">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-bar-item mb-30">
                  <div className="title-wrap">
                    <h5 className="title">{skill.title}</h5>
                    <span className="count">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className={`progress-line ${skill.bgClass}`} style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="bostami-section-title-wrap mb-20">
              <h4 className="section-title">Skills</h4>
            </div>
            <div className="knowledeges-item-wrap">
              {knowledgeData.map((knowledge, index) => (
                <span key={index} className="gk-item">{knowledge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center pt-25 pb-25">
        <span>© 2024 All Rights Reserved by Nakul Hoge.</span>
      </div>
    </div>
  );
}
