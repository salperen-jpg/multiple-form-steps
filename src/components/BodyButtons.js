import React from 'react';

const BodyButtons = ({ btnIndex, prev, next }) => {
  return (
    <div className='general-buttons small-buttons'>
      <div className='inner-buttons'>
        {btnIndex !== 0 ? (
          <button type='button' className='btn  go-back' onClick={prev}>
            go back
          </button>
        ) : (
          <div></div>
        )}
        {btnIndex !== 3 && (
          <button type='submit' className='btn' onClick={next}>
            next step
          </button>
        )}
      </div>
    </div>
  );
};

export default BodyButtons;
