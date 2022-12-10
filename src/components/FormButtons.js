import React from 'react';

const FormButtons = ({ buttonData, btnIndex }) => {
  return (
    <div className='btn-container'>
      {buttonData.map((btn, index) => {
        const { step, text } = btn;
        return (
          <div key={index}>
            <button
              className={index === btnIndex ? 'a-btn form-btn' : 'form-btn'}
            >
              {index + 1}
            </button>
            <p>
              <span className='step'>{step}</span>
              <span className='btn-text'>{text}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FormButtons;
