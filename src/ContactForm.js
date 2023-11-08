import React , {useEffect, useState} from 'react';
import mapimg from "./Images/icon-map1.png"
import mailimg from "./Images/icon-mail1.png"
import telimg from "./Images/icon-tel3.png"
import ContactSection from './ContactSection';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [value, setValue] = useState()
    

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, phone, subject, message } = e.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(conForm);
  };

  return (

     <>
     <ContactSection/>
    <div className="container mt-5 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" id='contact'>
      <div className="row">
        <div className="col ">
            <div className=' row custom-row'>
            <div className='col-3'>
            <img src={mapimg}  alt='map' style={{width:'90px', height:'90px'}}/>
            </div>
            <div className='col-4 mt-3 mb-3 custom-row1'>
            <h2>Address</h2>
            <p>Peshawar, Pakistan</p>
            </div>
            </div>
            

            
            <div className=' row custom-row'>
            <div className='col-3 '>
            <img src={mailimg}  alt='map' style={{width:'90px', height:'90px'}}/>
            </div>
            <div className='col-4 mt-3 mb-3 custom-row1'>
            <h2>Email</h2>
            <p>samiullah.icp.edu.pk@gmail.com</p>
            </div>
            </div>

            
            <div className=' row custom-row'>
            <div className='col-3'>
            <img src={telimg}  alt='map' style={{width:'100px', height:'100px'}}/>
            </div>
            <div className='col-4 mt-3 mb-3 custom-row1'>
            <h2>Phone</h2>
            <p>+923185489480</p>
            </div>
            </div>
        </div>

        <div className="col">
          
          <form  action="https://formspree.io/f/xaygvzyy"
  method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control" type="text" id="name" name='name' required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control" type="email" id="email" name='email' required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <PhoneInput
      placeholder="Enter phone number"
      name="phone"
      id="phone"
      defaultCountry="PK"
      value={value}
      
      onChange={setValue}/>

                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input className="form-control" type="text" id="subject" name='subject' required />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" name='message' required />
            </div>
            <button className="btn" type="submit">
              <span>{formStatus}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ContactForm;
