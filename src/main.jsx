import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBekmTonfLHJ8fsVqj8RU8vu85ZmR0TQiU",
  authDomain: "tienda-objeto.firebaseapp.com",
  projectId: "tienda-objeto",
  storageBucket: "tienda-objeto.appspot.com",
  messagingSenderId: "877264877993",
  appId: "1:877264877993:web:951d814dc9f9a965252cb8"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(

   <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
