import React from "react";

export default function Somos() {
    return (
        <>
        <h1 className="sobrenos_somos"> Sobre Nós </h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Missão
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Transformar, através da tecnologia, cidadania e ética, a expectativa de mulheres residentes do bairro do Ibura localizado na cidade de Recife-PE, em situação de vulnerabilidade social quanto ao desemprego. Nossa missão é oferecer para elas através do nosso site e atividades, ferramentas necessárias para a propagação de mais oportunidades e conhecimento, incentivando-as, de forma que possam dar continuidade no desenvolvimento do trabalho, que serão munidos de coragem, disposição e determinação para assim, a proposta ampliar-se as demais localidades.
            </div>
        </div>
        </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Visão
                </button>
                </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    Em análise dos problemas e dificuldades encontrados na região, buscamos proporcionar soluções que reduzam a taxa de vulnerabilidade e aumente respectivamente a quantidade de mulheres ativas no mercado, seja por meio do empreendimento próprio, seja retornando ao mundo do trabalho, nossa visão é implementar ações capazes de capacita-las, empondera-las a ponto de transformar novas realidades.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Valores
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Utilizamos de valores sociais como a cidadania, ética, respeito e dignidade, enfatizando que o direito do trabalho, da moradia, das condições mínimas de sobrevivência é para todos, independente de região, gênero, ou quaisquer outros meios de desigualdade social.</div>
            </div>
        </div>
    </div>
    <div className="boxNos">
        <h1 className="sobrenos_somos"> Integrantes </h1>
        <div className="card-group">
            <div className="card">
                <img src="./img/diego.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Diego</h5>
                    <p className="card-text">Aluno Recode Pro <br/> Recife/PE <br/> 30 anos </p>
                </div>
            </div>
        <div className="card">
            <img src="./img/Jessica_recode.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Jéssica</h5>
                <p className="card-text">Aluna Recode Pro <br/> São Paulo/SP <br/> 30 anos  </p>
            </div>
        </div>
        <div className="card">
            <img src="./img/Mariana.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Mariana</h5>
                <p className="card-text">Aluna Recode Pro <br/> São Paulo/SP <br/> 25 anos</p>
            </div>
        </div>
        <div className="card">
            <img src="./img/Ryan.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ryan</h5>
                <p className="card-text">Aluno Recode Pro <br/> Rio de janeiro/RJ <br/> 19 anos </p>
            </div>
        </div>
        <div className="card">
            <img src="./img/Veronica.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Veronica</h5>
                <p className="card-text">Aluna Recode Pro <br/> Salvador/BA <br/> 28 anos  </p>
            </div>
        </div>
    </div>
</div>
        </>
    );
}