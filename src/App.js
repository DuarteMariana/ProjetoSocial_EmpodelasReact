import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"
import firebaseApp from "./firebase/credentials"
import {getAuth, onAuthStateChanged} from "firebase/auth";

import Home from "./views/Home";
import Somos from "./views/Somos";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Admin from "./views/Admin";
import ProdutoServico from "./views/ProdutoServico";
import ProdutoServicoUsers from "./views/ProdutoServico/indexUsers";
import ProdutoServicoCreate from "./views/ProdutoServico/Create";
import Autonoma from "./views/Autonoma";
import AutonomaCreate from "./views/Autonoma/Create";
import Afiliada from "./views/Afiliada";
import AfiliadaCreate from "./views/Afiliada/Create";
import Afiliacao from "./views/Afiliacao/";
import AfiliacaoCreate from "./views/Afiliacao/Create";
import ViewProdutoServico from "./views/ProdutoServico/ViewProdutoServico";
import ConcluidoAfiliacao from "./views/Afiliacao/ConcluidoAfiliacao";
import CreateUserAfiliacao from "./views/Afiliacao/CreateUser";

import CreateUsersAfiliada from "./views/Afiliada/CreateUsers";
import CreateUsersAutonoma from "./views/Autonoma/CreateUsers";
import Concluido from "./views/Concluido";

import LoginAdmin from "./views/Auth/LoginAdmin";
import Login from "./views/Auth/Login";

import "./assets/css/contato.css";
import "./assets/css/global.css";
import "./assets/css/index.css";
import "./assets/css/login.css";
import "./assets/css/produto.css";
import "./assets/css/site.css";
import "./assets/css/somos.css";
import "./assets/secaoProduto.css";
import "./assets/css/video.css";
import "./assets/css/pageLogin.css";



const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function App() {

  const [user, setUser] = useState(null);

  async function getRol(uid){
    const docuRef = doc(firestore, `usuarios/${uid}`)
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData final", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <BrowserRouter>
      <Menu user={user}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Somos" element={<Somos/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/ProdutoServico-users" element={<ProdutoServicoUsers/>} />
        <Route path="/ProdutoServico-Create" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico-Update/:id" element={<ProdutoServicoCreate/>} />
        <Route path="/ProdutoServico" element={<ProdutoServico/>} />
        <Route path="/ProdutoServico_view/:id" element={<ViewProdutoServico />} />
        <Route path="/Autonoma" element={<Autonoma/>} />
        <Route path="/Autonoma-Create" element={<AutonomaCreate/>} />
        <Route path="/Autonoma-Update/:id" element={<AutonomaCreate/>} />
        <Route path="/Afiliada" element={<Afiliada/>} />
        <Route path="/Afiliada-Create" element={<AfiliadaCreate/>} />
        <Route path="/Afiliada-Update/:id" element={<AfiliadaCreate/>} />
        <Route path="/Afiliacao" element={<Afiliacao/>} />
        <Route path="/Afiliacao-Create" element={<AfiliacaoCreate/>} />
        <Route path="/Afiliacao-Update/:id" element={<AfiliacaoCreate/>} />
        <Route path="/Afiliada_cadastro" element={<CreateUsersAfiliada></CreateUsersAfiliada>}/>
        <Route path="/Autonoma_cadastro" element={<CreateUsersAutonoma></CreateUsersAutonoma>}/>
        <Route path="/cadastro_concluido" element={<Concluido></Concluido>}/>

        <Route path="/Login" element={<Login></Login>}/>
        <Route path="/Login/new_user" element={<LoginAdmin></LoginAdmin>}/>
        <Route path="/Afiliacao/Create/User" element={<CreateUserAfiliacao></CreateUserAfiliacao>}/>
        <Route path="/Afiliacao/Concluida" element={<ConcluidoAfiliacao></ConcluidoAfiliacao>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
