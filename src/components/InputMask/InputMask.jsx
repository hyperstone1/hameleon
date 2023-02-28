import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

const InputMask = ({ phone, setPhone, errors }) => {
  //   const [card, setCard] = useState();
  const inputCard = useRef();

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `(${cardValue[1]}) ${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${
          cardValue[4] ? `-${cardValue[4]}` : ''
        }`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setPhone(numbers);
  };

  useEffect(() => {
    handleChange();
    console.log(errors);
    console.log(!phone.match(/^(29|25|44|33)(\d{3})(\d{2})(\d{2})$/));
    // eslint-disable-next-line
  }, [phone]);

  return (
    <>
      <Form.Control
        className="phone"
        type="tel"
        ref={inputCard}
        onChange={handleChange}
        isInvalid={!!errors.tel}
      />
      <Form.Control.Feedback type="invalid">{errors.tel}</Form.Control.Feedback>
      {/* <input type="text" /> */}
    </>
  );
};

export default InputMask;
