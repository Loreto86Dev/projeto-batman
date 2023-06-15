import React from 'react';
import './style.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';

function Fotos(){
    return (
      <>
        <div id='cnt'>

            <Header />
            <Banner />
            <h1>Galeria</h1>
            <div className='ft'>
                <div className='fts f-01'></div>
                <div className='fts f-02'></div>
                <div className='fts f-03'></div>
                <div className='fts f-04'></div>
                <div className='fts f-05'></div>
                <div className='fts f-06'></div>
                <div className='fts f-07'></div>
                <div className='fts f-08'></div>
                <div className='fts f-09'></div>
               


            </div>
            <Footer />
        </div>
        
    </>
    )
}

    


export default Fotos;