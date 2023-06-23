import React, { useContext } from 'react';
import { LinkCustom } from 'styles/layout';
import { BfHeader, Title } from './header-styles';
import AppContext from '@context/AppContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Header: React.FC = () => {
  const { initialData, contextValues } = useContext(AppContext);
  const state = initialData.state;


  const handleLogOut = async () => {
    try {
      const rta = await signOut(auth);
      console.log("SI LOGOOUT");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BfHeader>
      <Title>
        <LinkCustom href="/">
          FireBlog
        </LinkCustom>
      </Title>
      <ul>
{/*         <li>
          <LinkCustom href="/">Todos los posts</LinkCustom>
        </li> */}
        {contextValues.authUser &&
          <>
            <li>
              <LinkCustom href="/my-posts">Mis posts</LinkCustom>
            </li>
            <li>
              <LinkCustom href="/create-post">Realiza un Post</LinkCustom>
            </li>
          </>
        }
      </ul>
      <div className='header__actions'>
        <div className="login__actions">
          {contextValues.authUser ?
            <button onClick={handleLogOut}>
              CERRAR SESION
            </button>
            :
            <>
              <LinkCustom href='/login'>
                  INICIAR SESION
              </LinkCustom>
              <LinkCustom href='/create-user'>
                  Crear cuenta email
              </LinkCustom>
            </>
          }
        </div>
        <div className="header__profile-pic">
          <img src={state.user.foto} alt="user" />
        </div>
      </div>
    </BfHeader>
  )
}

export default Header;