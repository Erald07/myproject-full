import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { ContextFilter } from './contextFilter/ContextFilter';

export default function MarcheFilter(props) {
    
    const {isShow3, data, setIsShow3} = useContext(ContextFilter);
    const [marcheInfo, setMarcheInfo] = useState({
        marche: [],
    });

    const handleInputChange = (e) => {
        const { value, checked } = e.target;
        const { marche } = marcheInfo;
          
        if (checked) {
            setMarcheInfo({
                marche: [...marche, value],
            });
        }
      
        else {
            setMarcheInfo({
                marche: marche.filter((e) => e !== value),
            });
        }
    };

    function filterDuplicatesMarche(arr){
        return arr.filter((item, index) => arr.findIndex(data => data.marche === item.marche) === index);
    }

    const queryParams = new URLSearchParams(window.location.search);
    var colore = '';
    var genere = '';
    var eta = '';
    var taglia = '';
    var availability = '';
    var min_price = '';
    var max_price = '';
    var query = `?marche=${marcheInfo['marche'].toString()}`;
    if(queryParams.get("genere") !== null){
        genere = queryParams.get("genere");
        query += `&genere=${genere}`;
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
        {isShow3 ?
        <div className='container overflow-y-auto shadow-md'>
            <div className='pt-5 px-5'>
                <p className='pb-6 font-medium text-primary text-lg'>Filtra per marca</p>
            </div>
            <div className='grid grid-cols-5 gap-y-4 px-5 pb-2'>
            {filterDuplicatesMarche(data).map((item, i) => {
                return(
                <div key={i} className='items-center'>
                    <div className='flex items-center'>
                    {filterDuplicatesMarche(item.marche.split(',')).map((val, j) => {
                        return(
                            <div key={j} className='inline-flex'>
                                <input type='checkbox' value={val} className={`accent-secondary w-6 h-6`} onChange={handleInputChange} />
                                <p className='flex ml-5'>{val}</p>
                            </div>
                        );
                    })}
                    </div>
                </div>
                );
            })}
            </div>
            <div className='px-5 py-3 mt-3 border-t border-solid border-gray-100'>
                <Link to={query} onClick={() => setIsShow3(false)} className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full'>Applica</Link>
            </div>
        </div>
        :
        ""
        }
        </div>
    );
}
