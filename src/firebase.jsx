// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLUGwhdrRum1n3WibFHdT2fftA6wZleEI",
  authDomain: "fir-login-155ea.firebaseapp.com",
  projectId: "fir-login-155ea",
  storageBucket: "fir-login-155ea.appspot.com",
  messagingSenderId: "909003660664",
  appId: "1:909003660664:web:d341cca3d47cc6822cbc8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}