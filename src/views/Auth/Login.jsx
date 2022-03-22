import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../firebase/credentials"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, setDoc} from "firebase/firestore"

const auth = getAuth(firebaseApp);

function Login(){
    const firestore = getFirestore(firebaseApp);
    const [isRegistrando, setIsRegistrando] = useState(false);
    const navigate = useNavigate();

    async function registrarUsuario(email, password, rol){
        const infoUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((usuarioFirebase) => {
            return(usuarioFirebase)
        })

        console.log(infoUsuario.user.uid)
        const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
        setDoc(docuRef, { email: email, rol: rol });
    }

    function submitHandler(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;

        console.log("submit", email, password, rol);

        if(isRegistrando){
            registrarUsuario(email, password, rol);
        }else{
            signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        }
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>{isRegistrando? "Registre-se": "Faça o seu login!"}</h1>
            <form className="form" onSubmit={submitHandler}>
                <label>E-mail
                    <input type="email" name="" id="email" />
                </label><br />
                <label>Senha
                    <input type="password" name="" id="password" />
                </label><br />
                <label>Perfil
                    <select name="rol" id="rol">
                        <option value="autonoma">Autônoma</option>
                        <option value="afiliada">Afiliada</option>
                    </select><br />
                </label><br />

                <input type="submit" value={isRegistrando? "Registrar" : "Iniciar sessão"} />
            </form>

            <button onClick={() => setIsRegistrando(!isRegistrando)}>
                {isRegistrando? "Já tenho uma conta" : "Quero me registrar"}
            </button>
        </div>
    )
}

export default Login;
