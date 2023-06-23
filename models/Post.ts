import { Timestamp } from "firebase/firestore";
import { obtenerFecha } from "utils/utils";
export enum Category {
    DEPORTES = 'deportes',
    NOTICIAS = 'noticias'
}

export interface Comment {
    id: number;
    autor: string;
    comentario: string;
    idPost: number;
}

export class Post {
  autor: string;
  titulo: string;
  descripcion: string;
  videoLink: string;
  imageLink: string;
  tags?: string;
  fecha: Timestamp;

  constructor(postData: {
    autor: string;
    titulo: string;
    descripcion: string;
    videoLink: string;
    imageLink: string;
    tags?: string;
    fecha: Timestamp;
  }) {
    this.autor = postData.autor;
    this.titulo = postData.titulo;
    this.descripcion = postData.descripcion;
    this.videoLink = postData.videoLink;
    this.imageLink = postData.imageLink;
    this.fecha = postData.fecha;
    this.tags = postData.tags;
  }
}






