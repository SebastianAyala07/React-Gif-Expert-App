import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs( category );

    return (
        <>
        <h3>{ category }</h3>
        { loading && <h1 class="animate__animated animate__flash">Loading....</h1> }
        <div className="card-grid animate__jackInTheBox">
                {
                    data.map( (img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}
