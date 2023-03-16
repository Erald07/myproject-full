import React, { Component, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faBagShopping, faUser, faShoppingBag, faTimes, faCamera } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SliderNavbar from "./sliderHeader/SliderNavbar";
import Swal from "sweetalert2";
import LogoMobile from "../logo/LogoMobile";
import LogoDesktop from "../logo/LogoDesktop";
import CategoriesDesktop from "./category/CategoryDesktop";
import CategoriesMobile from "./category/CategoryMobile";
import Context from "./contextCategory/Context";
import LogoFooter from "../logo/LogoFooter";
import ModalSearch from "./ModalSearch";

function Nav(){

    const navigate = useNavigate();

    const [click1, setClick1] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick1 = () => setClick1(!click1);
    const Close1 = () => setClick1(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/logout').then(res => {
            if(res.data.status === 200){
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_nome");

                Swal.fire({
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate('/');
                setIsShown(current => !current);
            }
        });
    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token')){
        AuthButtons = (
            <>
            <div className="py-4 px-2 flex">
                <Link to={'/login'} className="text-center decoration-none w-full py-2 px-5 rounded-full bg-primary text-white hover:bg-white hover:text-primary duration-75 delay-75 outline-primary outline-1 hover:outline uppercase">ACCEDI</Link>
            </div>
            <p className="text-primary text-center">Nuovo su Prénatal? <Link to={'/register'} className="underline underline-offset-4 decoration-solid decoration-primary">Registrati qui</Link></p>
            </>
        );
    }
    else{
        let nome = localStorage.getItem("auth_nome");
        AuthButtons = (
            <>
            <h2 className="py-2 text-center text-2xl lg:text-lg font-semibold text">Hi {nome}!</h2>
            <div className="px-2 flex">
                <button onClick={logoutSubmit} className="text-center decoration-none w-full py-2 px-5 rounded-full bg-primary text-white hover:bg-white hover:text-primary duration-75 delay-75 outline-primary outline-1 hover:outline uppercase">disconnettersi</button>
            </div>
            </>
        );
    }

    // console.log(showModal);

    return (
        <Context>
        <>
        <SliderNavbar />
        <header className="container justify-between">
            <div className="bg-primary lg:bg-white container md:mx-auto h-12 md:h-16 lg:h-auto flex items-center justify-between lg:px-3 px-5 relative">
                <div className="-mx-2 lg:hidden flex flex-grow flex-shrink flex-1 items-center md:justify-center">
                    <div>
                        <button arial-label="Apri menu" title="Apri menu" className="js-menu-drawer-open inline-flex items-center justify-center p-2 text-gray-700 focus:text-black focus:bg-gray-100 focus:outline-none print:hidden" onClick={handleClick1}>
                            <span className="sr-only">Apri menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="17" viewBox="0 0 24.001 17" data-menu-icon="data-menu-icon" className="text-white lg:fill-current w-6 h-6"><g data-name="Group 593"><path data-name="Path 683" d="M1.5 14h21a1.5 1.5 0 110 3h-21a1.5 1.5 0 010-3zm21-11h-21a1.5 1.5 0 010-3h21a1.5 1.5 0 110 3zm0 7h-21a1.5 1.5 0 010-3h21a1.5 1.5 0 110 3z" fill="currentColor" fillRule="evenodd"></path></g></svg>
                        </button>
                    </div>
                    <div className="ml-1">
                        <a href="">
                            <FontAwesomeIcon icon={faLocationDot} className="pl-1 text-2xl text-white items-center" />
                        </a>
                    </div>
                </div>
                <LogoMobile />
                <div className="flex flex-1 lg:hidden flex-grow flex-shrink justify-end items-center md:justify-center">
                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl text-white items-center" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faBagShopping} className="ml-3 text-2xl text-white items-center" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center lg:justify-between lg:container lg:pb-2 lg:px-3">
                <LogoDesktop />
                <div className="lg:flex lg:ml-8 hidden md:space-x-8">
                    <a href="#" className="flex px-4 py-2 text-green-700 items-center w-56">
                        <div className="text-right text-xs pr-1 inline-flex">TROVA IL NEGOZIO PRÉNATAL PIÙ VICINO A TE</div>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="pl-1 text-2xl" />
                        </div>
                    </a>
                </div>
                <div className="hidden lg:flex lg:p-2 lg:border-b lg:border-black lg:items-center">
                    <input type={'text'} onClick={() => setShowModal(!showModal)} placeholder="Che prodotto stai cercando?" className="lg:focus:outline-none font-semibold placeholder:text-black xl:w-[35rem] lg:w-[20rem]" />
                    <button type="submit" className="float-right">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl ml-3' />
                    </button>
                    <ModalSearch showModal={showModal} setShowModal={setShowModal} />
                    {/* {showModal ? 
                    <div className="bg-gray-100 fixed h-full inset-0 w-full z-40">
                        <div className="mx-12 mt-8 flex items-center">
                            <div className="logo w-40">
                                <img src="https://storage.googleapis.com/prenatal-italy/2022/10/2229e59a-imageedit_1_7165117666.png" alt="logo" />
                            </div>
                            <div className="search border-b border-primary py-3 flex w-full mx-4">
                                <div className="glass ml-4">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <div className="w-full ml-6">
                                    <input type="text" placeholder="Ricerca..." className="text-gray-500 bg-transparent text-left outline-none w-full" />
                                </div>
                                <div className="camera mr-2">
                                    <FontAwesomeIcon icon={faCamera} />
                                </div>
                            </div>
                            <div className="close">
                                <button onClick={() => setShowModal(false)} className="items-center">
                                    <FontAwesomeIcon icon={faTimes} className='close-modal' />
                                </button>
                            </div>
                        </div>
                        <div className="mx-12 pt-8 flex">
                            <div>
                                <div className="flex flex-col">
                                    <h1 className="text-lg mb-2 font-bold">Ricerche popolari</h1>
                                    <div className="flex flex-col">
                                        <Link className="text-xs py-3">body</Link>
                                        <Link className="text-xs py-3">trio</Link>
                                        <Link className="text-xs py-3">fasciatoio</Link>
                                        <Link className="text-xs py-3">pannolini</Link>
                                        <Link className="text-xs py-3">carvenale</Link>
                                        <Link className="text-xs py-3">scaldabiberon</Link>
                                        <Link className="text-xs py-3">accappation</Link>
                                        <Link className="text-xs py-3">seggiolino auto</Link>
                                        <Link className="text-xs py-3">seggiolone</Link>
                                        <Link className="text-xs py-3">box</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-14">
                                <div className="flex flex-col">
                                    <h1 className="text-lg mb-2 font-bold">Prodotti consigliati</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
                    } */}
                </div>
                <div className="hidden items-center lg:flex">
                    <FontAwesomeIcon onClick={handleClick} icon={faUser} className="text-2xl mr-4 cursor-pointer" />
                    <FontAwesomeIcon icon={faShoppingBag} className="text-2xl" />
                </div>
            </div>
            <div className={isShown ? "hidden lg:block absolute top-24 right-40 shadow-xl bg-white z-30 w-[270px] space-y-2 py-4 text-center" : "hidden"}>
                {isShown && (AuthButtons)}
            </div>
            <div className={click1 ? "main-container" : ""}  onClick={()=>Close1()} />
            <nav className="navbar max-w-screen-2xl" onClick={e => e.stopPropagation()}>
                <div className={click1 ? "nav-menu flex-col lg:hidden max-w-2xl w-[90%] absolute transition-all duration-700 ease bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col w-[90%] absolute -left-full transition-all duration-700 ease top-0 opacity-100"}>
                    <div className="flex pt-6 border-b border-black pb-3 items-center w-[90%] mx-auto">
                        <input type={'text'} placeholder="Che prodotto stai cercando?" className="focus:outline-none font-semibold placeholder:text-black w-[90%]" />
                        <button type="submit" className="float-right">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl ml-3' />
                        </button>
                    </div>
                    <ul className="overflow-y-auto h-[28rem] mt-8 mb-4 border-gray-300 border-b-4"> 
                        <CategoriesMobile />                    
                    </ul>
                    <div className={click1 ? "block absolute top-0 -right-2 cursor-pointer text-white" : "hidden"} onClick={handleClick1}>
                        <FontAwesomeIcon icon={faTimes} className="text-3xl nav-xmark" />
                    </div>
                    <div className="flex-col items-center px-6 justify-center">
                        {AuthButtons}
                    </div>
                </div>
            </nav>
        </header>
        <div>
            <CategoriesDesktop /> 
        </div>
        </>
        </Context>
    );
}


export default Nav;