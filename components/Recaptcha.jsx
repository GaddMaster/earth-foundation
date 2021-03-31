import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

const Recaptcha = ({ onChange }) => (
  <ReCAPTCHA
    sitekey="6LdDo5MaAAAAADImSetLoTAztKvwpzj0DAJMV_Tm"
    onChange={onChange}
  />
);

export default Recaptcha;
