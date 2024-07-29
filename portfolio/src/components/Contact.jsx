// import React, { useState } from 'react';
// import "./Contact.css"
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to server)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="col-12 aboutpage">
//       <div className="section-wrapper pl-60 pr-60 pt-60">
//         <div className="bostami-page-title-wrap mb-15 ">
//           <h2 className="pagetitle">Contact</h2>
//         </div>
//       </div>
//       <div className="section-wrapper pr-60 pl-60 mb-60">
//         <div className="contact-area bg-light-white-2">
//           <h5 className="contact-title">I'm always open to discussing product</h5>
//           <h5 className="contact-title-b">design work or partnerships.</h5>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-input-item mb-60">
//               <label className="input-label name">name *</label>
//               <input
//                 className="input-box name false"
//                 required
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-input-item mb-60">
//               <label className="input-label email">Email *</label>
//               <input
//                 className="input-box email false"
//                 required
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-input-item mb-40">
//               <label className="input-label message">Message *</label>
//               <textarea
//                 name="message"
//                 className="input-box message false"
//                 cols="30"
//                 rows="10"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="form-btn-wrap">
//               <button type="submit" value="Send" className="form-btn">
//                 submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Form submitted:', response.data);
      alert('Form has been submitted successfully!');
      // Clear form fields after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (
    <div className="col-12 aboutpage">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15 ">
          <h2 className="pagetitle">Contact</h2>
        </div>
      </div>
      <div className="section-wrapper pr-60 pl-60 mb-60">
        <div className="contact-area bg-light-white-2">
          <h5 className="contact-title">I'm always open to discussing product</h5>
          <h5 className="contact-title-b">design work or partnerships.</h5>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-input-item mb-60">
              <label className="input-label name">Name *</label>
              <input
                className="input-box name false"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-item mb-60">
              <label className="input-label email">Email *</label>
              <input
                className="input-box email false"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-item mb-40">
              <label className="input-label message">Message *</label>
              <textarea
                name="message"
                className="input-box message false"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-btn-wrap">
              <button type="submit" value="Send" className="form-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
