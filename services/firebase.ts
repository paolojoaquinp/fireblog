import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Beta
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyChk0BfIppoxuiuxtRr8WxAsmvdHWfJa-g",
  authDomain: "fireblog-9c274.firebaseapp.com",
  projectId: "fireblog-9c274",
  storageBucket: "fireblog-9c274.appspot.com",
  messagingSenderId: "693123455609",
  appId: "1:693123455609:web:86f37aef8495578e1492a8",
  measurementId: "G-X13TW1TZPN"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

let perf;
// Initialize Firebase
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  perf = getPerformance(app);
}
export { analytics, perf };
