import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
            <div>
              <h1 className="text-white">MaltMania</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Асортимент магазину настільки різноманітний, що ви
              обов'язково виберете саме те, що вам потрібно.
              </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Найпопулярніші категорії</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Мобільні телефони</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Сучасний диван</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Крісла</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Smart годинники</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Корисні посилання</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Магазин</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Кошик</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Логін</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Політика конфіденційності</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Контакти</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex
                align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>м. Львів, вул.Сахарова 23</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex
                align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+0932550010</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex
                align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>kolesnykl59@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">Copyright {year} developed
              by Kolesnyk Liliia. All rights
              reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;