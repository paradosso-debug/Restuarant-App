import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlnVRW4VQ8So0tvAj8qHPghNxFhb1PCNQ",
    authDomain: "restaurant-app-75f27.firebaseapp.com",
    projectId: "restaurant-app-75f27",
    storageBucket: "restaurant-app-75f27.appspot.com",
    messagingSenderId: "736663037768",
    appId: "1:736663037768:web:b092e9083d6668f36eb57d"
};

const app = initializeApp(firebaseConfig)
// Exporta la funcionalidad de la base de datos
const db = getFirestore(app)
//exporta la funcionalidad de autenticacion con goolge
export const autenticacion = new GoogleAuthProvider(app)

// Exporta el paquete firebase para otros usos
export { db }
