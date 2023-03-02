import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Header = (props) => {

    const {data} = props;
    const {getcate} = useParams();
    const {getsubcate} = useParams();
    const {getsubsubcate} = useParams();
    const {getsubsubsubcate} = useParams();
    const navigate = useNavigate();

    return (
        <div className='mb-8 lg:mb-20'>
            <div className="links container px-4 py-6">
                {getcate ? <span to={'/'} className='text-bold font-bold text-xs cursor-pointer' onClick={() => navigate('/')}> Home </span> : ""}
                {getcate ? <><span className='text-xs'>/</span><span className='last:text-primary last:font-bold last:text-sm uppercase font-normal text-black text-xs cursor-pointer' onClick={() => navigate(`/categoria-prodotto/${getcate}`)}>  {getcate} </span></> : ""}
                {getsubcate ? <><span className='text-xs'>/</span><span className='last:text-primary last:font-bold last:text:sm font-normal text-black text-xs cursor-pointer' onClick={() => navigate(`/categoria-prodotto/${getcate}/${getsubcate}`)}> {getsubcate} </span></> : ""}
                {getsubsubcate ? <><span className='text-xs'>/</span><span className='last:text-primary last:font-bold last:text:sm font-normal text-black text-xs cursor-pointer' onClick={() => navigate(`/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}`)}> {getsubsubcate} </span></> : ""}
                {getsubsubsubcate ? <><span className='text-xs'>/</span><span className='last:text-primary last:font-bold last:text:sm font-normal text-black text-xs cursor-pointer' onClick={() => navigate(`/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}/${getsubsubsubcate}`)}> {getsubsubsubcate} </span></> : ""}
            </div>
            <div className="header bg-[url(https://storage.googleapis.com/prenatal-italy/2021/01/e200265a-1.jpg)] bg-cover bg-no-repead w-full py-6">
                <div className="container pt-6">
                    <div className="lg:items-end flex justify-between w-full">
                        <div className="bg-primary px-3 py-4 h-min lg:transform lg:translate-y-12 mr-6 flex-col w-1/4">
                            <p className='text-white text-xs font-medium lg:mb-2.5'>{data[0]?.cate_name}</p>
                            <p className='uppercase text-white font-bold text-base leading-4 lg:mb-2.5'>{data[0]?.cate_name}</p>
                            <p className='text-white text-xs font-normal leading-tight pb-1 overflow-auto h-24'>{data[0]?.description}</p>
                        </div>
                        <div className='w-3/4 flex space-x-6 items-center'>
                        {data?.slice(17, 20).map((item, i) => {
                            return(
                                <div key={item.id} className="bg-white py-4 px-4 w-1/3 h-[290px]">
                                    <div className='flex items-center'>
                                        <div className="image w-[180px] h-[180px]">
                                            <img className='' src={item.image_link} alt="Image" />
                                        </div>
                                        <div className="info mx-4">
                                            <p className='text-primary text-base font-medium'>&#8364; {item.price}</p>
                                            <p className='uppercase text-sm text-light mt-1'>{item.marche}</p>
                                            <p className='text-sm font-medium leading-4'>{item.title}</p>
                                        </div>
                                    </div>
                                    <div className='pb-2 mt-2 overflow-auto h-20'>
                                        <p className='text-xs text-light'>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header