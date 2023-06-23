import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth, firebaseConfig } from './firebase'; // Suponiendo que tienes un archivo de configuración de Firebase en `firebase.ts`

export const authEmailPass = async (email: string, password: string, setPhoto: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth,email, password);
    if(userCredential.user.emailVerified) {
      setPhoto('/assets/mark-zuck.png');
      return true;
    } else {
      await signOut(auth);  
      return false;    
    }
    /* return userCredential.user; */
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearCuentaEmailPass = async (email: string, password: string, nombres: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user,{
        displayName: nombres
    }); 
    const configuracion = {
        /* url: firebaseConfig.authDomain */
        url: 'http://localhost:3000' // Asegúrate de obtener la URL de configuración adecuada desde `firebaseConfig`
    };
  
    await sendEmailVerification(userCredential.user,configuracion);
    await signOut(auth);

    console.log(`Bienvenido ${nombres}, debes realizar el proceso de verificación`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const authCuentaGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth,provider)
    .then(result => console.log(result.user.photoURL))
    .catch(error => console.error(error));
};


