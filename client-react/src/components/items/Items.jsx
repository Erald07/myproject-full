import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Navbari from "../navbar/Navbar"

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
        {/* <Navbari /> */}
        <div className="items container grid grid-cols-4">
            {currentItems?.map(item => {
                return(
                    <div key={item.id} className="block">
                        <div>
                            {item.title}
                        </div>
                        <div>
                            <img src={item.image_link} alt="" className="w-[200px]" />
                        </div>
                    </div>
                );
            })} 
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
        </>
    );
}