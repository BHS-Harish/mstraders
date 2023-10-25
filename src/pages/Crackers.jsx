import React, { useState } from "react";
import { Row, Col, Table, Modal } from 'antd'
import TopBar from '../components/TopBar';
import Header from '../components/Header'
import Payment from "../components/Payment";
import Footer from '../components/Footer'
import { categories, giftBox, crackerColumnTemplate, crackerData, giftColumnTemplate, allCategories} from '../assets/data'
function Crackers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const giftPrices=["400","650","1000"]
    const [giftPrice,setGiftPrice]=useState({flag:true,index:0});
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
                                        setGiftPrice({flag:false,index})
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
                                    setGiftPrice({flag:true,index})
                                    setIsModalOpen(true)
                            }}/>
                            )
                        })
                    }
                </Col>
            </Row>
            <Modal title="Product Details" open={isModalOpen} onCancel={() => { setIsModalOpen(false) }} onOk={() => { setIsModalOpen(false) }}>
                {
                    giftPrice.flag&&<><h5 className="my-3">Orginal Price : <span className="linethrough">&#8377; {giftPrices[giftPrice.index]}</span><span className="fw-bold text-danger ms-2 fs-6">  -{Math.floor((giftPrices[giftPrice.index]*60)/100)}</span></h5>
                    <h5 className="my-3">Special Price : &#8377; <span className="fw-bold text-primary">{giftPrices[giftPrice.index]-Math.floor((giftPrices[giftPrice.index]*60)/100)}</span></h5></>
                }
                <Table columns={currentItem?.column} dataSource={currentItem?.data} pagination={false}/>
            </Modal>
            <Payment/>
            <Footer />
        </>
    )
}
export default Crackers