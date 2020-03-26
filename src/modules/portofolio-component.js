import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css'; 

import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        image: require(`../../src/assets/images/ternakAyam.jpg`),
        title: 'Ternak Ayam',
        link : "https://www.youtube.com/watch?v=3pJlsAYD1nE",
        description: "Peternakan unggas adalah usaha membudidayakan unggas seperti ayam, kalkun, bebek, dan angsa dengan tujuan untuk mendapatkan daging dan telur, atau juga bulu dan kotoran. Lebih dari 50 miliar ayam dipelihara setiap tahunnya sebagai sumber daging dan telur."
    },
    {
        image: require(`../../src/assets/images/ternakSapi.jpg`),
        title: 'Ternak Sapi',
        link : "https://www.youtube.com/watch?v=8RPp5c2WIuE",
        description: "Sapi adalah hewan ternak anggota suku Bovidae dan anak suku Bovinae. Sapi yang telah dikebiri dan biasanya digunakan untuk membajak sawah dinamakan lembu. Sapi dipelihara terutama untuk dimanfaatkan susu dan dagingnya sebagai pangan manusia."
    },
    {
        image: require(`../../src/assets/images/panenSayur.jpg`),
        title: 'Kebun Sayur',
        link : "https://www.youtube.com/watch?v=UE0qoss0S50",
        description: "Sayur dan buah yang dijual di pasar swalayan biasanya mengandung pestisida, pupuk kimia dan aneka zat kimia lainnya. Ketika menanam sayur dan buah, pestisida sering digunakan untuk menyingkirkan hama tanaman yang mampu menyebabkan petani gagal panen."
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                This is My Portofolio
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Know me better!
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#639a67',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div  className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <a href={data.link} className="btn btn-primary"></a>
                                                        <a href={data.link} target="_blank">
                                                            <ButtonHome
                                                                text="More"
                                                                background="#639a67"
                                                                textColor="#fff"
                                                                className='button-participate'
                                                                onClick = {data.link}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;