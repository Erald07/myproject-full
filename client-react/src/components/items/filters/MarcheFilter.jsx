import React, {useContext} from 'react'
import { ContextFilter } from './contextFilter/ContextFilter';

export default function StockFilter(props) {
    
    const {isShow3, data} = useContext(ContextFilter);

    function filterDuplicatesMarche(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.marche === item.marche) === index);
    }

    return (
        <div>
        {isShow3 ?
        <div className='container overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Filtra per marca</p>
            </div>
            <div className='grid grid-cols-5 gap-y-4 px-5 pb-2'>
            {filterDuplicatesMarche(data).map((item, j) => {
                return(
                <div className='items-center'>
                    <div key={j} className='flex items-center'>
                        <input type='checkbox' className={`accent-secondary w-6 h-6`} />
                        <p className='flex ml-5'>{item.marche}</p>
                    </div>
                </div>
                );
            })}
            </div>
            <div className='px-5 py-3 mt-3 border-t border-solid border-gray-100'>
                <button className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full'>Applica</button>
            </div>
        </div>
        :
        ""
        }
        </div>
    );
}
