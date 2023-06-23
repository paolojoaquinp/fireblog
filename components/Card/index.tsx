import Image from 'next/image'
import React from 'react'
import { BfCard } from './card-styles'
import { Post } from 'models/Post'
import { obtenerFecha } from 'utils/utils'
interface ArgsCard {
    post: Post
}

const Card: React.FC<ArgsCard> = ({post}) => {
  return (
    <BfCard>
        <section className='card__image'>
            {post.imageLink ?
                <img src={post.imageLink} alt='image'/>
                : <img src='https://firebase.google.com/static/images/brand-guidelines/logo-built_white.png' alt='image'/>
            }
        </section>
        <section className='card__info'>
            <div className='info__tags'>
                <div className='tag'>{post.tags ?? 'Sin tags'}</div>
            </div>
            <p className='info__title'>{post.titulo}</p>
            <p className='info__desc'>
                {post.descripcion}
            </p>
            <p><span>{'Fecha publicacion: '}</span>{obtenerFecha(post.fecha.toDate())}</p>
            <p><span>{'Autor: '}</span>{post.autor}</p>
        </section>
    </BfCard>
  )
}

export default Card