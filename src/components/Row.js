const Row = ({ type, name, value, handlerChange, placeholder }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        placeholder={placeholder || ''}
        name={name}
        value={value}
        onChange={handlerChange}
      ></input>
    </div>
  );
};

export default Row;
