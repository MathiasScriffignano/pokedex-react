import React from 'react'
import { Pokelist} from '../data/Pokelist'
import Pokeelem from './Pokeelem'


function Pokemon() {
  return (
    <div className='flex justify-between grid grid-cols-3 gap-4'>
        {Pokelist.map(({name, number, type, image, imagehover, id,imgname}) =>
        <ul className='listitem'>
        <Pokeelem
        id={id}
        imgname={imgname}
        name ={name}
        number={number}
        type={type}
        image={image}
        imagehover={imagehover}
        />
    </ul>)}
        
    </div>
  )
}

export default Pokemon