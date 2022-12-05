import React from 'react';

const AddOns = () => {
  const addOnsOptions = [
    { name: 'Online service', text: 'Access to multiplayer games', price: 1 },
    { name: 'Larger storage', text: 'extra 1TB of cloud save', price: 2 },
    {
      name: 'Customizable profile',
      text: 'Custom theme on your profile',
      price: 2,
    },
  ];

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className='options'>
        {addOnsOptions.map((opt, index) => {
          return <SingleOption key={index} {...opt} />;
        })}
      </div>
    </div>
  );
};

const SingleOption = ({ name, text, price }) => {
  const [state, setState] = React.useState(false);
  const handleChange = (e) => {
    setState(e.target.checked);
  };
  return (
    <article className='single-option'>
      <input
        type='checkbox'
        name='addOn'
        value={state}
        id='addOns'
        checked={state}
        onChange={handleChange}
      />
      <div className='option-info'>
        <span>{name}</span>
        <span>{text}</span>
      </div>
      <span className='option-price'>+${price}/mo</span>
    </article>
  );
};

export default AddOns;
