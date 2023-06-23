import React, {useContext, useEffect, useRef, useState} from 'react'
import { BfMain } from 'styles/layout';
import Input from '@components/Input';
import { BfInputFile } from '@components/Input/input-styles';
import ButtonPrimary from '@components/ButtonPrimary';
import { FirestoreController } from 'services/firestoreService';
import { auth } from '../services/firebase';
import CustomTextArea from '@components/TextArea';
import AppContext from '@context/AppContext';
import { User } from 'firebase/auth';
const BfCreatePost = () => {
    const [loading,setLoading] = useState<number>(0);
    const [image,setImage] = useState<string>('');
    const { emitToast } = useContext(AppContext);
    const controller: FirestoreController = new FirestoreController();
    const tituloRef = useRef(null);
    const descripcionRef = useRef(null);
    const tagsRef = useRef(null);
  
    const handleFileChange = (event: any) => {
      const file = event.target.files[0];
      const user = auth.currentUser as User;
      controller.subirImagenPost(file, user.uid ,setLoading);
    };
  

    const handleSubmit = async (e: any) =>  {
      e.preventDefault();
      const user = auth.currentUser;
      if(!user) {
        emitToast ("Para crear el post debes estar autenticado");
        return;
      }      
      // Send Data
      try {
        // Get Data
        const titulo = (tituloRef.current as any).value;
        const descripcion = (descripcionRef.current as any).value;
        const tags = (tagsRef.current as any).value;
        const image = sessionStorage.getItem('imgNewPost') ?? '';
        await controller.crearPost(
          user.uid,
          user.email ?? '',
          titulo,
          descripcion,
          image,
          tags
        );
        emitToast('Hecho');
      } catch (error) {
        emitToast('error');
      }
      
      // Reset Data
      (tituloRef.current as any).value = '';
      (descripcionRef.current as any).value = '';
      (tagsRef.current as any).value = '';
      sessionStorage.setItem('imgNewPost', '');
    };
    useEffect(() => {
      sessionStorage.setItem('imgNewPost', '');
    },[]);

    useEffect(() => {

    },[loading]);
    return (<BfMain>
      <p className='Title'>Nuevo Post</p>
      <form onSubmit={handleSubmit}>
        <Input nameRef={tituloRef}      typeInput={'text'} label={'Titulo Post'}/>
        <CustomTextArea nameRef={descripcionRef} label={'Descripcion Post'}/>
        <Input nameRef={tagsRef}  required={false} typeInput={'text'} label={'Tags Post'}/>
        <BfInputFile>
          <input type="file"  onChange={handleFileChange} />
          {loading > 0 &&
              <>
                <label>{'Cargando'}{' '}{Math.floor(loading)}{'%'}</label>
                <div className='loader'></div>
              </>
          }
        </BfInputFile>
        <ButtonPrimary type={'submit'} name={'Crear Post'}/>
      </form>
    </BfMain>);
}

export default BfCreatePost