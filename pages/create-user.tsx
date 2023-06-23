import React, {useRef} from 'react'
import { BfMain } from 'styles/layout';
import Input from '@components/Input';
import ButtonPrimary from '@components/ButtonPrimary';
import { crearCuentaEmailPass } from 'services/authService';
const BfCreateUser = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleSubmit = async (e: any) =>  {
      e.preventDefault();
  
      const name = (nameRef.current as any).value;
      const email = (emailRef.current as any).value;
      const password = (passwordRef.current as any).value;
  
      await crearCuentaEmailPass(email,password,name);
      console.log("done");
      (nameRef.current as any).value = '';
      (emailRef.current as any).value = '';
      (passwordRef.current as any).value = '';
    };
    return (
        <BfMain>
          <p className='Title'>Crear Usuario</p>
          <form onSubmit={handleSubmit}>
            <Input nameRef={nameRef}     typeInput={'text'} label={'Nombre'}/>
            <Input nameRef={emailRef}    typeInput={'email'} label={'Email'}/>
            <Input nameRef={passwordRef} typeInput={'password'} label={'Contraseña'}/>
            <ButtonPrimary type={'submit'} name={'Crear'}/>
          </form>
        </BfMain>
    );
}

export default BfCreateUser