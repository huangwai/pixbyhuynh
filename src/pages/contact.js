import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_15qvc26', 'template_h8azk7t', form.current, 'iuzNDtNBVCkuhUrfg').then(
      result => {
        // console.log(result.text);
        alert('Message Sent!!!');
        // console.log('Message Sent');
      },
      error => {
        // console.log(error.text);
      }
    );
  };

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color: '#FFFFFF' }}>
      <StyledContactForm>
      <Typography
            align="center"
            // textAlign={'center'}
            variant="subject1"
            // noWrap
            component="a"
            // href="/"
            sx={{
              pt:'10%',
              pl: '25%',
              // ml: '23%',
              // px: 'auto',
              display: { xs: 'block', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize: '30px',
              textDecoration: 'none',
              textAlign: 'center',
              m: 'auto',
              // pl:'2%',
            }}
          >
            Contact Me
          </Typography>

        <br></br>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name *</label> */}
          <input type="text" placeholder='Enter your full name' name="user_name" />
          {/* <label>Email Address *</label> */}
          <input type="email"placeholder='Enter your email address' name="user_email" />
          {/* <label>Message *</label> */}
          <textarea placeholder='Enter your message' name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    // </div>
  );
};

export default ContactForm;
// Styles
const StyledContactForm = styled.div`
  width: auto;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    margin-left: 3%;
    font-size: 16px;
    fontFamily: 'monospace';
    // color: #ffffff;
    input {
      margin: auto;
      margin-top: 1rem;
      background-color: inherit;
      width: 50%;
      height: 40px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      fontFamily: 'monospace';
      // border: 1px solid #0440cb;
      &:focus {
        border: 2px solid grey;
      }
    }
    textarea {background-color: inherit;
      margin: auto;
      margin-top: 2rem;
      max-width: 50%;
      min-width: 10%;
      width: 90%;
      max-height: 100px;
      min-height: 200px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      fontFamily: 'monospace';
      // border: 1px solid #0440cb;
      &:focus {
        border: 2px solid grey;
      }
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      height: 40px;
      font-size: 18px;
      background-color: rgb(148 163 184);
      fontFamily: 'monospace';
      color: #ffffff;
      border: none;
      padding: 1%;
      padding-bottom: 3%;
      padding-left: 1%;
      padding-right: 1%;
      &:hover {
        background-color: #10131F;
        border: 2px solid grey;
        transition: background-color 1s;
      }
    }
  }
`;