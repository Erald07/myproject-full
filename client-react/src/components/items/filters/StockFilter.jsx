import React, {useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import RangeSlider from './multiRangeSlider/RangeSlider';
import { ContextFilter } from './contextFilter/ContextFilter';

export default function StockFilter(props) {
    
    const {isShow1} = useContext(ContextFilter);

    return (
        <div>
        {isShow1 ? 
            <div className='container shadow-md'>
                <div className='w-1/2 justify-between flex pb-4'>
                    <div className='px-5 pt-5 w-1/2'>
                        <div className="text-primary font-medium text-lg mb-2">Filtra per disponibilit√†</div>
                        <div>
                            <span className='text-black '>Disponibile online</span>
                            <label className="inline-flex items-center p-1 cursor-pointer dark:bg-white border border-solid border-gray-300 rounded-full ml-4">
                                <input id="Toggle4" type="checkbox" className="hidden peer" />
                                <span className="px-2 py-1 dark:bg-secondary peer-checked:dark:bg-white dark:text-white peer-checked:dark:text-gray-500 rounded-full font-medium text-xs uppercase">No</span>
                                <span className="px-3 py-1 ml-1 dark:bg-white peer-checked:dark:bg-secondary dark:text-gray-500 peer-checked:dark:text-white rounded-full font-medium text-xs uppercase">Si</span>
                            </label>
                        </div>
                    </div>
                    <div className='w-1/2 pt-5'>
                        <div className="text-primary font-medium text-lg mb-6">Filtra per prezzo</div>
                        <div>
                            <RangeSlider
                                min={0}
                                max={1000}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 border-t border-solid border-gray-100'>
                    <button className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full w-auto'>Applica</button>
                </div>
            </div>
            :
            ""
            }
        </div>
    );
}
