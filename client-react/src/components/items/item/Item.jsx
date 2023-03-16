import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faInfoCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import Carousel from 'react-grid-carousel';
import SliderItem from './SliderItem';
import LikeItems from './LikeItems';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronLeft} className='btn text-primary' /></button>,
    nextArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronRight} className='btn text-primary' /></button>
}

function Item() {

    const [item, setItem] = useState();
    const [likeItems, setLikeItems] = useState();
    const [sameMarche, setSameMarche] = useState();
    const [showMore, setShowMore] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const {getTitle} = useParams();

    useEffect(() => {
        const getItem = async () => {
            const result = await fetch(`http://localhost:8000/api/prodotto/${getTitle}`);
            const item = await result.json();
            if(item.status === 200){
                setItem(item?.item);
                setLikeItems(item?.like_items);
                setSameMarche(item?.same_marche);
            }
        }

        getItem();
    },[getTitle]);

    return (
        <>
        <div className='container'>
            <div key={item?.id} className="w-full flex flex-col mb-6 lg:flex-row">
                <div className="flex-1 flex flex-wrap lg:pt-5">
                    <div className="relative mb-3 w-full lg:mb-0 lg:mr-10">
                        <div className='-mx-2 lg:-mx-3 lg:-mt-3'>
                            <div className='pb-8 lg:pb-0'>
                                <div className='lg:w-full lg:flex-wrap flex'>
                                    {item?.image_name?.split(',').map((img, i) =>                                             
                                        <div key={i} className={i <= 3 ? 'lg:w-1/2 w-full px-2 sm:w-1/2 lg:p-3' : 'lg:w-1/5 w-full px-2 sm:w-1/2 lg:p-3'}>
                                            <img src={img} alt="Image" className="border border-gray-300 w-full h-full" />
                                        </div>
                                    )}
                                    {item?.image_name?.split(',').length % 2 === 1 && item?.image_name?.split(',').length <= 4 ? 
                                    <div className='lg:w-1/2 w-full px-2 sm:w-1/2 lg:p-3'>
                                        <img src={'https://storage.googleapis.com/prenatal-italy/2021/01/0773ff06-single-product-placeholder-300x400-1.jpg'} alt="Image" className="border border-gray-300 w-full h-full" />
                                    </div>
                                    :
                                    ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="place-self-start w-full lg:sticky lg:top-0 lg:pt-5 lg:max-w-sm">
                    <div>
                        <p className='font-normal text-2xl'>{item?.title}</p>
                        <div className="mt-8 mb-8 lg:mb-0">
                            <div className={item?.vip_price ? 'flex flex-col pb-4 border-b border-secondary' : 'flex flex-col'}>
                                <div className="flex gap-2 md:gap-4 mt-1">
                                    <p className='text-primary font-normal text-3xl md:text-4xl'>€ {item?.price}</p>
                                </div>
                            </div>
                            {item?.vip_price ? 
                            <div className="flex py-4 gap-2 md:gap-4">
                                <div className="bg-secondary text-center flex items-center text-white">
                                    <span className='px-4 font-bold text-base py-2'>-{Math.round(100-((item?.vip_price*100)/(item?.price)))}%</span>
                                </div>
                                <div className='text-secondary flex items-center'>
                                    <span className='font-medium text-3xl md:text-4xl mr-2'>€ {item?.vip_price}</span>
                                    <span className='uppercase text-xs'>con vip card <FontAwesomeIcon icon={faInfoCircle} /></span>
                                </div>
                            </div>
                            :
                            ""
                            }
                        </div>
                        <div className="flex flex-col space-y-6 w-full mt-8">
                            <div>
                                <div>
                                    {item?.taglia !== 'NULL' && item?.taglia !== 'NONE' ? <span className='uppercase'>taglie</span> : ''}
                                </div>
                                {item?.taglia !== 'NULL' && item?.taglia !== 'NONE' ?
                                    <div className='flex flex-wrap'>
                                        {item?.taglia.split(',').map( (tag, i) => 
                                            <div key={i} className="mr-1 sm:mr-2 md:mr-4 mt-4 flex-shrink-0">
                                                <div className="border border-gray-400 rounded-full">
                                                    <span className='px-3 py-2'>{tag}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                            <div className="add-card">
                                <button className='inline-flex uppercase justify-center text-center rounded-full px-5 py-2 border border-solid border-primary bg-primary items-center text-white text-base w-full hover:bg-white hover:text-primary ease-in duration-200'>
                                    <FontAwesomeIcon icon={faBagShopping} className='text-2xl' />
                                    <span className='ml-2'>aggiungi al carrello</span>
                                </button>
                            </div>
                            <div className="add-wishlist">
                                <button className='inline-flex uppercase justify-center text-center rounded-full px-5 py-2 hover:border hover:border-solid hover:border-primary border border-solid border-white items-center hover:text-primary text-base w-full ease-in duration-200'>
                                    <FontAwesomeIcon icon={faHeart} className='text-2xl text-primary' />
                                    <span className='ml-2'>AGGIUNGI ALLA LISTA</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justift-start mt-6 mb-6">
                            <p className='mt-2 text-sm'>
                                {showMore ? item?.description : `${item?.description.substring(0, 200)}`}
                            </p>
                            <div className='justift-start text-primary'>
                                {item?.description.substring(200) !== '' ? <button onClick={() => setShowMore(!showMore)}>[+]</button> : ''}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <button className={show1 ? 'border-4 border-primary/50 uppercase font-light text-gray-900 text-sm leading-4 w-full text-left': 'uppercase font-light text-gray-900 text-sm leading-4'} onClick={function(){setShow1(!show1); setShow2(false)}}>{show1 ? '-' : '+'} info prodotto</button>
                                {show1 ? 
                                    <div className='font-normal text-sm text-gray-700 py-2'>
                                        <p><span className='font-bold'>EAN</span>: 8029448086096</p>
                                        <p><span className='font-bold'>Codice prodotto</span>: 132021801</p>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                            <div className='mt-3.5'>
                                <button className={show2 ? 'border-4 border-primary/50 uppercase font-light text-gray-900 text-sm leading-4 w-full text-left' : 'uppercase font-light text-gray-900 text-sm leading-4'} onClick={function(){setShow2(!show2); setShow1(false)}}>{show2 ? '-' : '+'} consegna e reso</button>
                                {show2 ? 
                                    <div className='flex flex-col'>
                                        <div className="font-normal text-sm text-gray-700 py-2">
                                            <div>
                                                <p className='font-bold'>Consegna</p>
                                                <p>La consegna avviene mediamente entro 3 giorni lavorativi dalla conferma d’ordine.</p>
                                            </div>
                                            <div className='mt-2'>
                                                <p className='font-bold'>Rimborsi</p>
                                                <p>Il reso è sempre gratuito e il rimborso verrà emesso sullo stesso metodo di pagamento.</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-100">
            <div className="container mx-auto py-16">
                <div>
                    <span className='block text-center text-lg font-medium text-black md:text-left md:text-3xl'>Potrebbero piacerti anche</span>
                    <span className='block text-center text-sm font-normal leading-4 text-black md:text-left md:text-lg'>Ecco una selezione di prodotti che potrebbero esserti utili se stai acquistando questo prodotto</span>
                </div>
                <div className="mt-8 pb-12">
                    <div className="like-products py-4">
                        <LikeItems likeItems={likeItems} properties={properties} />
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto container py-16 md:py-24">
            <div>
                <span className='block text-lg md:text-3xl font-medium text-block text-center md:text-left'>Prodotti molto richiesti, ispirati da questo articolo</span>
                <span className='block text-sm md:text-lg leading-4 text-black font-normal text-center md:text-left'>Tutti il vogliono, non lasciarteli scappare!</span>
            </div>
            <div className="mt-8">
                <div className="pb-[60px] p-1">
                    <SliderItem sameMarche={sameMarche} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Item