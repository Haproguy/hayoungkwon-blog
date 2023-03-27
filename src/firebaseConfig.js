import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDID35ZQLgJDMmHQ8En2QPdgp5Awx-zLw0",
    authDomain: "next-blog-d9312.firebaseapp.com",
    databaseURL: "https://next-blog-d9312-default-rtdb.firebaseio.com",
    projectId: "next-blog-d9312",
    storageBucket: "next-blog-d9312.appspot.com",
    messagingSenderId: "403486971569",
    appId: "1:403486971569:web:418ca39995172422e2b490"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);