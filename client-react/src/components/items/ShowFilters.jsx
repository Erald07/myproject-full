import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShowFilters = () => {
    const queryParams = new URLSearchParams(window.location.search);

    if(queryParams.get('colore') !== null){
        var colore = '';
        colore = <div className='flex flex-wrap mt-2 items-center text-sm space-x-1 text-gray-600'>
            <span>Colore: </span>
            {queryParams?.get('colore')?.split(',')?.map( (col) => {
                return(
                    <span className='ml-2 flex px-2 py-1 border border-gray-400 rounded-full font-bold items-center'>{col} <Link onClick={() => queryParams.delete(`colore`)} to={queryParams} className='ml-1 text-red-600'><FontAwesomeIcon icon={faXmarkCircle} /></Link></span>
                );
            })}
        </div>
    }

    if(queryParams.get('genere') !== null){
        var genere = '';
        genere = <div className='flex flex-wrap mt-2 items-center text-sm space-x-1 text-gray-600'>
            <span>Genere: </span>
            {queryParams?.get('genere')?.split(',')?.map( (gen) => {
                return(
                    <span className='ml-2 flex px-2 py-1 border border-gray-400 rounded-full font-bold items-center'>{gen} <Link onClick={() => queryParams.delete(`genere`)} to={queryParams} className='ml-1 text-red-600'><FontAwesomeIcon icon={faXmarkCircle} /></Link></span>
                );
            })}
        </div>
    }

    if(queryParams.get('marche') !== null){
        var marche = '';
        marche = <div className='flex flex-wrap mt-2 items-center text-sm space-x-1 text-gray-600'>
            <span>Marca: </span>
            {queryParams?.get('marche')?.split(',')?.map( (mar) => {
                return(
                    <span className='ml-2 flex px-2 py-1 border border-gray-400 rounded-full font-bold items-center'>{mar} <Link onClick={() => queryParams.delete(`marche`)} to={queryParams} className='ml-1 text-red-600'><FontAwesomeIcon icon={faXmarkCircle} /></Link></span>
                );
            })}
        </div>
    }

    if(queryParams.get('min_price') !== null){
        var price = '';
        price = <div className='flex flex-wrap mt-2 items-center text-sm space-x-1 text-gray-600'>
            <span className='ml-2 flex px-2 py-1 border border-gray-400 rounded-full font-bold items-center'>Prezzo:{` €${queryParams.get('min_price')}- €${queryParams.get('max_price')}`} <Link onClick={() => queryParams.delete(`marche`)} to={queryParams} className='ml-1 text-red-600'><FontAwesomeIcon icon={faXmarkCircle} /></Link></span>
        </div>
    }

    if(queryParams.get('taglia') !== null){
        var taglia = '';
        taglia = <div className='flex flex-wrap mt-2 items-center text-sm space-x-1 text-gray-600'>
            <span>Marca: </span>
            {queryParams?.get('taglia')?.split(',')?.map( (tag) => {
                return(
                    <span className='ml-2 flex px-2 py-1 border border-gray-400 rounded-full font-bold items-center'>{tag} <Link onClick={() => queryParams.delete(`marche`)} to={queryParams} className='ml-1 text-red-600'><FontAwesomeIcon icon={faXmarkCircle} /></Link></span>
                );
            })}
        </div>
    }

    return (
        <div className='container pt-4 flex flex-wrap'>
            <div>
                {colore}
            </div>
            <div>
                {genere}
            </div>
            <div>
                {marche}
            </div>
            <div>
                {price}
            </div>
            <div>
                {taglia}
            </div>
        </div>
    )
}

export default ShowFilters