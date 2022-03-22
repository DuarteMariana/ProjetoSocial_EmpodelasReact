import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            

        <section id="secao1">
            <main className="box-1">
                <div className="logoDestaque">
                    <img src="./img/imgDestaque.jpg" alt="imagem destaque da logo" />
                </div>
                <div className="banner_home">
                    <img src="./img/banner_empodelas_home.png" alt="banner"/>
                </div>

       
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <p className="lead">Feito para as mulheres de:</p>
                        <h1 className="ibura">Ibura - Três Carneiros, Recife.</h1>
                        <h3>Como funciona?</h3>
                        <p>
                        Esse projeto foi criado para você mulher empodederada!
                        Para você que busca oportunidades, e não se sente apoiada. 
                        Te apresentaremos o "Empodelas" para te fortalecer nesta caminhada!
                        </p>
                        <p>
                        O Empodelas foi criado pensando no grupo minoritário "mulheres" que traz na sua essencia o desejo de 
                        transformar realidades através de ferramentas da tecnologia. Inicialmente desenvolvido para apoiar 
                        as mulheres residêntes do bairro Três Carneiros, Ibura - Recife/PE, formando uma rede de empreendedorismo 
                        para a divulgar seus produtos e serviços, facilitando a movimentação do comércio e 
                        gerando novas oportunidades para outras mulheres que estão em situação de vulnerabilidade.
                        </p>
                    </div>
                </div>
       
               <div id="fraseMain" className="container-fluid">
                    <h1 className="sobrenos">Nada mais forte do que uma mulher que se empodera!<br/> Seja uma "EmpoDelas"</h1>
                    <h3 className="textoConvite"><strong>GOSTARIA DE PARTICIPAR DESSE PROJETO? FAÇA O PRÉ-CADASTRO!</strong></h3>
                    <button type="button" id="bt1" className="btn btn-danger"><Link to="/Afiliada_cadastro">Afiliada</Link></button>
                    <button type="button" id="bt1" className="btn btn-danger"><Link to="/Autonoma_cadastro">Autônoma</Link></button>
                </div>
            </main>
        </section>
        </>
    );
}