import React from "react";
import qr from '../assets/qr.jpg'
import { Row, Col, Divider, Card } from 'antd';
function Payment() {
    return (
        <>
            <Divider />
            <Row>
                <Col span={24}>
                    <h2 className="text-center poppins fw-bold txt-primary">Payment Information</h2>
                </Col>
            </Row>
            <Row className="my-4">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8,offset:4 }} lg={{ span: 8,offset:4 }} xl={{ span: 8,offset:4 }} className="d-flex flex-column align-items-center">
                    <img src={qr} alt="ms-traders" width={"280px"} />
                    <Card
                        title="GPay  PhonePe PayTM"
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                        className="my-5"
                    >
                        <p className="fw-bold">9159216529</p>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} className="d-flex flex-column align-items-center">
                    <Card
                        title="Account No. : 500101011573413"
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                        className="my-5"
                    >
                        <p className="fw-bold">IFSC Code : CIUB0000114</p>
                        <p className="fw-bold">Bank : City Union Bank</p>
                        <p className="fw-bold">Branch : Sivakasi</p>
                    </Card>
                    <Card
                        title="Account No. : 194100050307081"
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                        className="my-5"
                    >
                        <p className="fw-bold">IFSC Code : TMB10000194</p>
                        <p className="fw-bold">Bank : Tamilnad Mercantile Bank</p>
                        <p className="fw-bold">Branch : AJ College Sivakasi</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Payment;