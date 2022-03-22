import React from "react";

export default function Contato() {
    return (
        <>
        <main>
            <div className="container" id="boxForm">
                <h1 className="faleConosco">Fale Conosco</h1>
                <div className="box form-group">
                    <form action="https://formsubmit.co/marianaduarte2014@outlook.com" method="POST" style={{textAlign:"center"}}>
                        <input type="text" style={{fontSize:"12pt"}} className="form-control" id="name" name="name" size="30" placeholder="Nome Completo"/>
                        <br/><br/>
                        <input type="email" style={{fontSize:"12pt"}} className="form-control" id="email" name="email" size="30" placeholder="E-mail"/>
                        <br/><br/>
                        <input type="text" style={{fontSize:"12pt"}} className="form-control" id="tel" name="tel" size="30" placeholder="Telefone"/>
                        <br/><br/>
                        <textarea id="msg" name="msg" className="form-control" placeholder="Descrição" style={{fontSize:"16pt"}} rows="8" cols="33"></textarea>
                        <br/><br/>
                        <input type="submit" className="btn btn-primary" style={{fontSize:"16pt"}} name="enviar" value="Enviar"/>
                    </form>
                <br/>
            </div>
        </div>
    </main>
        </>
    );
}