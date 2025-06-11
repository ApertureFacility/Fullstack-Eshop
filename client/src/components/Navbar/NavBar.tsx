import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './NavBar.css';

import { ReactComponent as ManIcon } from '../../static/man.svg';
import { ReactComponent as LikeIcon } from '../../static/like.svg';
import { ReactComponent as CartIcon } from '../../static/cart.svg';

function NavBar() {
  return (
    <Navbar expand="lg" bg="light" className="py-3">
      <Container fluid className="px-3">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">

            <Navbar.Toggle aria-controls="mobile-nav" className="d-lg-none me-2" />


            <Nav className="d-none d-lg-flex align-items-center gap-3">
              <Nav.Link href="#safe" className="nav-link-custom">Новое</Nav.Link>
              <Nav.Link href="#sale" className="nav-link-custom text-danger fw-medium">Sale</Nav.Link>

              <NavDropdown title="Каталог" className="nav-link-custom" menuVariant="light">
                <NavDropdown.Item href="#catalog/1">Отвёртки</NavDropdown.Item>
                <NavDropdown.Item href="#catalog/2">Гаечные ключи</NavDropdown.Item>
                <NavDropdown.Item href="#catalog/3">Дрели</NavDropdown.Item>
                <NavDropdown.Item href="#catalog/4">Перфораторы</NavDropdown.Item>
                <NavDropdown.Item href="#catalog/5">Шуруповерты</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Получение и оплата" className="nav-link-custom" menuVariant="light">
                <NavDropdown.Item href="#collections/1">Доставка курьером</NavDropdown.Item>
                <NavDropdown.Item href="#collections/2">Самовывоз</NavDropdown.Item>
                <NavDropdown.Item href="#collections/3">Оплатить заказ</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="О нас" className="nav-link-custom" menuVariant="light">
                <NavDropdown.Item href="#about/story">История бренда</NavDropdown.Item>
                <NavDropdown.Item href="#about/team">Команда</NavDropdown.Item>
                <NavDropdown.Item href="#about/media">В прессе</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Nav.Link href="/login" className="nav-link-custom"><ManIcon/></Nav.Link>
            <Nav.Link href="#favorites" className="nav-link-custom position-relative">
              <LikeIcon/>
              <span className="badge">0</span>
            </Nav.Link>
            <Nav.Link href="#cart" className="nav-link-custom position-relative">
              <CartIcon/>
              <span className="badge">0</span>
            </Nav.Link>

            <NavDropdown
              title="Покупателям"
              className="nav-link-custom d-none d-lg-block"
              align="end"
              menuVariant="light"
            >
              <NavDropdown.Item href="#loyalty">Программа лояльности</NavDropdown.Item>
              <NavDropdown.Item href="#payment">Оплата</NavDropdown.Item>
              <NavDropdown.Item href="#delivery">Доставка</NavDropdown.Item>
              <NavDropdown.Item href="#returns">Обмен и возврат</NavDropdown.Item>
              <NavDropdown.Item href="#contacts">Контакты</NavDropdown.Item>
              <NavDropdown.Item href="#documents">Документы</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>


        <div className="d-lg-none">
        <Navbar.Collapse id="mobile-nav" className="d-lg-none mt-3">
          <Nav className="flex-column">
            <Nav.Link href="#new">Новое</Nav.Link>
            <Nav.Link href="#sale" className="text-danger fw-medium">Sale</Nav.Link>

            <NavDropdown title="Каталог" menuVariant="light">
              <NavDropdown.Item href="#catalog/1">Платья</NavDropdown.Item>
              <NavDropdown.Item href="#catalog/2">Костюмы</NavDropdown.Item>
              <NavDropdown.Item href="#catalog/3">Рубашки</NavDropdown.Item>
              <NavDropdown.Item href="#catalog/4">Юбки</NavDropdown.Item>
              <NavDropdown.Item href="#catalog/5">Аксессуары</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Коллекции" menuVariant="light">
              <NavDropdown.Item href="#collections/1">Весна 2025</NavDropdown.Item>
              <NavDropdown.Item href="#collections/2">Лето 2025</NavDropdown.Item>
              <NavDropdown.Item href="#collections/3">Лимитированные</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="О нас" menuVariant="light">
              <NavDropdown.Item href="#about/story">История бренда</NavDropdown.Item>
              <NavDropdown.Item href="#about/team">Команда</NavDropdown.Item>
              <NavDropdown.Item href="#about/media">В прессе</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Покупателям" menuVariant="light">
              <NavDropdown.Item href="#loyalty">Программа лояльности</NavDropdown.Item>
              <NavDropdown.Item href="#payment">Оплата</NavDropdown.Item>
              <NavDropdown.Item href="#delivery">Доставка</NavDropdown.Item>
              <NavDropdown.Item href="#returns">Обмен и возврат</NavDropdown.Item>
              <NavDropdown.Item href="#contacts">Контакты</NavDropdown.Item>
              <NavDropdown.Item href="#documents">Документы</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
