import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StockFilter from './StockFilter';
import MarcheFilter from './MarcheFilter';
import ColoreFilter from './ColoreFilter';
import GenereFilter from './GenereFilter';
import EtaFilter from './EtaFilter';
import { ContextFilter } from './contextFilter/ContextFilter';
import Item from '../item/Item';

function Filter(props) {

    const {data} = props;
    // const {isShow} = useContext(ContextFilter);
    
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
        <ContextFilter.Provider value={{data, isShow1, isShow2, isShow3, isShow4, isShow5}}>
        <div className='container flex justify-between px-2 items-center'>
            <div className='flex'>
                <div className='flex text-primary items-center'>
                    <FontAwesomeIcon icon={faSliders} />
                    <span className='uppercase font-medium text-sm ml-1 mr-6'>Filtri</span>
                </div>
                <div className="buttons flex space-x-3 px-3">
                    {stock ? 
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick1}>
                        Prezzo & disponibilità
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    // <ButtonFilter name={'Prezzo & disponibilità'} />
                    :
                    ""
                    }
                    {marche ? 
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick3}>
                        Marca
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    // <ButtonFilter name={'Marca'} />
                    :
                    ""
                    }
                    {colore ?
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick2}>
                        Colore
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    // <ButtonFilter name={'Colore'} />
                    :
                    ""
                    }
                    {genere ?
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick4}>
                        Genere
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    // <ButtonFilter name={'Genere'} />
                    :
                    ""
                    }
                    {eta ?
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick5}>
                        Età
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    // <ButtonFilter name={'Età'} />
                    :
                    ""
                    }
                </div>
            </div>
            <div className=''>
                <p className='font-normal text-xs md:text-sm'><span className='text-primary font-medium text-xs md:text-sm'>{data?.length} prodotti</span> ordinati per
                    <select className='border border-solid border-gray-300 px-4 py-2 rounded-full text-gray-600 text-base sm:text-xs leading-tight focus:outline-none pr-6 ml-2'>
                        <option value={'popolarita'}>Popolarita</option>
                        <option value={'valutazione-media'}>Valutazione media</option>
                        <option value={'ordina-in-base-al-piu-recente'}>Ordina in base al piu recente</option>
                        <option value={'prezzo-dal-piu-ecomomico'} selected>Prezzo: dal piu ecomomico</option>
                        <option value={'prezzo-dal-piu-caro'}>Prezzo: dal piu caro</option>
                    </select>
                </p>
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