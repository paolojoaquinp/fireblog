import React, { useEffect, useState } from 'react'
import Card from '@components/Card';
import { BfMain } from '../styles/layout';
import { FirestoreController } from 'services/firestoreService';
import { Post } from 'models/Post';
import { auth } from 'services/firebase';
const MyPosts = () => {
  const firestore = new FirestoreController();
  const [posts,setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    const obtenerPosts = async () => {
      try {
        const postsData = await firestore.consultarPostPerUser(auth.currentUser?.email ?? '');
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
      {posts.map((post) => (
          <Card post={post} key={post.autor} />
        ))}
      </>
    </BfMain>
    
  )
}

export default MyPosts;