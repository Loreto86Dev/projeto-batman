import React from 'react';
import './style.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contato(){
    return (
        <>
            <Header />
                    <span className='ttl'>Fale Com a Gente!</span>
            <div className='contact'>
                <form action='./contato' className='formulario'>
                        <div className='data'>
                            <label className='lbl' for='nome'>Nome completo</label>
                            <input className='ipt' type='text' id='nome' name='nome'/>
                            <label className='lbl' for="email" type="Email">Email</label>
                            <input className='ipt' type="email" id="email" name="email" placeholder="insira um email válido" />
                            <textarea className='area' id="mensagem" rows='6' placeholder="Escreva Aqui"></textarea>
                        </div>
                        <button className='btt'>Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contato;