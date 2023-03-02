import React, {useContext} from 'react'
import { ContextFilter } from './contextFilter/ContextFilter';

export default function StockFilter(props) {
    
    const {isShow5, data} = useContext(ContextFilter);

    function filterDuplicatesEta(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.eta === item.eta) === index);
    }

    return (
        <div>
        {isShow5 ?
        <div className='container overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Età</p>
            </div>
            <div className='grid grid-cols-5 gap-y-4 px-5 pb-2'>
            {filterDuplicatesEta(data).map((item, k) => {
                return(
                <div className='items-center'>
                    {item.eta !== "NULL" ? 
                    <div key={k} className='flex items-center'>
                        <input type='checkbox' className={`accent-secondary w-6 h-6`} />
                        <p className='flex ml-5'>{item.eta}</p>
                    </div>
                    :
                    ''
                    }
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
