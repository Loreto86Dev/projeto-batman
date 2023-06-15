import React from "react";
import './style.css';
import Logo from '../../assets/logo2.jpg';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            
                <span>Desenvolvido por 
                    <Link className="dev" to={"https://www.instagram.com/sergiolloreto/"}> Loreto.Dev</Link>
                </span>

            <nav className="footer-nav">
                <ul className="footer-list">
                    <Link style={{textDecoration:'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/contato'}>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/fotos'}>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={'/comentarios'}>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>            

        </div>
    )

}

export default Footer;