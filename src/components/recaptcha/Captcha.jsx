import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = () => {
  const onChange = (value) => {
    console.log('Captcha value:', value);
  };
  return (
    <div>
   
      <ReCAPTCHA sitekey='1234' onChange={onChange} />,
    </div>
  );
};

export default Captcha;