import React, {useContext} from 'react'
import { ContextFilter } from './contextFilter/ContextFilter';

export default function StockFilter(props) {
    
    const {isShow2, data} = useContext(ContextFilter);

    function filterDuplicatesColor(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.colore === item.colore) === index);
    }

    return (
        <div>
        {isShow2 ?
        <div className='container max-h-96 overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Filtra per colore</p>
            </div>
            <div className='grid grid-cols-4 gap-y-4 px-5 pb-2'>
            {filterDuplicatesColor(data).map((item, i) => {
                // console.log(item.colore.split(','));
                return(
                <div className='items-center'>
                {(item.colore !== 'NULL') ? 
                    <div key={i} className='flex items-center'>
                        {filterDuplicatesColor(item.colore.split(',')).map((val) => {
                            // console.log(val);
                            return(
                                <>
                                <input type='checkbox' className={`accent-${val} w-6 h-6`} />
                                <p className='flex ml-5'>{val}</p>
                                </>
                            );
                        })}
                    </div>
                    :
                    ""
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
