import React from 'react'
import Carousel from "react-grid-carousel";
import { Link } from 'react-router-dom';

const SliderItem = (props) => {
  return (
    <Carousel cols={6}>
        {props.sameMarche?.map((item, i) => (
            <Carousel.Item key={i}>
                <Link to={`/prodotto/${item.title}`}>
                <div className='cartMarche flex flex-col'>
                    <div className='imageMarche w-full h-full border border-gray-200'>
                        <img src={item.image_link} />
                    </div>
                    <div className="relative py-2">
                        <div className="flex items-center sm:mt-2 pb-2">
                            <div className="flex items-center">
                                <span className='text-primary font-normal text-sm sm:text-base mr-1'>€ {item.price}</span>
                            </div>
                        </div>
                        <span className='mt-2 block text-sm font-light uppercase'>{item.marche}</span>
                        <div className="mb-3 min-h-8">
                            <span className='block whitespace-normal text-base loading-4 font-medium'>{item.title}</span>
                        </div>
                    </div> 
                </div>
                </Link>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default SliderItem;
