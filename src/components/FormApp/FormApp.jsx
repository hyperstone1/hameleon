import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';
import { host } from '../../constants/constants';
import Spinner from 'react-bootstrap/Spinner';

// type Error = {
//   name: string;
//   phone: string;
//   message: string;
// };

const FormApp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [focus, setFocus] = useState([
    { type: 'text', focus: false, value: '' },
    {
      type: 'phone',
      focus: false,
      value: '',
    },
    {
      type: 'textarea',
      focus: false,
      value: '',
    },
  ]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFocus(
      focus.map((item) =>
        item.type === 'text'
          ? { ...item, value: name }
          : item && item.type === 'phone'
          ? { ...item, value: phone }
          : item && item.type === 'textarea'
          ? { ...item, value: message }
          : item,
      ),
    );
    // eslint-disable-next-line
  }, [name, phone, message]);

  const handleFocusInput = (e) => {
    setFocus(
      focus.map((item) =>
        item.type === e.target.type ? { ...item, focus: true } : { ...item, focus: false },
      ),
    );
  };
  //: React.ChangeEvent<HTMLInputElement>
  const handleBlurInput = (e) => {
    setFocus(focus.map((item) => ({ ...item, focus: false })));
  };

  const handleChangeInput = (e, type) => {
    if (type === 'text') {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
    if (errors && !!errors[type]) {
      setErrors({
        ...errors,
        [type]: null,
      });
    }
  };

  const handleChangeSelect = (e, type) => {
    setMessage(e.target.value);
    if (!!errors[type]) {
      setErrors({
        ...errors,
        [type]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setLoading(true);
      try {
        const { data } = await axios.post(`${host}/api/send_mail`, {
          name,
          phone,
          message,
        });
        Swal.fire({
          icon: 'success',
          title: 'Заявка отправлена.',
          text: data,
        });
      } catch ({ response }) {
        Swal.fire({
          icon: 'error',
          title: 'Неудача.',
          text: response,
        });
      }
      setName('');
      setPhone('');
      setMessage('');
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = { phone: '', text: '', textarea: '' };
    if (!phone || phone === '') newErrors.phone = 'Пожалуйста введите ваш email';
    else if (
      !phone.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)
    ) {
      newErrors.phone = 'Некорректный email';
    }
    if (!name || name === '') newErrors.text = 'Пожалуйста введите ваше имя';
    else if (!name.match(/[^-А-ЯA-Z\x27а-яa-z]/)) {
      newErrors.text = 'Некорректное имя';
    }
    if (!message || message === '') newErrors.textarea = 'Пожалуйста выберите семинар';

    return newErrors;
  };

  return (
    <>
      <h1>Остались вопросы?</h1>
      <div className="form">
        <div className="form_container">
          <Form onSubmit={handleSubmit}>
            {focus &&
              focus.map((item, idx) =>
                item.type !== 'textarea' ? (
                  <Form.Group
                    key={idx}
                    className="mb-3"
                    controlId={item.type === 'text' ? 'formBasicName' : 'formBasicEmail'}
                  >
                    <Form.Control
                      onChange={(e) => handleChangeInput(e, item.type)}
                      onFocus={handleFocusInput}
                      onBlur={handleBlurInput}
                      type={item.type === 'text' ? 'text' : 'phone'}
                      isInvalid={item.type === 'text' ? !!errors.text : !!errors.phone}
                      value={item.type === 'text' ? name : phone}
                      disabled={loading ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                      {item.type === 'text' ? errors.text : errors.phone}
                    </Form.Control.Feedback>
                    <div
                      className={
                        item.focus === true || item.value !== ''
                          ? 'placeholder_focus'
                          : 'placeholder_input'
                      }
                    >
                      {item.type === 'text' ? 'Ваше имя' : 'Ваш телефон'}
                    </div>
                  </Form.Group>
                ) : (
                  <Form.Group key={idx} className="mb-3" controlId="formBasicPassword">
                    <Form.Label
                      className={
                        item.focus === true || item.value !== ''
                          ? 'placeholder_focus'
                          : 'placeholder_input'
                      }
                    >
                      Задайте нам вопрос
                    </Form.Label>
                    <Form.Control
                      type="textarea"
                      onFocus={handleFocusInput}
                      onBlur={handleBlurInput}
                      onChange={(e) => handleChangeSelect(e, 'select')}
                      value={message}
                      disabled={loading ? true : false}
                      isInvalid={!!errors.select}
                      as="textarea"
                      rows={3}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.select}</Form.Control.Feedback>
                  </Form.Group>
                ),
              )}
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
          <div className="card phone container">
            <div className="dark"></div>
            <div className="icon">
              <BsFillTelephoneFill />
            </div>
            <div className="title">Номер телефона</div>
            <div className="text">+375 (33) 333-33-33</div>
          </div>
          <div className="card inst container">
            <div className="dark"></div>

            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="title">Инстаграм</div>
            <div className="text">@neon.hameleon</div>
          </div>
          <div className="card email container">
            <div className="dark"></div>

            <div className="icon">
              <MdEmail />
            </div>
            <div className="title">Эл. адрес</div>
            <div className="text">mail@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormApp;
