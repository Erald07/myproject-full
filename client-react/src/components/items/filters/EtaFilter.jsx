import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { ContextFilter } from './contextFilter/ContextFilter';

export default function EtaFilter(props) {
    
    const {isShow5, data, setIsShow5} = useContext(ContextFilter);
    const [etaInfo, setEtaInfo] = useState({
        eta: [],
    });

    function filterDuplicatesEta(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.eta === item.eta) === index);
    }

    const handleInputChange = (e) => {
        const { value, checked } = e.target;
        const { eta } = etaInfo;
          
        if (checked) {
            setEtaInfo({
                eta: [...eta, value],
            });
        }
      
        else {
            setEtaInfo({
                eta: eta.filter((e) => e !== value),
            });
        }
    };

    const queryParams = new URLSearchParams(window.location.search);
    var colore = '';
    var marche = '';
    var genere = '';
    var taglia = '';
    var availability = '';
    var min_price = '';
    var max_price = '';
    var query = `?eta=${etaInfo['eta'].toString()}`;
    if(queryParams.get("marche") !== null){
        marche = queryParams.get("marche");
        query += `&marche=${marche}`;
    }
    if(queryParams.get("genere") !== null){
        genere = queryParams.get("genere");
        query += `&genere=${genere}`;
    }
    if(queryParams.get("colore") !== null){
        colore = queryParams.get("colore");
        query += `&colore=${colore}`;
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
        {isShow5 ?
        <div className='container overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Età</p>
            </div>
            <div className='grid grid-cols-5 gap-y-4 px-5 pb-2'>
            {filterDuplicatesEta(data).map((item, i) => {
                return(
                <div key={i} className='items-center'>
                    {item.eta !== "NULL" ? 
                    <div className='flex items-center'>
                        {filterDuplicatesEta(item.eta.split(',')).map((val, j) => {
                            return(                                
                                <div key={j} className='inline-flex'>
                                    <input type='checkbox' value={val} className={`accent-secondary w-6 h-6`} onChange={handleInputChange} />
                                    <p className='flex ml-5'>{val}</p>
                                </div>
                            );
                        })}
                    </div>
                    :
                    ''
                    }
                </div>
                );
            })}
            </div>
            <div className='px-5 py-3 mt-3 border-t border-solid border-gray-100'>
                <Link to={query} onClick={() => setIsShow5(false)} className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full'>Applica</Link>
            </div>
        </div>
        :
        ""
        }
        </div>
    );
}
