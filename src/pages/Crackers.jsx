import React, { useState } from "react";
import { Row, Col, Table, Modal } from 'antd'
import TopBar from '../components/TopBar';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categories, giftBox, crackerColumnTemplate, crackerData, giftColumnTemplate, allCategories} from '../assets/data'
function Crackers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem,setCurrentItem]=useState({"column":[],"data":[]})
    return (
        <>
            <TopBar />
            <Header />
            <Row>
                <Col span={24} className="my-4">
                    <p className="text-center poppins txt-primary fw-bold fs-6">Click the box to see product details</p>
                </Col>
                <Col span={24} className="my-3">
                    <h1 className="txt-primary text-center fw-bold">Our Crackers</h1>
                </Col>
                <Col span={24} className="d-flex align-items-center justify-content-center flex-wrap">
                    {
                        categories && categories.map((url, index) => {
                            return (
                                <img className="categories-crackers" src={url} alt="ms traders-best crackers in sivakasi" key={index} onClick={()=>{
                                        setCurrentItem({column:crackerColumnTemplate,data:crackerData[allCategories[index]]})
                                        setIsModalOpen(true)
                                }} />
                            )
                        })
                    }
                </Col>
                <Col span={24} className="my-5">
                    <h1 className="txt-primary text-center fw-bold mt-5">Gift Boxes</h1>
                </Col>
                <Col span={24} className="d-flex align-items-center justify-content-center flex-wrap">
                    {
                        giftBox && giftBox.map((url, index) => {
                            return (
                                <img className="giftbox-crackers" src={url} alt="ms traders-best crackers in sivakasi" key={index} onClick={()=>{
                                    setCurrentItem({column:giftColumnTemplate,data:crackerData[allCategories[20+index]]})
                                    setIsModalOpen(true)
                            }}/>
                            )
                        })
                    }
                </Col>
            </Row>
            <Modal title="Product Details" open={isModalOpen} onCancel={() => { setIsModalOpen(false) }} onOk={() => { setIsModalOpen(false) }}>
                <Table columns={currentItem?.column} dataSource={currentItem?.data} pagination={false}/>
            </Modal>
            <Footer />
        </>
    )
}
export default Crackers