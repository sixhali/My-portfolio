import React, { useState } from 'react'
import myContactmodule from './myContact.module.css'
import { IoIosMail } from "react-icons/io";
import { PiPhoneList } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Audio } from 'react-loader-spinner';
import Swal from 'sweetalert2'


function Mycontact({isDarkMode}) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [result, setResult] = useState('');
  const [loading , setLoading]=useState(false)
  

    const onSubmit = async (event) => {
        event.preventDefault();



        if (!name || !email || !message){
            setResult("")     
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all fields',
                icon: 'error',
                confirmButtonText: 'Ok',
                iconColor: 'red',
            })    
            return
        }

        const splitEmail = email.split('@')
        if (!email || splitEmail.length !== 2 || splitEmail[1].split('.').length > 2) {
          Swal.fire({
              title: 'Error!',
              text: 'Please enter a valid email address',
              icon: 'error',
              confirmButtonText: 'Ok',
              iconColor: 'red',
          });

          setName('')
          setEmail('')
          setMessage('')
          return;
        } 

        setLoading(true)
        setResult("Sending....");
        const formData = new FormData();
        formData.append("access_key", "af067679-e460-4a04-a9cd-0977aecf4c95");
        formData.append('name',name)
        formData.append('Email',email)
        formData.append('message',message)

    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          setName('')
          setEmail('')
          setMessage('')
          Swal.fire({
            title: "Good job!",
            text: "You Post Form Submitted Successfully",
            icon: "success"
          });
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
        setLoading(false)
    
    };
  return (
    <form onSubmit={onSubmit} id='contact' className={myContactmodule.Container}>
        <h1 style={{ color: isDarkMode ? '#fff' : '#000' }}>Contact</h1>
        <div style={{ color: isDarkMode ? '#fff' : '#000' }} className={myContactmodule.Content}>
            <div className={myContactmodule.Text}
            style={{ color: isDarkMode ? '#fff' : '#000' }}>
                <h1 >Let's talk</h1>
                <p>I'm currently avaliable to take on new projects,
                     so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                <div className={myContactmodule.mail}><IoIosMail className={myContactmodule.mailIcon}/><p>sixhaliguliyev@gmail.com</p></div>     
                <div className={myContactmodule.Phone}><PiPhoneList className={myContactmodule.PhoneIcon} /><p>+994 50 - 972 - 22 - 00</p></div>     
                <div className={myContactmodule.Location}><SlLocationPin className={myContactmodule.LocationIcon} /><p>Baku, Republic of Azerbaijan</p></div>     
            </div>
            <div className={myContactmodule.inputBtn}>
                <div className={myContactmodule.input}
                style={{ color: isDarkMode ? '#fff' : '#000' }}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />

                    <label>Your Email</label>
                    <input type="text" placeholder='Enter Your Email'  value={email} onChange={(e)=>setEmail(e.target.value)} />

                    <label>Write your message here</label>
                    <textarea rows={8} placeholder='Enter Your message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>

                <div className={myContactmodule.Submit}>
                  <button disabled={loading} type='submit'>
                   {loading ? "Submitting..." : "Submit now"}</button>
                   {loading && (
                    <Audio
                    height="50"
                    width="50"
                    radius="9"
                    color="green"
                    ariaLabel="loading"/>)}
                </div>
            </div>

        </div>

    </form>
  )
}

export default Mycontact;