import React from "react";
import './Footer.css'
import carita from '../../assets/cara.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from "@mui/material";


export const Footer = () => {
    return (
        <>
            <div class="diseno">
                <div class="custom-shape-divider-bottom-1705878615">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-bottom-1705877614">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
            <div class="footer">
                <div class="footer-content">
                    <div class="footer-links">
                        <div class="footer-link">
                            <span>OFERTAS Y PROMOCIONES</span>
                            <h2>No te pierdas nuestras ofertas!</h2>
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Tu dirección de correo electrónico" />
                                <span class="input-group-text">
                                    <TelegramIcon/>
                                </span>
                            </div>
                            <div class="footer-links">
                                <div class="footer-link">
                                    <div class="footer-logo">
                                        <img
                                            src="https://pypper.com.mx/images/logo/macropay.png"
                                            alt="" />
                                    </div>
                                </div>
                                <div class="footer-link enlaces">
                                    <ul class="principal">
                                        <li>
                                            <a href="#">Envíos y devoluciones</a>
                                        </li>
                                        <li>
                                            <a href="#">Preguntas frecuentes</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="#">Aviso de privacidad</a>
                                        </li>
                                        <li>
                                            <a href="#">Términos y condiciones</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>Todos los derechos reservados - &copy; Macropay 2022</p>
                        </div>
                        <div class="footer-link">
                            <div class="cara">
                                <img src={carita} alt="carita feliz" />
                            </div>
                        </div>
                        <div class="footer-link">
                            <div class="conversemos">
                                <h2>Conversemos!</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                <ul>
                                    <li>
                                        <FacebookIcon sx={{fontSize:'40px'}}/>
                                    </li>
                                    <li>
                                        <InstagramIcon sx={{fontSize:'40px'}}/>    
                                    </li>
                                    <li>
                                        <LinkedInIcon sx={{fontSize:'40px'}}/>
                                    </li>
                                    <li>
                                        <WhatsAppIcon sx={{fontSize:'40px'}}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
