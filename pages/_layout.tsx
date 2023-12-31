import React, { useEffect, useState } from 'react'
import Card from '@components/Card';
import { BfMain } from '../styles/layout';
import { FirestoreController } from 'services/firestoreService';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { Post } from 'models/Post';

const Layout = () => {
  const firestore = new FirestoreController();
  const [posts,setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const obtenerPosts = async () => {
      try {
        const postsData = await firestore.consultarTodosPost();
        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };
  
    obtenerPosts();
  }, []);

  return (
    <BfMain>
      <p className='Title'>
        Ultimas Publicaciones
      </p>
      <>
      {posts.map((post,_) => (
          <Card post={post} key={_} />
        ))}
      </>
    </BfMain>
    
  )
}

export default Layout;