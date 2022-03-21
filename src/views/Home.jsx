import React from "react";

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
                        Criamos o site "EmpoDelas" com o intuito de gerar uma rede de apoio entre as mulheres do bairro de Três Carneiros, Ibura - Recife/PE (empreendedoras ou não), para que elas possam divulgar seus produtos e serviços, facilitando a movimentação do comércio e  gerando novas oportunidades para outras mulheres que estão sem fonte de renda no momento atual.
                        </p>
                    </div>
                </div>
       
               <div id="fraseMain" className="container-fluid">
                    <h1 className="sobrenos">Nada mais forte do que uma mulher que se empodera!<br/> Seja uma "EmpoDelas"</h1>
                    <h3 className="textoConvite"><strong>GOSTARIA DE PARTICIPAR DESSE PROJETO? FAÇA O PRÉ-CADASTRO!</strong></h3>
                    <button type="button" id="bt1" className="btn btn-danger">Autônoma</button>
                    <button type="button" id="bt1" className="btn btn-danger">Afiliada</button>
                </div>
            </main>
        </section>
        </>
    );
}