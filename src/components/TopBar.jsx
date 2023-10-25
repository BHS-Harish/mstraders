import React from "react";
import { Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import '../styles/topbar.css';
function Home() {
    return (
        <Row className="bg-primary topbar-container d-flex align-items-center justify-content-center text-center">
            <Col span={6}>
                <a href="mailto:surestcc2505@gmail.com"><MailOutlined  className="txt-white mx-1" style={{fontSize:"25px"}}/></a>
            </Col>
            <Col span={15}>
                <a href="tel:+918778505981" className="text-white m-0 poppins fw-bold text-decoration-none">For Enquery : +91 8778505981</a>
            </Col>
        </Row>
    )
}
export default Home;