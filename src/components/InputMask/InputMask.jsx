import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';

const InputMask = ({ phone, setPhone, errors, setErrors, inputPhone }) => {
  const handleChange = () => {
    const cardValue = inputPhone.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputPhone.current.value = !cardValue[2]
      ? cardValue[1]
      : `(${cardValue[1]}) ${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${
          cardValue[4] ? `-${cardValue[4]}` : ''
        }`}`;
    const numbers = inputPhone.current.value.replace(/(\D)/g, '');
    setPhone(numbers);
    if (!!errors[inputPhone.current.type]) {
      setErrors({
        ...errors,
        [inputPhone.current.type]: null,
      });
    }
  };

  useEffect(() => {
    handleChange();
  }, [phone]);

  return (
    <>
      <Form.Control
        className="phone"
        type="tel"
        ref={inputPhone}
        onChange={handleChange}
        isInvalid={!!errors.tel}
      />
      <Form.Control.Feedback type="invalid">{errors.tel}</Form.Control.Feedback>
    </>
  );
};

export default InputMask;
