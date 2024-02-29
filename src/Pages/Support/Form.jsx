import React, {  useState } from 'react'

const Form = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

   
    if (!formData.name.trim()) {
      newErrors.name = 'Required*';
      isValid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Required*';
      isValid = false;
    }

    
    if (!formData.message.trim()) {
      newErrors.message = 'Required*';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      setSubmitted(true);
      setPopupMessage('Thank you for your submission!');
      console.log('Form submitted:', formData);
    } else {
      setPopupMessage('Please fill in all the required fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };
return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh',  }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        
        {submitted ? (
          <p className='font-semibold text-lg text-[#FACA7F]'>{popupMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ padding:'20px' }}>
        
              
              <input 
             style={{ width: '100%', textAlign: 'center', fontSize:'2rem',backgroundColor:'#D9D9D9',color:"#000", borderRadius:'25px' }}

                type="text"
                placeholder='    Enter Your Name:'
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onClick={() => setPopupMessage('')}
              />
              {errors.name && <p className="text-[#EE1819]">{errors.name}</p>}
            </div>

            <div style={{ padding:'20px' }}>
             
              <input
              style={{ width: '100%', textAlign: 'center', fontSize:'2rem',backgroundColor:'#D9D9D9',color:"#000", borderRadius:'25px' }}

               placeholder='     Enter Your Email:'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onClick={() => setPopupMessage('')}
              />
              {errors.email && <p className="text-[#EE1819]">{errors.email}</p>}
            </div>

            <div style={{ padding:'20px' }}>
            

              <textarea
              style={{ width: '100%', textAlign: 'center', fontSize:'2rem',backgroundColor:'#D9D9D9',color:"#000", borderRadius:'25px',  }}
              placeholder='     Type message here:'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onClick={() => setPopupMessage('')}
              />
              {errors.message && <p className="text-[#EE1819] ">{errors.message}</p>}
            </div>

            <button className='btn-animation' style={{ width: '40%', textAlign: 'center', fontSize:'2rem',backgroundColor:'#CC1919', borderRadius:'25px', color:'#fff' }} type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>)
}

export default Form