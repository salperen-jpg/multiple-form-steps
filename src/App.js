import React, { useState } from 'react';
import Info from './components/Info';
import AddOns from './components/AddOns';
import Plan from './components/Plan';
import Summary from './components/Summary';
import { addOnsOptionsData } from './components/data';
function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    addOns: [],
  });
  const [addOnsOptions, setAddOptions] = useState(addOnsOptionsData);
  const [btnIndex, setBtnIndex] = useState(0);
  const [priceToggle, setPriceToggle] = React.useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.name === 'plan') {
      value = e.target.dataset.label;
    }
    if (e.target.name === 'addOns') {
      const { id, checked } = e.target;
      if (checked) {
        const spec = addOnsOptions.find((sp) => sp.id === Number(id));
        setData({ ...data, addOns: [...data.addOns, spec] });
        return;
      } else {
        setData({
          ...data,
          addOns: data.addOns.filter((f) => f.id !== Number(id)),
        });
        return;
      }
    }
    setData({ ...data, [name]: value });
  };

  //  FORM ELEMENTS
  const formData = [
    <Info {...data} handleChange={handleChange} />,
    <Plan
      {...data}
      handleChange={handleChange}
      priceToggle={priceToggle}
      setPriceToggle={setPriceToggle}
    />,
    <AddOns
      {...data}
      handleChange={handleChange}
      addOnsOptions={addOnsOptions}
      priceToggle={priceToggle}
    />,
    <Summary {...data} handleChange={handleChange} priceToggle={priceToggle} />,
  ];
  // BUTTON DATA
  const buttonData = [
    { step: 'step 1', text: 'your info' },
    { step: 'step 2', text: 'select plan' },
    { step: 'step 3', text: 'add-ons' },
    { step: 'step 4', text: 'summary' },
  ];

  const prev = () => {
    setBtnIndex((oldIndex) => oldIndex - 1);
  };
  const next = () => {
    setBtnIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex > formData.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <section>
      <div className='container'>
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
        <div className='form-container'>
          <div>{formData[btnIndex]}</div>
          <div className='my-inner-buttons'>
            <div>
              {btnIndex !== 0 ? (
                <button type='button' className='btn go-back' onClick={prev}>
                  go back
                </button>
              ) : (
                <div></div>
              )}

              <button type='button' className='btn' onClick={next}>
                next step
              </button>
            </div>
          </div>
        </div>
      </div>
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
            <button type='button' className='btn' onClick={next}>
              next step
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
