import React from 'react';

const InnerButtons = ({
  isSubmitted,
  setIsSubmitted,
  btnIndex,
  prev,
  next,
}) => {
  return (
    <div className='my-inner-buttons'>
      <div>
        {btnIndex !== 0 ? (
          <button type='button' className='btn go-back' onClick={prev}>
            go back
          </button>
        ) : (
          <div></div>
        )}
        {btnIndex === 3 ? (
          <button
            type='button'
            className='btn'
            onClick={() => setIsSubmitted(!isSubmitted)}
          >
            submit
          </button>
        ) : (
          <button type='button' className='btn' onClick={next}>
            next step
          </button>
        )}
      </div>
    </div>
  );
};

export default InnerButtons;
