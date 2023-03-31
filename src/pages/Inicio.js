import React from "react";
import '../styles/Inicio.css';
import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Cabecalho from '../components/Cabecalho';



function Inicio() {
    return (
        <>
            <Navbar />
            <Cabecalho titulo="Bem vindo ao QuickAnswer"/>
   
            <div className="carouselInicio">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="img1"
                            src={require('../2.png')}
                            alt="Primeiro slide"
                        />
                        <Carousel.Caption>
                            <h3 className="h3Inicio">Não se preocupe com atendimentos.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="img2"
                            src={require('../1.png')}
                            alt="Segundo slide"
                        />
                        <Carousel.Caption>
                            <h3 className="h3Inicio">Seu negócio mais prático.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img3"
                            src={require('../3.png')}
                            alt="Terceiro slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Inicio