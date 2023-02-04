import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Mailer.css'

export const Mailer = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axooghn', 'template_aluyxwl', form.current, 'OLaQDd_xIR8sba-Ao')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setMessage('');
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Messaggio</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" value="Invia" />
    </form>
  );
};
