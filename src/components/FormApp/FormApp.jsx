import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import './media.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
// import axios from 'axios';
import Swal from 'sweetalert2';
// import { host } from '../../constants/constants';
import Spinner from 'react-bootstrap/Spinner';
import InputMask from '../InputMask/InputMask';

// type Error = {
//   name: string;
//   phone: string;
//   message: string;
// };

const FormApp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const inputPhone = useRef();

  const handleChangeInput = (e) => {
    console.log(e.target.type);
    if (e.target.type === 'text') {
      setName(e.target.value);
    }
    //  else {
    //   setPhone(e.target.value);
    // }
    if (errors && !!errors[e.target.type]) {
      setErrors({
        ...errors,
        [e.target.type]: null,
      });
    }
  };

  const handleChangeTextarea = (e) => {
    console.log(e.target.type);
    setMessage(e.target.value);
    if (!!errors[e.target.type]) {
      setErrors({
        ...errors,
        [e.target.type]: null,
      });
    }
  };

  useEffect(() => {
    if (phone && phone.length > 13) {
      setPhone(phone.slice(0, -1));
    }
  }, [phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    console.log('tut');
    console.log('formErrors: ', formErrors);
    console.log('phone: ', phone);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setLoading(true);
      try {
        const maskPhone = '+375' + phone;
        // const { data } = await axios.post(`${host}/api/send_mail`, {
        //   name,
        //   maskPhone,
        //   message,
        // });
        console.log('name: ', name, 'phone: ', maskPhone, 'message: ', message);
        Swal.fire({
          icon: 'success',
          title: 'Заявка отправлена.',
          text: 'data',
        });
      } catch ({ response }) {
        console.log('error');
        Swal.fire({
          icon: 'error',
          title: 'Неудача.',
          text: response,
        });
      }
      inputPhone.current.value = '';
      setName('');
      setPhone('');
      setMessage('');
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!phone || phone === '') newErrors.tel = 'Пожалуйста введите ваш телефон';
    else if (!phone.match(/^(29|25|44|33)(\d{3})(\d{2})(\d{2})$/)) {
      newErrors.tel = 'Некорректный телефон';
    }
    if (!name || name.trim() === '') newErrors.text = 'Пожалуйста введите ваше имя';
    else if (!name.match(/^[А-ЯЁа-яёa-zA-Z\s]{2,40}$/)) {
      newErrors.text = 'Некорректное имя';
    }
    if (!message || message.trim() === '') newErrors.textarea = 'Пожалуйста введите сообщение';

    return newErrors;
  };

  return (
    <div id="form_app" className="form_app">
      <h1 className="title">Остались вопросы?</h1>
      <div className="form">
        <div className="form_container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChangeInput(e)}
                value={name}
                disabled={loading ? true : false}
                isInvalid={!!errors.text}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.text}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ваш телефон</Form.Label>
              <span className={errors.tel ? 'mask_err mask' : 'mask'}>+375</span>
              <InputMask
                phone={phone}
                setPhone={setPhone}
                errors={errors}
                setErrors={setErrors}
                inputPhone={inputPhone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Задайте нам вопрос</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e) => handleChangeTextarea(e)}
                value={message}
                disabled={loading ? true : false}
                isInvalid={!!errors.textarea}
                as="textarea"
                rows={3}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.textarea}</Form.Control.Feedback>
            </Form.Group>
            <Button disabled={loading ? true : false} variant="primary" type="submit">
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                'Отправить'
              )}
            </Button>
          </Form>
        </div>
        <div className="cards_container">
          <a href="tel:375333333333" className="card phone container">
            <div className="dark"></div>
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            <div className="title">Номер телефона</div>
            <div className="text">+375 (33) 333-33-33</div>
          </a>
          <a
            href="https://www.instagram.com/neon.hameleon.by/"
            rel="noreferrer"
            target={'_blank'}
            className="card inst container"
          >
            <div className="dark"></div>

            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="title">Инстаграм</div>
            <div className="text">@neon.hameleon</div>
          </a>

          <a href="mailto:mail@gmail.com" className="card email container">
            <div className="dark"></div>
            <div className="icon">
              <MdEmail />
            </div>
            <div className="title">Эл. адрес</div>
            <div className="text">mail@gmail.com</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormApp;
