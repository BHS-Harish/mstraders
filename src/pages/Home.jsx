import React,{useState} from "react";
import TopBar from '../components/TopBar'
import Header from "../components/Header";
import Payment from "../components/Payment";
import Footer from "../components/Footer";
import { Carousel, Row, Col ,Table,Modal} from 'antd'
// import { RightCircleFilled } from '@ant-design/icons'
import { crackerColumnTemplate, crackerData, allCategories} from '../assets/data'
import { useNavigate } from "react-router-dom";
import banner3 from '../assets/banner1.jpg';
import banner1 from '../assets/banner2.jpg'
import banner2 from '../assets/banner3.jpg'
import welcome from '../assets/light-img.png';
import pots from '../assets/pots.png'
import chakker from '../assets/chakkar.png'
import lakshmi from '../assets/lakshmi.png'
import wala from '../assets/wala.png'
// import diary from '../assets/diary.png'
// import calendar from '../assets/calendar.png'
import bottom from '../assets/bottom.gif'

import '../styles/home.css'
function Home() {
    const navigate=useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem,setCurrentItem]=useState({"column":[],"data":[]})
    return (
        <>
            <TopBar />
            <Header />
            <Carousel autoplay className="w-100">
                <img src={banner3} alt="ms-traders" className="home-carousal" />
                <img src={banner1} alt="ms-traders" className="home-carousal" />
                <img src={banner2} alt="ms-traders" className="home-carousal" />
            </Carousel>
            <Row className="my-5">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} className="welcome-left">
                    <h2 className="poppins fw-bold ms-3 welcome-title underline">Welcome to <span style={{ color: "red" }}>MS Traders</span></h2>
                    <p className="poppins px-3 lh-lg fs-6 my-5" style={{ fontWeight: "medium" }}>Are you ready to light up the night and add a spark of excitement to your celebrations? Look no further than <span className="txt-primary fw-bold">MS Traders</span>, your premier destination for all things fireworks! We bring the magic and wonder of fireworks right to your doorstep, ensuring that your special moments are truly unforgettable.</p>
                    <p className="poppins px-3 lh-lg fs-6 my-5" style={{ fontWeight: "medium" }}>Join the <span className="txt-primary fw-bold">MS Traders</span> family today and let us light up your world with the magic of fireworks. Create unforgettable memories and awe-inspiring moments with our premium fireworks. Your celebrations deserve the <span className="txt-primary fw-bold">MS Traders</span> touch!</p>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} className="d-flex justify-content-center align-items-center">
                    <img src={welcome} alt="best crackers in sivakasi" className="welcome-img" />
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#FF4158", padding: "50px 0px" }} className="testmonial-container">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 2 }} lg={{ span: 6 }} xl={{ span: 6 }} className="d-flex flex-column py-2 my-3 ps-5">
                    <h2 className="txt-white fw-bold poppins">2000<sup>+</sup></h2>
                    <p className="poppins fs-7 txt-white m-0">Total Happy Customers</p>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} className="d-flex flex-column py-2 ps-5 my-3">
                    <h2 className="txt-white fw-bold poppins">15000<sup>+</sup></h2>
                    <p className="poppins fs-7 txt-white m-0">Total Products Delivered</p>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} className="d-flex flex-column py-2 my-3 ps-5">
                    <h2 className="txt-white fw-bold poppins">150<sup>+</sup></h2>
                    <p className="poppins fs-7 txt-white m-0">Total Products</p>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5" span={22} offset={1}>
                    <h2 className="ms-3 poppins fw-bold txt-primary underline">Our Products</h2>
                    <p className="px-3 poppins my-4">Explore our product categories to discover the perfect fireworks for your special occasions</p>
                </Col>
                <Col span={24} className="d-flex justify-content-center align-items-center flex-wrap">
                    <img src={pots} alt="ms-traders" className="mx-5 my-3 homepage-product-image pointer" onClick={()=>{
                                        setCurrentItem({column:crackerColumnTemplate,data:crackerData[allCategories[3]]})
                                        setIsModalOpen(true)
                                }}/>
                    <img src={chakker} alt="ms-traders" className="mx-5 my-3 homepage-product-image pointer" onClick={()=>{
                                        setCurrentItem({column:crackerColumnTemplate,data:crackerData[allCategories[2]]})
                                        setIsModalOpen(true)
                                }}/>
                    <img src={lakshmi} alt="ms-traders" className="mx-5 my-3 homepage-product-image pointer" onClick={()=>{
                                        setCurrentItem({column:crackerColumnTemplate,data:crackerData[allCategories[0]]})
                                        setIsModalOpen(true)
                                }}/>
                    <img src={wala} alt="ms-traders" className="mx-5 my-3 homepage-product-image pointer" onClick={()=>{
                                        setCurrentItem({column:crackerColumnTemplate,data:crackerData[allCategories[7]]})
                                        setIsModalOpen(true)
                                }}/>
                </Col>
                <Col span={24} className="d-flex justify-content-center align-items-center">
                    <button className="mx-3 my-5 px-5 py-2 btn btn-primary fw-bold poppins pointer" onClick={()=>{navigate("/crackers")}}>SEE ALL OUR PRODUCTS</button>
                </Col>
            </Row>
            {/* <Row className="bg-primary mt-5 pb-5">
                <Col span={22} offset={1} className="mt-5 mb-3">
                    <h2 className="poppins fw-bold txt-white" >Other Products are</h2>
                </Col>
                <Col span={24} className="d-flex justify-content-center other-products">
                    <div className="bg-white other-products-container pointer">
                        <img src={calendar} alt="calendar" className="other-products-img" />
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h5 className="txt-primary fw-bold my-3 poppins">Calendar</h5>
                            <RightCircleFilled className="fs-3 me-4 txt-primary arrow-icon" />
                        </div>
                    </div>
                    <div className="bg-white other-products-container pointer">
                        <img src={diary} alt="calendar" className="other-products-img" />
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h5 className="txt-primary fw-bold my-3 poppins">Diary</h5>
                            <RightCircleFilled className="fs-3 me-4 txt-primary arrow-icon" />
                        </div>
                    </div>
                </Col>
            </Row> */}
            <Row className="my-5">
                <Col span={22} offset={1}>
                    <img src={bottom} alt="ms-traders-sivakasi" className="w-100" style={{ borderRadius: "5%" }} />
                </Col>
            </Row>
            <Modal title="Product Details" open={isModalOpen} onCancel={() => { setIsModalOpen(false) }} onOk={() => { setIsModalOpen(false) }}>
                <Table columns={currentItem?.column} dataSource={currentItem?.data} pagination={false}/>
            </Modal>
            <Payment/>
            <Footer/>
        </>
    )
}
export default Home;