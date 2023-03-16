import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ModalSearch = (props) => {

    return (
        <div>
        {props.showModal ? 
            <div className="bg-gray-100 fixed h-full inset-0 w-full z-40">
                <div className="mx-12 mt-8 flex items-center">
                    <div className="logo w-40">
                        <img src="https://storage.googleapis.com/prenatal-italy/2022/10/2229e59a-imageedit_1_7165117666.png" alt="logo" />
                    </div>
                    <div className="search border-b border-primary py-3 flex w-full mx-4">
                        <div className="glass ml-4">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className="w-full ml-6">
                            <input type="text" placeholder="Ricerca..." className="text-gray-500 bg-transparent text-left outline-none w-full" />
                        </div>
                        <div className="camera mr-2">
                            <FontAwesomeIcon icon={faCamera} />
                        </div>
                    </div>
                    <div className="close">
                        <button onClick={() => props.setShowModal(false)} className="items-center">
                            <FontAwesomeIcon icon={faTimes} className='close-modal' />
                        </button>
                    </div>
                </div>
                <div className="mx-12 pt-8 flex">
                    <div>
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
                    <div className="ml-14">
                        <div className="flex flex-col">
                            <h1 className="text-lg mb-2 font-bold">Prodotti consigliati</h1>
                        </div>
                    </div>
                </div>
            </div>
            :
            ''
            }  
            </div>
        )
}

export default ModalSearch;