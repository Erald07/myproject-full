import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import SpecialProducts from './SpecialProducts';
import SearchProducts from './SearchProducts';

const ModalSearch = (props) => {

    const [specialItems, setSpecialItems] = useState([]);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const search = (data) => {
        return data.filter( (item) => item.title.toLowerCase().includes(query))
    }

    // var urlElements = window.location.href.split('/');
    // var url = '';
    // for(let i = 0 ; i < urlElements.length ; i++){
    //     url += urlElements[i];
    // }

    useEffect(() => {
        const getItems = async () => {
            const result = await fetch(`http://localhost:8000/api/modal-search?query=${query}`);
            const cates = await result.json();
            if(cates.status === 200){
                setSpecialItems(cates.special_items);
                setItems(cates.search);
            }
        }

        getItems();
    }, []);

    return (
        <div>
            <div className="bg-gray-100 inset-0 w-full z-40 overflow-y-hidden h-screen fixed">
                <div className="mx-12 mt-8 flex items-center">
                    <div className="logo w-40">
                        <img src="https://storage.googleapis.com/prenatal-italy/2022/10/2229e59a-imageedit_1_7165117666.png" alt="logo" />
                    </div>
                    <div className="search border-b border-primary py-3 flex w-full mx-4">
                        <div className="glass ml-4">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className="w-full ml-6">
                            <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Ricerca..." className="text-gray-500 bg-transparent text-left outline-none w-full" />
                        </div>
                        <div className="camera mr-2">
                            <FontAwesomeIcon icon={faCamera} />
                        </div>
                    </div>
                    <div className="close">
                        <button onClick={() => navigate(-1)} className="items-center">
                            <FontAwesomeIcon icon={faTimes} className='close-modal' />
                        </button>
                    </div>
                </div>
                <div className="px-12 pt-8 flex w-full justify-between">
                    <div className='w-1/5'>
                        <div className="flex flex-col">
                            <h1 className="text-lg mb-2 font-bold">Ricerche popolari</h1>
                            <div className="flex flex-col">
                                <Link className="text-xs py-3">body</Link>
                                <Link className="text-xs py-3">trio</Link>
                                <Link className="text-xs py-3">fasciatoio</Link>
                                <Link className="text-xs py-3">pannolini</Link>
                                <Link className="text-xs py-3">carvenale</Link>
                                <Link className="text-xs py-3">scaldabiberon</Link>
                                <Link className="text-xs py-3">accappation</Link>
                                <Link className="text-xs py-3">seggiolino auto</Link>
                                <Link className="text-xs py-3">seggiolone</Link>
                                <Link className="text-xs py-3">box</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5">
                    {query === "" ?
                        <SpecialProducts specialItems={specialItems} />
                        :
                        <SearchProducts specialItems={search(specialItems)} />
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch;