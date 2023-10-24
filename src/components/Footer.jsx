import React from "react";
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import logo from '../assets/logo.jpg'
function Footer() {
    return (
        <>
            <Row className="py-5">
                <Col xs={{ span: 22, offset: 2 }} sm={{ span: 22, offset: 2 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }} xl={{ span: 6, offset: 2 }} className="my-3">
                    <img src={logo} alt="best crackers in sivakasi" style={{ width: "120px", height: "auto" }} />
                    <h2 className="poppins txt-primary fw-bold mt-3">MS TRADERS</h2>
                </Col>
                <Col xs={{ span: 22, offset: 2 }} sm={{ span: 22, offset: 2 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} className="my-3">
                    <h5 className="poppins fw-bold txt-primary">Quick Links</h5>
                    <div className="ms-3 d-flex flex-column">
                        <a href="/" className="text-black poppins text-decoration-none fs-6 my-1">Home</a>
                        <a href="/crackers" className="text-black poppins text-decoration-none fs-6 my-1">Crackers</a>
                        {/* <a href="/" className="text-black poppins text-decoration-none fs-6 my-1">Calendar</a> */}
                        {/* <a href="/" className="text-black poppins text-decoration-none fs-6 my-1">Diary</a> */}
                        <a href="/gallery" className="text-black poppins text-decoration-none fs-6 my-1">Gallery</a>
                        <img className="mt-5" style={{width:"180px"}} src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-transparent-order-now-banner-png-image_6356840.png" alt="mstraders"/>
                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 2 }} sm={{ span: 22, offset: 2 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} className="my-3">
                    <h5 className="poppins fw-bold txt-primary">Contact Us</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.759980066566!2d77.80923539999999!3d9.442435000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf3d69099a81%3A0x183466f24b119d28!2sMS%20CRACKERS!5e0!3m2!1sen!2sin!4v1698161788173!5m2!1sen!2sin" title="ms traders sivakasi" width="300" height="200" style={{border:"0"}} className="mt-2" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="d-flex align-items-start mt-4">
                        <PhoneOutlined className="fs-4 txt-primary" />
                        <a href="tel:+918778505981" className="text-decoration-none text-black"><p className="ms-2 poppins fs-6">+91 87785 05981</p></a>
                    </div>
                    <div className="d-flex align-items-start mt-4">
                        <MailOutlined className="fs-4 txt-primary" />
                        <a href="mailto:surestcc2505@gmail.com" className="text-decoration-none text-black"><p className="ms-2 poppins fs-6">surestcc2505@gmail.com</p></a>
                    </div>
                </Col>
            </Row>
            <Row className="bg-primary text-white">
                <Col span={24} className="text-center">
                    <p className="mt-3">Copyright &copy;{new Date().getFullYear()} MS Traders</p>
                    <p className="text-white">Developed by <a href="https://wa.me/+919025105989?text=Hello%20from%20MS%20Traders%20Website" target={"_blank"} rel={"noreferrer"} className="text-white fw-bold">Thareef Ahamed</a> and <a href="https://wa.me/+919626295434?text=Hello%20from%20MS%20Traders%20Website" className="text-white fw-bold" target={"_blank"} rel={"noreferrer"}>Balaharisankar</a></p>
                </Col>
            </Row>
            <a href="https://wa.me/+918778505981?text=Hello%20MS%20Traders%0aMay%20I%20Know%20more%20about%20your%20products"><img src="https://ik.imagekit.io/balaharisankar/whatsapp.png?updatedAt=1698141016798" alt="best cracker shop" className="whatsapp-icon" /></a>
        </>
    )
}
export default Footer