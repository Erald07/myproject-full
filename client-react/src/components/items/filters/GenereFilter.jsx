import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { ContextFilter } from './contextFilter/ContextFilter';

export default function GenereFilter(props) {
    
    const {isShow4, data, setIsShow4} = useContext(ContextFilter);
    const [genereInfo, setGenereInfo] = useState({
        genere: [],
    });

    function filterDuplicatesGenere(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.genere === item.genere) === index);
    }

    const handleInputChange = (e) => {
        const { value, checked } = e.target;
        const { genere } = genereInfo;
          
        if (checked) {
            setGenereInfo({
                genere: [...genere, value],
            });
        }
      
        else {
            setGenereInfo({
                genere: genere.filter((e) => e !== value),
            });
        }
    };

    const queryParams = new URLSearchParams(window.location.search);
    var colore = '';
    var marche = '';
    var eta = '';
    var taglia = '';
    var availability = '';
    var min_price = '';
    var max_price = '';
    var query = `?genere=${genereInfo['genere'].toString()}`;
    if(queryParams.get("marche") !== null){
        marche = queryParams.get("marche");
        query += `&marche=${marche}`;
    }
    if(queryParams.get("eta") !== null){
        eta = queryParams.get("eta");
        query += `&eta=${eta}`;
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
        {isShow4 ?
        <div className='container overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Filtra per sesso</p>
            </div>
            <div className='grid grid-cols-5 gap-y-4 px-5 pb-2'>
            {filterDuplicatesGenere(data).map((item, i) => {
                return(
                <div key={i} className='items-center'>
                    {item.genere !== "NULL" ? 
                    <div className='flex items-center'>
                        {filterDuplicatesGenere(item.genere.split(',')).map((val, j) => {
                            return(                                
                                <div key={j} className='inline-flex'>
                                    <input type='checkbox' value={val} className={`accent-secondary w-6 h-6`} onChange={handleInputChange} />
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
                <Link to={query} onClick={() => setIsShow4(false)} className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full'>Applica</Link>
            </div>
        </div>
        :
        ""
        }
        </div>
    );
}
