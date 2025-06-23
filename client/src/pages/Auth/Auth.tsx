import React, { useState } from 'react';
import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../redux/userSlice';
import { registration, login } from '../../api/userApi'; 
import './Auth.css'; 

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
    <Container className="auth-container">

      
      <Card className="auth-card">
        <h2 className="auth-title">{title}</h2>
        <Form className="d-flex flex-column" onSubmit={(e) => { e.preventDefault(); click(); }}>
          <Form.Group className="auth-form-group">
            <Form.Label className="auth-label">Email</Form.Label>
            <Form.Control
              className="auth-input"
              type="email"
              placeholder="Введите ваш email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="auth-form-group">
            <Form.Label className="auth-label">Пароль</Form.Label>
            <Form.Control
              className="auth-input"
              type="password"
              placeholder="Введите ваш пароль..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
          <Row className="d-flex justify-content-between mt-1">
            {isLogin ? (
              <div className="auth-footer">
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className="auth-link">Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div className="auth-footer">
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} className="auth-link">Войдите!</NavLink>
              </div>
            )}
            
            <Button 
              type="submit"
              className="auth-button"
            >
              {buttonText}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;