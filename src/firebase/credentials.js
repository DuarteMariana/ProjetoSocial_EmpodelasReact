import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCMDU-zjytNqzCAghwLZYoIBQSIqR_6j8g",
  authDomain: "testeauthempodelas.firebaseapp.com",
  projectId: "testeauthempodelas",
  storageBucket: "testeauthempodelas.appspot.com",
  messagingSenderId: "943141660983",
  appId: "1:943141660983:web:a5e4e9b4a5bcc0362112b2"
}

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;