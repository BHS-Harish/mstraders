import React from "react";
import { Row, Col } from 'antd'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg'
import '../styles/header.css';
function Header() {
    const navigate = useNavigate()
    return (
        <>
            <Row>
                <Col span={24} className="py-2 bg-warning text-dark fw-bold">
                    <marquee className="fs-6">Home Delivery available in Tamilnadu,Kerala and Pondy.</marquee>
                </Col>
            </Row>
            <Row className="header-container">
                <Col span={24} className="d-flex justify-content-center align-items-center">
                    <img src={logo} alt="ms-traders" className="header-logo" onClick={() => { navigate("/") }} />
                </Col>
            </Row>
        </>
    )
}
export default Header;