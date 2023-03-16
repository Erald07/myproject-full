import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { ContextFilter } from "./filters/contextFilter/ContextFilter";

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronLeft} className='btn text-primary' /></button>,
    nextArrow: <button style={{ ...buttonStyle }}><FontAwesomeIcon icon={faChevronRight} className='btn text-primary' /></button>
}

export default function Items(props){
    const {data} = props;

    const [currentItems,setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    const params = useParams();

    useEffect( () => {
        const curr = parseInt(sessionStorage.getItem("page"));
        const endOffset = curr + itemsPerPage;
        setCurrentItems(data?.slice(curr, endOffset));
        setPageCount(Math.ceil(data?.length / itemsPerPage));
        if(params.getcate !== window.sessionStorage.getItem("cate_name", params.getcate)){
            window.sessionStorage.setItem("page", 0);
        }
        window.sessionStorage.setItem("cate_name", params.getcate);
    },[params, itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        window.sessionStorage.setItem("page", newOffset);
        setItemOffset(JSON.parse(window.sessionStorage.getItem("page")));
    };
    
    return (
        <>
        <div className="pb-8 md:pb-16">
        <div className="items container py-8 md:py-12 mx-auto">
            <div className="flex flex-wrap">
            {currentItems?.map((item, i) => {
                // console.log(item);
                return(
                    <div key={i} className="card px-2 block w-1/2 xs:w-1/2 lg:w-1/3 xl:w-1/4 bg-white hover:scale-105 hover:shadow-lg hover:ease-out duration-500">
                        <div className="image w-full border-solid border-gray-200 border">
                            <div className="translate-y-6 -translate-x-1 flex absolute z-10">
                                {item?.sale_price ?
                                    <div className="bg-primary text-white text-center w-16 absolute">
                                        <p className="z-10">-{Math.round(100-((item?.sale_price*100)/(item?.price)))}%</p>
                                    </div> 
                                    :
                                    ""
                                }
                                {item?.vip_price ? 
                                    <div className="bg-secondary text-white text-center w-16 absolute mt-8">
                                        <p>-{Math.round(100-((item?.vip_price*100)/(item?.price)))}%</p>
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                            {(item?.image_name?.split(',')).length >= 2 ? 
                                <Slide autoplay={false} duration={1000} transitionDuration={300} {...properties}>
                                    {item?.image_name?.split(',').map((img) => <Link to={`/prodotto/${item.title}`}><img src={img} alt="Image" className="relative block w-full" /></Link>)}
                                </Slide>
                                :
                                <Link to={`/prodotto/${item.title}`}><img src={item.image_name} alt="Image" /></Link>
                            }
                            <div className="wishlist hidden">
                                <FontAwesomeIcon icon={faHeart} className="bg-primary text-white hover:bg-white hover:text-primary border border-solid border-primary rounded-full p-3 text-xl ease-in duration-300 right-3 bottom-14 float-right relative" />
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="py-2 flex items-center justify-between">
                                <div className="text-primary flex items-center">
                                    {item?.price ? 
                                        <h6 className={item?.sale_price ? 'line-through font-normal text-sm sm:text-base mr-1 mb-1 leading-none' : 'font-medium text-base sm:text-xl leading-none whitespace-nowrap'}>&#8364; {item?.price}</h6>
                                        :
                                        ""
                                    }
                                    {item?.sale_price ?
                                        <h5 className="ml-1 font-medium md:text-base lg:text-xl">&#8364; {item?.sale_price}</h5>
                                        :
                                        ""
                                    }
                                </div>
                                {item?.vip_price ? 
                                    <div className="border-solid border border-secondary w-[100px] xl:block lg:hidden"></div>
                                    :
                                    ""
                                }
                                <div className="text-right text-secondary items-center uppercase">
                                    {item?.vip_price ?  
                                        <h5>&#8364; {item?.vip_price} <FontAwesomeIcon icon={faCircleInfo} className="text-xs"/><div className="text-[8px] flex">con vip card</div></h5>
                                    : 
                                    ""
                                    }
                                </div> 
                            </div>                           
                            <div className="">
                                <span className="text-sm font-light mt-2 uppercase">{item.marche}</span>
                                <div className="mb-3 min-h-8">
                                    <Link to={`/prodotto/${item.title}`} className="text-base font-medium whitespace-normal leading-4">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="addCart mb-3 hidden bg-white shadow-lg px-2 py-3">
                            <button className="bg-primary text-white uppercase font-medium text-md py-2 text-center w-full rounded-full border border-solid border-primary hover:bg-white hover:text-primary ease-in duration-150">AGGIUNGI AL CARRELLO</button>
                        </div>
                    </div>
                );
            })} 
            </div>
        </div>
        <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="prev"
            nextLinkClassName="next"
            activeLinkClassName="active"
            disableInitialCallback={true}
        />
        </div>
        </>
    );
}