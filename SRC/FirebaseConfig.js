// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const FirebaseConfig = {
  apiKey: "AIzaSyCvG4PD4gFqvnAs-DM6OMken4bLtVHwdO4",
  authDomain: "blogestudiantil-a4930.firebaseapp.com",
  projectId: "blogestudiantil-a4930",
  storageBucket: "blogestudiantil-a4930.appspot.com",
  messagingSenderId: "243992149072",
  appId: "1:243992149072:web:343626640fc1b340ff6555",
  measurementId: "G-J4ZFGHYFX8"
};

const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);

export { db };
export default FirebaseConfig;





