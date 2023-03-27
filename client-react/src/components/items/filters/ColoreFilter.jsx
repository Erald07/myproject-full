import React, {useContext, useState} from 'react'
import { ContextFilter } from './contextFilter/ContextFilter';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ColoreFilter(props) {
    
    const {isShow2, data, setIsShow2} = useContext(ContextFilter);
    const [coloreInfo, setColoreInfo] = useState({
        colore: [],
    });

    function filterDuplicatesColor(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.colore === item.colore) === index);
    }      

    const handleInputChange = (e) => {
        const { value, checked } = e.target;
        const { colore } = coloreInfo;
          
        if (checked) {
            setColoreInfo({
                colore: [...colore, value],
            });
        }
      
        else {
            setColoreInfo({
                colore: colore.filter((e) => e !== value),
            });
        }
    };
    const queryParams = new URLSearchParams(window.location.search);
    var marche = '';
    var genere = '';
    var eta = '';
    var taglia = '';
    var availability = '';
    var min_price = '';
    var max_price = '';
    var query = `?colore=${coloreInfo['colore'].toString()}`;
    if(queryParams.get("marche") !== null){
        marche = queryParams.get("marche");
        query += `&marche=${marche}`;
    }
    if(queryParams.get("genere") !== null){
        genere = queryParams.get("genere");
        query += `&genere=${genere}`;
    }
    if(queryParams.get("eta") !== null){
        eta = queryParams.get("eta");
        query += `&eta=${eta}`;
    }
    if(queryParams.get("exclude_out_of_stock") !== null){
        availability = queryParams.get("exclude_out_of_stock");
        query += `&exclude_out_of_stock=${availability}`;
    }
    if(queryParams.get("min_price") !== null){
        min_price = queryParams.get("min_price");
        query += `&min_price=${min_price}`;
    }
    if(queryParams.get("max_price") !== null){
        max_price = queryParams.get("max_price");
        query += `&max_price=${max_price}`;
    }
    if(queryParams.get("taglia") !== null){
        taglia = queryParams.get("taglia");
        query += `&taglia=${taglia}`;
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
                return(
                <div key={i} className='items-center'>
                {(item.colore !== 'NULL') ? 
                    <div key={i} className='flex items-center'>
                        {filterDuplicatesColor(item.colore.split(',')).map((val, j) => {
                            return(                                
                                <div key={j} className='inline-flex'>
                                    <input type='checkbox' value={val} className={`accent-${val} w-6 h-6`} onChange={handleInputChange} />
                                    <p className='flex ml-5'>{val}</p>
                                </div>
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
                <Link to={query} onClick={() => setIsShow2(false)} className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full'>Applica</Link>
            </div>
        </div>
        :
        ""
        }
        </div>
    );
}
