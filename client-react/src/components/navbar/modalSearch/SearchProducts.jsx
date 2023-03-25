import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const SearchProducts = ({specialItems}) => {
    return (
        <div className='overflow-auto w-full mt-3 h-[550px]'>
            <div className='flex flex-wrap gap-3'>
                {specialItems?.map((item, i) => (
                <div className='w-1/4 h-1/4'>
                    <Link to={`/prodotto/${item.title}`}>
                        <div className='flex flex-col border border-solid border-gray-300 h-full hover:border-primary rounded-md'>
                            <div className='w-full'>
                                <img src={item.image_link} className='rounded-t-md'/>
                            </div>
                            <span className='mt-2 text-sm font-light uppercase text-center'>{item.marche}</span>
                            <div className="mb-3 min-h-8 p-2">
                                <span className='block text-sm'>{item.title}</span>
                            </div>
                            <div className="relative py-2 px-2">
                                <div className="flex items-center sm:mt-2 pb-2">
                                    {item.price && item.vip_price ?
                                    <div className='flex flex-col'>
                                        <div className="flex items-center">
                                            <span className='font-normal text-sm sm:text-base mr-1'>€ {item.price}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className='text-primary font-normal text-sm sm:text-base mr-1'>VIP Club {item.vip_price}€</span>
                                        </div>
                                    </div>
                                    :
                                    item.price && item.sale_price ?
                                    <div className='flex'>
                                        <div className="flex items-center">
                                            <span className='font-normal text-sm sm:text-base mr-1'>€ {item.price}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className='text-primary font-normal text-sm sm:text-base mr-1'>€ {item.sale_price}</span>
                                        </div>
                                    </div>
                                    :
                                    item.price ?
                                    <div className="flex items-center">
                                        <span className='font-normal text-sm sm:text-base mr-1'>€ {item.price}</span>
                                    </div>
                                    :
                                    ''
                                    }
                                </div>
                                <div className="float-right mx-2 py-2 px-3 bg-primary text-white rounded-md opacity-90 hover:opacity-100">
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </div>
                            </div> 
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchProducts