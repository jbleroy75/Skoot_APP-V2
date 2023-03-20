import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPOMRLuy8-VF2m8j9HL_y4Lhyu7y72UhE",
  authDomain: "skoot-c95db.firebaseapp.com",
  databaseURL:
    "https://skoot-c95db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skoot-c95db",
  storageBucket: "skoot-c95db.appspot.com",
  messagingSenderId: "39142473072",
  appId: "1:39142473072:web:0a69748069349f177163b5",
  measurementId: "G-KEQWGNSYSZ",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
