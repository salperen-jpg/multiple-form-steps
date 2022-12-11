import React from 'react';
import planDetails from './data';
const Plan = ({ handleChange, plan, priceToggle, setPriceToggle }) => {
  return (
    <div className='plan-form'>
      <h2>select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>
      <div className='btns'>
        {planDetails.map((p, index) => {
          const { name, image, price } = p;
          return (
            <button
              type='button'
              key={index}
              className={plan === name ? 'plan active-plan' : 'plan'}
              name='plan'
              data-label={name}
              onClick={handleChange}
            >
              <img src={image} className='plan-img' />
              <div className='info'>
                <span className='name'>{name}</span>
                <span className='price'>
                  {priceToggle ? `$${price * 10}/yr ` : `$${price}/mo`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className='btn-containerr'>
        <span className={`${!priceToggle ? 'setColor' : ''}`}>Monthly</span>

        <label className='switch'>
          <input
            type='checkbox'
            onClick={(e) => {
              setPriceToggle(!priceToggle);
              console.log('ws');
            }}
          />
          <span className='slider round'></span>
        </label>

        <span className={`${priceToggle ? 'setColor' : ''}`}>Yearly</span>
      </div>
    </div>
  );
};

export default Plan;
