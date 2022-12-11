const Row = ({ type, name, value, handlerChange, placeholder }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        placeholder={placeholder || ''}
        id={name}
        name={name}
        value={value}
        onChange={handlerChange}
        required
      />
    </div>
  );
};

export default Row;
