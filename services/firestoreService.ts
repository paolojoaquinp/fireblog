import { DocumentData, Firestore, QueryDocumentSnapshot, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import { app, storage } from './firebase';
import { Post } from 'models/Post';
import { addDoc,
         orderBy as any,
         doc,
         onSnapshot,
         collection,
         serverTimestamp } from "firebase/firestore";
import { getDownloadURL, getStorage,ref, uploadBytesResumable } from 'firebase/storage';

export class FirestoreController {
    private db: Firestore;
    /* private storage: FirebaseStorage; */
    
    constructor() {
        this.db = getFirestore(app);
    }

    async crearPost(uid: string, email: string = '', titulo: string, descripcion: string,imageLink='', tags: string = '') {
        try {
            const docRef = await addDoc(collection(this.db, "posts"), {
              uid: uid,
              autor: email,
              titulo: titulo,
              descripcion: descripcion,
              imageLink: imageLink,
              tags: tags,
              /* categorias: categorias, */
              fecha: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    async consultarTodosPost() : Promise<Post[]> {
        try {
            const q = query(
                collection(this.db, 'posts'),
                orderBy("titulo", "asc"),
                orderBy('fecha', 'asc'),
                /* orderBy('titulo', 'asc') */
              );
          
              const querySnapshot = await getDocs(q);
              const postsData: Post[] = [];
          
              querySnapshot.forEach((post) => {
                const doc = new Post(post.data() as any);
                postsData.push(doc);
              });
          
              return postsData;
        } catch (error) {
            console.error('Error al consultar los posts:', error);
            throw error;
        }
    }
    async consultarPostPerUser(emailUser: string) : Promise<Post[]> {
        try {
            const q = query(
                collection(this.db, 'posts'),
                where('autor', '==', emailUser),
                /* orderBy('titulo', 'asc') */
              );
          
              const querySnapshot = await getDocs(q);
              const postsData: Post[] = [];
          
              querySnapshot.forEach((post) => {
                const doc = new Post(post.data() as any);
                postsData.push(doc);
              });
          
              return postsData;
        } catch (error) {
            console.error('Error al consultar los posts:', error);
            throw error;
        }
    }

    async subirImagenPost(file: any, uid:string, hanlderLoading: any) {
      try {
        const storage = getStorage();
        const refStorage = ref(storage, `imgsPosts/${uid}/${file.name}`);
        const task = uploadBytesResumable(refStorage, file);
    
        task.on('state_changed', 
          // Durante la subida
          (snapshot) => {
            const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Porcentaje: ${porcentaje}`);
            hanlderLoading(porcentaje);
          },
          // Si ocurre un error
          (err) => {
            console.error(`Error subiendo archivo => ${err.message}`);
          },
          // Una vez se haya completado
          () => {
              getDownloadURL(refStorage)
              .then(url => {
                console.log(url)
                sessionStorage.setItem('imgNewPost', url)
              })
              .catch(err => {
                console.log("Error al subir archivos,:",err);
              })
          }
        );
      } catch (error) {
        console.error('Error al subir la imagen:', error);
        throw error;
      }
    }

}