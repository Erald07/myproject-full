import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StockFilter from './StockFilter';
import MarcheFilter from './MarcheFilter';
import ColoreFilter from './ColoreFilter';
import GenereFilter from './GenereFilter';
import EtaFilter from './EtaFilter';
import TagliaFilter from './TagliaFilter';
import { ContextFilter } from './contextFilter/ContextFilter';
import { useNavigate } from 'react-router-dom';
import Context from "../../navbar/contextCategory/Context";
import ButtonFilter from './ButtonFilter';

function Filter(props) {
    const {data} = props;
    const navigate = useNavigate();
    
    const [isShow1, setIsShow1] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const [isShow3, setIsShow3] = useState(false);
    const [isShow4, setIsShow4] = useState(false);
    const [isShow5, setIsShow5] = useState(false);
    const [isShow6, setIsShow6] = useState(false);
    const [stock, setStock] = useState(false);
    const [marche, setMarche] = useState(false);
    const [colore, setColore] = useState(false);
    const [genere, setGenere] = useState(false);
    const [eta, setEta] = useState(false);
    const [taglia, setTaglia] = useState(false);

    const handleClick1 = event => {
        setIsShow1(current => !current);
        setIsShow2(false);
        setIsShow3(false);
        setIsShow4(false);
        setIsShow5(false);
        setIsShow6(false);
    }

    const handleClick2 = event => {
        setIsShow2(current => !current);
        setIsShow1(false);
        setIsShow3(false);
        setIsShow4(false);
        setIsShow5(false);
        setIsShow6(false);
    }

    const handleClick3 = event => {
        setIsShow3(current => !current);
        setIsShow1(false);
        setIsShow2(false);
        setIsShow4(false);
        setIsShow5(false);
        setIsShow6(false);
    }

    const handleClick4 = event => {
        setIsShow4(current => !current);
        setIsShow1(false);
        setIsShow2(false);
        setIsShow3(false);
        setIsShow5(false);
        setIsShow6(false);
    }

    const handleClick5 = event => {
        setIsShow5(current => !current);
        setIsShow1(false);
        setIsShow2(false);
        setIsShow3(false);
        setIsShow4(false);
        setIsShow6(false);
    }

    const handleClick6 = event => {
        setIsShow6(current => !current);
        setIsShow1(false);
        setIsShow2(false);
        setIsShow3(false);
        setIsShow4(false);
        setIsShow5(false);
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
                if(data[i].genere !== ''){
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

    useEffect(() => {
        function taglia(){
            for(let i = 0; i < data.length; i++){
                if(data[i].taglia !== 'NULL' && data[i].taglia !== 'NONE'){
                    setTaglia(true);
                }
            }
        }

        taglia();
    });

    function handleChange(e){
        navigate(`?orderBy=${e.target.value}`)
    }
    return (
        <>
        <ContextFilter.Provider value={{data, isShow1, isShow2, isShow3, isShow4, isShow5, isShow6,setIsShow1, setIsShow2, setIsShow3, setIsShow4, setIsShow5, setIsShow6}}>
        <div className='container flex justify-between px-2 items-center'>
            <div className='flex'>
                <div className='flex text-primary items-center'>
                    <FontAwesomeIcon icon={faSliders} />
                    <span className='uppercase font-medium text-sm ml-1 mr-6'>Filtri</span>
                </div>
                <div className="buttons flex space-x-3 px-3">
                    {taglia ? 
                    <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick6}>
                        Taglia
                        <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
                    </div>
                    :
                    ""
                    }
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
            <div className=''>
                <p className='font-normal text-xs md:text-sm'><span className='text-primary font-medium text-xs md:text-sm'>{data?.length} prodotti</span> ordinati per
                    <select onChange={handleChange} className='border border-solid border-gray-300 px-4 py-2 rounded-full text-gray-600 text-base sm:text-xs leading-tight focus:outline-none pr-6 ml-2'>
                        <option value={'popolarita'}>Popolarita</option>
                        <option value={'valutazione-media'}>Valutazione media</option>
                        <option value={'ordina-in-base-al-piu-recente'}>Ordina in base al piu recente</option>
                        <option value={'price'} selected>Prezzo: dal piu ecomomico</option>
                        <option value={'price-desc'}>Prezzo: dal piu caro</option>
                    </select>
                </p>
            </div>
        </div>
        
        <StockFilter />

        <ColoreFilter />
        
        <MarcheFilter />
                
        <GenereFilter />

        <EtaFilter />

        <Context>
            <TagliaFilter />
        </Context>
        
        </ContextFilter.Provider>
        </>
    )
}

export default Filter;