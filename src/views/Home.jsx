import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div className="sub-topo">
            <div className="banner_home">
                        <img src="./img/banner_empodelas_home.png" alt="banner"/>
            </div>
        </div>
        <section className="secaoVideo">
            <iframe className="videoYoutube" width="560" height="315" src="https://www.youtube.com/embed/m0MeryPVWRY" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <div className="textoVideo">
                <p>
                    Uma solução para mulheres
                    autônomas e mulheres que não nenhum tipo de renda!
                </p>
                <h6><br />← VEJA O VÍDEO AO LADO E ENTENDA O PROJETO!</h6>
            </div>
        </section>

        <section id="secao1">
            <main className="box-1">
                <div className="logoDestaque">
                <h1 className="titulo1">Feito para as mulheres de:</h1>
                <p className="ibura">Ibura - Três Carneiros, Recife.</p>
                    <img className="img_empodelas_logo_home" src="./img/imgDestaque.jpg" alt="imagem destaque da logo" />
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        
                        <h3 className="home_h3_como_func">Como funciona?</h3>
                        <p style={{textAlign:"justify"}} className="home_texto_p_como_funciona">
                        Esse projeto foi criado para você mulher empodederada!
                        Para você que busca oportunidades, e não se sente apoiada. 
                        Te apresentaremos o "Empodelas" para te fortalecer nesta caminhada!
                        O Empodelas foi criado pensando no grupo minoritário "mulheres" que traz na sua essencia o desejo de 
                        transformar realidades através de ferramentas da tecnologia. Inicialmente desenvolvido para apoiar 
                        as mulheres residêntes do bairro Três Carneiros, Ibura - Recife/PE, formando uma rede de empreendedorismo 
                        para a divulgar seus produtos e serviços, facilitando a movimentação do comércio e 
                        gerando novas oportunidades para outras mulheres que estão em situação de vulnerabilidade.
                        </p>
                    </div>
                </div>
                <div className="conteiner">
                    <h1 id="informacoes">Saiba Como Participar...</h1>
                    <h2 id="titulosPF">Sou empreendedora e como faço para participar do EmpoDelas?</h2>
                    <p id="Pperguntas">
                        Se você é residente do bairro Três carneiros, tem um pequeno médio ou grande
                        empreendimento, e gostaria de ter seu negócio divulgado, poderá acessar nosso pré cadrasto 
                        preencha as informações a aguarde a confirmação de cadastramento.
                    </p>
                    <h2 id="titulosPF">Não sou empreendedora, mas gostaria de participar do EmpoDelas, o que faço?</h2>
                    <p id="Pperguntas">
                        Se você é residente do bairro Três carneiros, e gostaria de divulgar os produtos ou serviços 
                        de negócios de empreendedoras da localidade, acesse o pré cadrasto de afiliadas, inscreva-se e aguarde a confirmação e maiores informações.
                       
                    </p>
                    <h2 id="titulosPF">Parceiros e Patrocinadores</h2>
                    <p id="Pperguntas">
                        Gostou da iniciativa e gostaria de ajudar mais no projeto? 
                        entre em contato com um
                        dos organizadores para conhecer e obter mais informações.
                       
                    </p>
                </div>
       
                <div class="jumbotron-pre">
                    <h1 class="display-6">GOSTARIA DE PARTICIPAR DESSE PROJETO? </h1>
                    <p class="lead"></p>
                    <h3 className="textoConvite"><strong> FAÇA O PRÉ-CADASTRO!</strong></h3>
                    
                </div>
                <div>
                    <button type="button" id="bt1" className="btn btn-danger"><Link to="/Afiliada_cadastro">Afiliada</Link></button>
                    <button type="button" id="bt1" className="btn btn-danger"><Link to="/Autonoma_cadastro">Autônoma</Link></button>                    
                </div>
            </main>
        </section>
        </>
    );
}