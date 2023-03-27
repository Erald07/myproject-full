import React from 'react'
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeItems = (props) => {
    return (
        <div className="mb-44 pt-10 flex flex-wrap">
            {props.likeItems?.map( (likeItem, i) => {
                return(
                    <div className='card w-1/2 lg:w-1/4 px-2 border-gray-200 hover:scale-105 hover:shadow-lg hover:ease-out duration-500 hover:bg-white'>
                        <div className="image w-full border-solid border-gray-200 border">
                            <div className="translate-y-6 -translate-x-1 flex absolute z-10">
                                {likeItem?.sale_price ?
                                    <div className="bg-primary text-white text-center w-16 absolute">
                                        <p className="z-10">-{Math.round(100-((likeItem?.sale_price*100)/(likeItem?.price)))}%</p>
                                    </div> 
                                    :
                                    ""
                                }
                            </div>
                            {likeItem?.galleries?.length !== 0 ? 
                                <Slide autoplay={false} duration={1000} transitionDuration={300} {...props.properties}>
                                    {likeItem?.galleries[0].image_name?.split(',').map((img) => <Link to={`/prodotto/${likeItem.title}`}><img src={img} alt="Image" className="relative block w-full" /></Link>)}
                                </Slide>
                                :
                                <Link to={`/prodotto/${likeItem.title}`}><img src={likeItem.image_link} alt="Image" className='w-full' /></Link>
                            }
                            <div className="wishlist hidden">
                                <FontAwesomeIcon icon={faHeart} className="bg-primary text-white hover:bg-white hover:text-primary border border-solid border-primary rounded-full p-3 text-xl ease-in duration-300 right-3 bottom-14 float-right relative" />
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className="flex items-center pb-2 sm:mt-2">
                                {likeItem?.sale_price ? <span className='line-through text-sm sm:text-base mr-1 mb-0.5 flex-shrink-0 whitespace-nowrap font-normal text-primary'>€ {likeItem.sale_price}</span> : ''}
                                <span className='text-base sm:text-xl flex-shrink-0 whitespace-nowrap font-medium text-primary'>€ {likeItem.price === null ? likeItem.parent.price : likeItem.price}</span>
                            </div>
                            <span className='mt-2 block text-sm font-light uppercase'>{likeItem.marche}</span>
                            <div className="mb-3 min-h-8">
                                <Link className='block whitespace-normal text-base leading-4 font-medium' >{likeItem.title}</Link>
                            </div>
                            <div className="addCart mb-3 hidden bg-white shadow-lg px-2 py-3">
                                <button className="bg-primary text-white uppercase font-medium text-md py-2 text-center w-full rounded-full border border-solid border-primary hover:bg-white hover:text-primary ease-in duration-150">AGGIUNGI AL CARRELLO</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default LikeItems