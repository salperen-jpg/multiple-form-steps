import React, { useState } from 'react';
import Info from './components/Info';
import AddOns from './components/AddOns';
import Plan from './components/Plan';
import Summary from './components/Summary';
import {
  addOnsOptionsData as addOnsOptions,
  buttonData,
} from './components/data';
import FormButtons from './components/FormButtons';
import InnerButtons from './components/InnerButtons';
import BodyButtons from './components/BodyButtons';

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    addOns: [],
  });
  const [btnIndex, setBtnIndex] = useState(0);
  const [priceToggle, setPriceToggle] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I am here');
    next();
  };

  // CHANGES
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
    <Info {...data} handleChange={handleChange} handleSubmit={handleSubmit} />,
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
    <Summary
      {...data}
      handleChange={handleChange}
      priceToggle={priceToggle}
      isSubmitted={isSubmitted}
    />,
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
        <FormButtons buttonData={buttonData} btnIndex={btnIndex} />
        <form className='form-container' onSubmit={handleSubmit}>
          <div>{formData[btnIndex]}</div>
          {!isSubmitted && (
            <InnerButtons
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              btnIndex={btnIndex}
              prev={prev}
              next={next}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
      {!isSubmitted && (
        <BodyButtons btnIndex={btnIndex} prev={prev} next={next} />
      )}
    </section>
  );
}

export default App;
