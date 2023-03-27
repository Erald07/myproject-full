import React, {useState, useContext} from 'react'
import RangeSlider from './multiRangeSlider/RangeSlider';
import { ContextFilter } from './contextFilter/ContextFilter';
import { Link } from 'react-router-dom';

export default function StockFilter(props) {

    const {isShow1, setIsShow1} = useContext(ContextFilter);
    const [prezzoInfo, setPrezzoInfo] = useState({
        min: '',
        max: '',
    });
    const [stockInfo, setStockInfo] = useState('off');

    const handleInputChange = (e) => {
        const { checked } = e.target;
          
        if (checked) {
            setStockInfo('on');
        }
      
        else {
            setStockInfo('off');
        }
    };

    const queryParams = new URLSearchParams(window.location.search);
    var colore = '';
    var genere = '';
    var eta = '';
    var marche = '';
    var taglia = '';
    var query = `?exclude_out_of_stock=${stockInfo}&min_price=${prezzoInfo['min']}&max_price=${prezzoInfo['max']}`;
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
    if(queryParams.get("marche") !== null){
        marche = queryParams.get("marche");
        query += `&marche=${marche}`;
    }
    if(queryParams.get("taglia") !== null){
        taglia = queryParams.get("taglia");
        query += `&taglia=${taglia}`;
    }

    return (
        <div>
        {isShow1 ? 
            <div className='container shadow-md'>
                <div className='w-1/2 justify-between flex pb-4'>
                    <div className='px-5 pt-5 w-1/2'>
                        <div className="text-primary font-medium text-lg mb-2">Filtra per disponibilità</div>
                        <div>
                            <span className='text-black '>Disponibile online</span>
                            <label className="inline-flex items-center p-1 cursor-pointer dark:bg-white border border-solid border-gray-300 rounded-full ml-4">
                                <input id="Toggle4" type="checkbox" className="hidden peer" onChange={handleInputChange} />
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
                                max={2000}
                                onChange={({ min, max }) => setPrezzoInfo({min: min, max: max})}
                            />
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 border-t border-solid border-gray-100'>
                    <Link to={query} onClick={() => setIsShow1(false)} className='uppercase bg-primary text-white py-1 px-8 text-center rounded-full w-auto'>Applica</Link>
                </div>
            </div>
            :
            ""
            }
        </div>
    );
}
