import React from 'react';
import Row from './Row';
const Info = ({ name, email, phone, handleChange }) => {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name,email,address,and phone number</p>
      <Row
        type='text'
        name='name'
        value={name}
        handlerChange={handleChange}
        placeholder='e.g Stephen King'
      />
      <Row
        type='email'
        name='email'
        value={email}
        handlerChange={handleChange}
        placeholder='e.g stephenking@lorem.com'
      />
      <Row
        type='text'
        name='phone'
        value={phone}
        handlerChange={handleChange}
        placeholder='e.g +1 234 567 890'
      />
    </div>
  );
};

export default Info;
