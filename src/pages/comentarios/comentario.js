import React from "react";
import"./style.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Supla from "../../assets/supla.jpg";
import Dracula from "../../assets/dracula2.jpg";
import Wandinha from "../../assets/wandinha.jpg";
import Bella from "../../assets/bella.jpg";
import Jacob from "../../assets/jacob.jpg";
import Coringa from "../../assets/coringa2.jpg";


function Comentarios() {
    return(
        <div>
            <Header />
            <Banner />
                <div className= 'cmt'>
                    <div className="cmt-card">
                        <div className="card-cmt">
                            <img id="ft" src={Supla} />
                            <span className="nm">Supla</span>
                            <p>
                                "Hello" Papito, filme muito punk rock!""
                            </p>
                    </div>
                        <div className="card-cmt">
                        <img id="ft" src={Dracula} />
                            <span className="nm">Drácucla</span>
                            <p>
                                "Excelente filme, mas esparava um pouco mais de sangue."
                            </p>

                        </div>
                        <div className="card-cmt">
                        <img id="ft" src={Wandinha} />
                            <span className="nm">Wandinha</span>
                            <p>
                                "Finalmente um filme que combina com a minha luz interior!"
                            </p>

                        </div>
                        <div className="card-cmt">
                        <img id="ft" src={Bella} />
                            <span className="nm">Bella</span>
                            <p>
                                "Onde quer que vá, sempre será meu morceguinho."
                            </p>

                        </div>
                        <div className="card-cmt">
                        <img id="ft" src={Jacob} />
                            <span className="nm">Jacob</span>
                            <p>
                                "O filme até que foi legal, mas faltou alguns caninos!"
                            </p>

                        </div>
                        <div className="card-cmt">
                        <img id="ft" src={Coringa} />
                            <span className="nm">Coringa</span>
                            <p>
                                "Muito bom. Bem que ele podia perder de vez em quando."
                            </p>

                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Comentarios;