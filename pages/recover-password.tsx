import React, {useRef, useContext} from 'react'
import { useRouter } from 'next/navigation';
import { BfMain } from 'styles/layout';

import Input from '@components/Input';
import ButtonPrimary from '@components/ButtonPrimary';

import AppContext from '@context/AppContext';
import toast, { Toaster } from 'react-hot-toast';

import { getAuth,sendPasswordResetEmail } from 'firebase/auth';

const BfRecoverPassword = () => {
    const emailRef = useRef(null);
    const router = useRouter();
  
    const handleSubmit = async (e: any) =>  {
      e.preventDefault();
      const email = (emailRef.current as any).value;
      if(email) {
        const auth = getAuth();
        sendPasswordResetEmail(auth,email).then(result => {
            toast('Se ha enviado un correo para reestablecer la contraseña');
            setTimeout(() => {
                router.push('/');
            },4000);
        })
        .catch(error => {
            toast('error de recuperar');
        })
      } else {
        toast('Por favor ingrese su correo');
      }
      (emailRef.current as any).value = '';
    };
    return (
        <BfMain>
          <p className='Title'>Recuperar contraseña</p>
          <form onSubmit={handleSubmit}>
            <Input nameRef={emailRef}    typeInput={'email'} label={'Email'}/>
            <ButtonPrimary name={'Recuperar contraseña'}/>
            <Toaster
              toastOptions={{ 
                style: {
                  color:'#fff',
                  backgroundColor: '#000'
                }
              }}
            />
          </form>
        </BfMain>
    );
}

export default BfRecoverPassword;