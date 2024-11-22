import React, { useState } from 'react';
import '../Components/contact.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Img/qr.png'
const Contact = () => {
  const navigate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ message: '', name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();    
    setIsSent(true);
     navigate('')
   
  };

  return (
    <>
      <div className="con">
        <div className={`body ${isSent ? 'sent' : ''}`}>
          <div className="wrapper-centered">
            <article className="letter">
              <form onSubmit={handleSubmit}>
                <div className="side">
                  <h1>Contact Us</h1>
                  <p>
                    <textarea
                      placeholder="Your message"
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      required
                    ></textarea>
                  </p>
                </div>
                <div className="side">
                  <p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </div>
              </form>
            </article>
            <div className="envelope front"></div>
            <div className="envelope back"></div>
          </div>
          {isSent && <p className="result-message centered">Thank you for your message! <br /> Please scan the QR code and send me a text.

</p>}
          <img className='qr' src={img1} alt="Qr-Code" />
        </div>
      </div>
      <p className="footer" style={{ textAlign: 'center', marginTop: '8%' }}>
  &copy; {new Date().getFullYear()} Yonas Alemu. All rights reserved.
</p>

    </>
  );
};

export default Contact;