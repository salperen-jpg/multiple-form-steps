import React from 'react';

const ThankYou = () => {
  return (
    <div className='thank-you'>
      <article>
        <img
          src={'/images/icon-thank-you.svg'}
          className='thank-you-image'
          alt=''
        />
        <h2>thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform.If you ever need support, please feel free to email us at
          support@loremgaming.com
        </p>
      </article>
    </div>
  );
};

export default ThankYou;
