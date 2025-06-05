import React, { useState } from 'react';
import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../redux/userSlice';
import { registration, login } from '../api/userApi'; 

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const title = isLogin ? 'Авторизация' : 'Регистрация';
  const buttonText = isLogin ? 'Войти' : 'Зарегистрироваться';

  const click = async () => {
    if (!email || !password) {
      alert('Заполните все поля');
      return;
    }
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await registration(email, password);
      }
      dispatch(loginAction());
      navigate(HOME_ROUTE);
    } catch (e: any) {
      alert(e.response?.data?.message || 'Ошибка авторизации');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{title}</h2>
        <Form className="d-flex flex-column" onSubmit={(e) => { e.preventDefault(); click(); }}>
          <Form.Control
            className="mt-3"
            type="email"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div className="p-3">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button variant="outline-success" type="submit">
              {buttonText}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
