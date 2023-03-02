import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StockFilter from './StockFilter';
import MarcheFilter from './MarcheFilter';
import ColoreFilter from './ColoreFilter';
import GenereFilter from './GenereFilter';
import EtaFilter from './EtaFilter';
import { ContextFilter } from './contextFilter/ContextFilter';

function Filter(props) {

    const {data} = props;

    // console.log(data);
    
    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const [isShow3, setIsShow3] = useState(false);
    const [isShow4, setIsShow4] = useState(false);
    const [isShow5, setIsShow5] = useState(false);
    const [stock, setStock] = useState(false);
    const [marche, setMarche] = useState(false);
    const [colore, setColore] = useState(false);
    const [genere, setGenere] = useState(false);
    const [eta, setEta] = useState(false);

    const handleClick1 = event => {
        setIsShow1(current => !current);
    }

    const handleClick2 = event => {
        setIsShow2(current => !current);
    }

    const handleClick3 = event => {
        setIsShow3(current => !current);
    }

    const handleClick4 = event => {
        setIsShow4(current => !current);
    }

    const handleClick5 = event => {
        setIsShow5(current => !current);
    }

    useEffect(() => {
        function stock(){
            for(let i = 0; i < data.length; i++){
                if(data[i].availability === 'in stock'){
                    setStock(true);
                }
            }
        }

        stock();
    });

    useEffect(() => {
        function marche(){
            for(let i = 0; i < data.length; i++){
                if(data[i].marche !== ''){
                    setMarche(true);
                }
            }
        }

        marche();
    });

    useEffect(() => {
        function colore(){
            for(let i = 0; i < data.length; i++){
                if(data[i].colore !== ''){
                    setColore(true);
                }
            }
        }

        colore();
    });

    useEffect(() => {
        function genere(){
            for(let i = 0; i < data.length; i++){
                if(data[i].genre !== ''){
                    setGenere(true);
                }
            }
        }

        genere();
    });

    useEffect(() => {
        function eta(){
            for(let i = 0; i < data.length; i++){
                if(data[i].eta !== 'NULL'){
                    setEta(true);
                }
            }
        }

        eta();
    });

    return (
        <>
        <ContextFilter.Provider value={{isShow1, isShow2, isShow3, isShow4, isShow5, data}}>
        <div className='container flex'>
            <div className='flex text-primary items-center'>
                <FontAwesomeIcon icon={faSliders} />
                <span className='uppercase font-medium text-sm ml-1 mr-6'>Filtri</span>
            </div>
            <div className="buttons w-1/2 flex space-x-3 px-3">
                {stock ? 
                <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick1}>
                    Prezzo & disponibilità
                    <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                </div>
                :
                ""
                }
                {marche ? 
                <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick3}>
                    Marca
                    <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                </div>
                :
                ""
                }
                {colore ?
                <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick2}>
                    Colore
                    <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                </div>
                :
                ""
                }
                {genere ?
                <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick4}>
                    Genere
                    <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                </div>
                :
                ""
                }
                {eta ?
                <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick5}>
                    Età
                    <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                </div>
                :
                ""
                }
            </div>
        </div>
        <StockFilter />

        <ColoreFilter />
        
        <MarcheFilter />
                
        <GenereFilter />

        <EtaFilter />
        
        </ContextFilter.Provider>
        </>
    )
}

export default Filter;