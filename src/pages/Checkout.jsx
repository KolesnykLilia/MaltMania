import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { toast } from "react-toastify";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {

    const totalQty = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    

    return (
        <Helmet title="Checkout">
            <CommonSection title="Оформлення" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 fw-bold">Платіжна інформація</h6>
                            <Form className="billing__form">
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Введіть ім'я" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Введіть адресу електронної пошти" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="number" placeholder="Номер телефону" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Адреса вулиці" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Місто" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Поштовий індекс" />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Країна" />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg="4">
                            <div className="checkout__cart">
                                <h6>Загальна к-сть: <span>{totalQty} елементів</span></h6>
                                <h6>Підсумок: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>
                                       Доставка:<br />
                                        безкоштовна доставка
                                    </span>
                                    <span>$0</span></h6>
                                <h4>Загальна вартість: <span>${totalAmount}</span></h4>
                                <button className="buy__btn auth_btn w-100">Замовити</button>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;