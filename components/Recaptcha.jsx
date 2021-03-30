import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

const Recaptcha = ({ onChange }) => (
  <ReCAPTCHA
    sitekey="6LfTxZMaAAAAAMucXR_wViWghUn8rHLkAmmRA8j3"
    onChange={onChange}
  />
);

export default Recaptcha;
