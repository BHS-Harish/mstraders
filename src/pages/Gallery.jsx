import React from "react";
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Payment from "../components/Payment";
import Footer from '../components/Footer'
import {Row,Col} from 'antd';
import PhotoAlbum from "react-photo-album";
import {gallery} from '../assets/data'
function Gallery(){
    return(
        <>
            <TopBar/>
            <Header/>
            <Row>
                <Col span={24}>
                    <h1 className="txt-primary poppins fw-bold text-center mt-5">Gallery</h1>
                </Col>
                <Col span={22} offset={1} className="my-5">
                    <PhotoAlbum layout="rows" photos={gallery} />
                </Col>
            </Row>
            <Payment/>
            <Footer/>
        </>
    )
}
export default Gallery;