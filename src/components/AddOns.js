import React from 'react';

const AddOns = ({ handleChange, addOnsOptions, priceToggle }) => {
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className='options'>
        {addOnsOptions.map((opt, index) => {
          return (
            <SingleOption
              key={index}
              {...opt}
              handleChangeAddOns={handleChange}
              priceToggle={priceToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

const SingleOption = ({
  id,
  name,
  text,
  price,
  handleChangeAddOns,
  priceToggle,
}) => {
  const [state, setState] = React.useState(false);
  const handleChange = (e) => {
    setState(e.target.checked);
    e.target.id = id;
    handleChangeAddOns(e);
  };
  return (
    <article
      className={
        state ? 'single-option active-single-option ' : 'single-option '
      }
    >
      <input
        type='checkbox'
        name='addOns'
        value={state}
        id='addOns'
        checked={state}
        onChange={handleChange}
      />
      <div className='option-info'>
        <span>{name}</span>
        <span>{text}</span>
      </div>
      <span className='option-price'>
        {priceToggle ? `+${price * 10}/yr ` : `+${price}/mo `}
      </span>
    </article>
  );
};

export default AddOns;
