import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9ZYpNJ1wd4658TpY2whMybDYGwSM5XHI",
  authDomain: "live-chat-443fc.firebaseapp.com",
  databaseURL: "https://live-chat-443fc-default-rtdb.firebaseio.com",
  projectId: "live-chat-443fc",
  storageBucket: "live-chat-443fc.appspot.com",
  messagingSenderId: "197975544593",
  appId: "1:197975544593:web:2443f4946fe194374272b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
