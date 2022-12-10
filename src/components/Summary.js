import React from 'react';
import planDetails from './data';
import ThankYou from './ThankYou';

const Summary = ({ addOns, plan, priceToggle, isSubmitted }) => {
  const specPlan = planDetails.find((pl) => pl.name === plan);

  const calcTotal = () => {
    const totalAddOns = addOns.reduce((acc, curr) => acc + curr.price, 0);
    if (priceToggle) {
      return (totalAddOns + specPlan.price) * 10;
    }
    return totalAddOns + specPlan.price;
  };

  if (isSubmitted) {
    return <ThankYou />;
  }

  return (
    <main>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='checkout-pane'>
        <header>
          <span className='blue-600'>
            {specPlan.name} {priceToggle ? ' (Yearly)' : '(Monthly)'}
          </span>
          <span className='blue-600'>
            ${priceToggle ? `${specPlan.price * 10}yr` : `${specPlan.price}mo`}
          </span>
        </header>
        <div className='addOns-info'>
          {addOns.map((add, index) => {
            return (
              <article key={index}>
                <span>{add.name}</span>
                <span className='blue-600'>
                  ${priceToggle ? `${add.price * 10}yr` : `${add.price}mo`}
                </span>
              </article>
            );
          })}
        </div>
      </div>
      <footer>
        <span>Total {priceToggle ? ' (per year)' : '(per month)'}</span>
        <span>
          ${calcTotal()}/{priceToggle ? 'yr' : 'mo'}
        </span>
      </footer>
    </main>
  );
};

export default Summary;
