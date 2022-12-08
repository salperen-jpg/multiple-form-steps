import React from 'react';
import planDetails from './data';
const Summary = ({ addOns, plan, priceToggle }) => {
  const specPlan = planDetails.find((pl) => pl.name === plan);

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='checkout-pane'>
        <header>
          <div>
            <span>
              {specPlan.name}
              {priceToggle ? 'Yearly' : 'Monthly'}
            </span>
            <button className='change-btn'>change</button>
          </div>
          <span>
            ${priceToggle ? `${specPlan.price * 10}yr` : `${specPlan.price}mo`}
          </span>
        </header>
        <div className='addOns-info'>
          {addOns.map((add, index) => {
            return (
              <article key={index}>
                <p>
                  <span>{add.name}</span>
                  <span>
                    ${priceToggle ? `${add.price * 10}yr` : `${add.price}mo`}
                  </span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
