import React, {useRef, useContext} from 'react'
import { BfMain, ForgotPasswordContainer, LinkCustomLight } from 'styles/layout';
import Input from '@components/Input';
import ButtonPrimary from '@components/ButtonPrimary';
import { authEmailPass } from 'services/authService';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/navigation';

const BfLogin = () => {
    const { 
      initialData,
      emitToast
    } = useContext(AppContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const router = useRouter();
  
    const handleSubmit = async (e: any) =>  {
      e.preventDefault();
      const email = (emailRef.current as any).value;
      const password = (passwordRef.current as any).value;
  
      const rta = await authEmailPass(email,password,initialData.changePhoto);
      if(rta) {
        emitToast('Login con exito');
        router.push('/');
      } else {
        emitToast('Algo salio mal');
      }
      (emailRef.current as any).value = '';
      (passwordRef.current as any).value = '';
    };
    return (
        <BfMain>
          <p className='Title'>Login</p>
          <form onSubmit={handleSubmit}>
            <Input nameRef={emailRef}    typeInput={'email'} label={'Email'}/>
            <Input nameRef={passwordRef} typeInput={'password'} label={'Contraseña'}/>
            <ForgotPasswordContainer>
              <p>Olvidaste tu contraseña? <span>
                <LinkCustomLight href="/recover-password">
                  Recuperala Aqui
                </LinkCustomLight>  
              </span></p>
            </ForgotPasswordContainer>
            <div className='actions__container'>              
              <ButtonPrimary type={"submit"} name={'Login'}/>
            </div>
          </form>
        </BfMain>
    );
}

export default BfLogin;