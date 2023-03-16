import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../../logo/LogoFooter';
import { CategoryContext } from '../../navbar/contextCategory/CategoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faPinterest, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const {state} = useContext(CategoryContext);
    const [showModal, setShowModal] = React.useState(false);
    // const [state, setState] = useState([]);
    // useEffect(() => {
    //     const getCate = async () => {
    //         const result = await fetch('http://localhost:8000/api/categories');
    //         const cates = await result.json();
    //         // console.log(cates.categories);
    //         if(cates.status === 200){
    //             setState(cates.categories);
    //         }
    //     }

    //     getCate();
    // }, []);
    // console.log(state);
    
    return (
        <>
        <div className='container'>
            <div className="w-full flex justify-between md:py-10 border-b border-solid border-gray-200">
                <div className='md:w-1/2 lg:w-1/4 px-4'>
                    <div className="tilte uppercase text-gray-900 text-sm font-bold py-4">
                        <p>categorie</p>
                    </div>
                    <div className='link uppercase text-gray-600 text-xs font-normal leading-6 flex flex-col'>
                        {state?.map((category, i) => {
                            return(
                            // console.log(category);
                            <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary' key={i} to={`categoria-prodotto/${category.cate_name}`} >{category.cate_name}</Link>
                            );
                        })}
                    </div>
                </div>
                <div className='md:w-1/2 lg:w-1/4 px-4'>
                    <div className="tilte uppercase text-gray-900 text-sm font-bold py-4">
                        <p>tu e prenatal</p>
                    </div>
                    <div className="link uppercase text-gray-600 text-xs font-normal leading-6 flex flex-col">
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>MOMMYPEDIA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>LISTA NASCITA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>VIP CARD</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>AVVISI SULLA SICUREZZA DEI PRODOTTI</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>INFORMAZIONI UTILI DISPOSITIVI ANTIABBANDONO</Link>
                    </div>
                </div>
                <div className='md:w-1/2 lg:w-1/4 px-4'>
                    <div className="tilte uppercase text-gray-900 text-sm font-bold py-4">
                        <p>azienda</p>
                    </div>
                    <div className="link uppercase text-gray-600 text-xs font-normal leading-6 flex flex-col">
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>CHI SIAMO</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>CODICE CONDOTTA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>MODELLO 231</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>CONDIZIONI DI VENDITA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>CONDIZIONI D’USO</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>PRIVACY POLICY</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>PRIVACY LISTA NASCITA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>COOKIES</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>RECYCLE.ME</Link>
                    </div>
                </div>
                <div className='md:w-1/2 lg:w-1/4 px-4'>
                    <div className="tilte uppercase text-gray-900 text-sm font-bold py-4">
                        <p>supporto</p>
                    </div>
                    <div className="link uppercase text-gray-600 text-xs font-normal leading-6 flex flex-col">
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>CONTATTACI</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>METODI DI PAGAMENTO</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>METODI DI SPEDIZIONE</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>TEMPI DI SPEDIZIONE</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>RISOLUZIONE CONTROVERSIE</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>RESI & RIMBORSI</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>REGOLAMENTO PRÉNATAL VIP CARD</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>REGOLAMENTO LISTA NASCITA</Link>
                        <Link className='hover:decoration-solid hover:underline hover:underline-offset-2 decoration-primary'>FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 md:py-10">
            <div className="container pagamenti">
                <div className="icons flex float-right items-center">
                    <p>Pagamenti sicuri</p>
                    <div className="icon ml-2">
                        <img src="https://storage.googleapis.com/prenatal-italy/2020/12/ea67b42e-payments_desktop.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="pt-4 container px-2 flex justify-between items-baseline">
                <div className="flex flex-col">
                    <div className='flex items-center py-4'>
                        <div className='mr-8'>
                            <LogoFooter />
                        </div>
                        <button
                            className='border border-solid'
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            <div className='flex items-center'>
                                <div className='flex'>
                                    <span className='w-[9px] h-[16px] bg-green-700'></span>
                                    <span className='w-[9px] h-[16px] bg-white'></span>
                                    <span className='w-[9px] h-[16px] bg-red-700'></span>
                                </div>
                                <div className='ml-2 text-xs'>
                                    <FontAwesomeIcon icon={faChevronDown} /> 
                                </div>
                            </div>
                        </button>
                        {showModal ? (
                            <>
                            <div className="justify-center items-center flex fixed inset-0 z-50 ">
                                <div className="relative w-auto mx-auto max-w-3xl">
                                    <div className="py-10 rounded-lg shadow-lg relative flex flex-col bg-white">
                                        <div className="flex absolute right-3 -top-3 items-center">
                                            <button
                                                className="text-3xl"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <FontAwesomeIcon icon={faXmark} className='close text-xl bg-white rounded-full px-2 py-1' />
                                            </button>
                                        </div>
                                        <p className='px-32 mb-4 font-bold'>Selezionare il paese a cui si desidera essere <br /> reindirizzati:</p>
                                        <div className=" px-20 relative flex flex-wrap text-center w-auto">
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/albania.jpg" className='w-1/5 mx-auto' alt='Albania' />
                                                <p>Albania</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/armenia.jpg" className='w-1/5 mx-auto' alt='Armenia'/>
                                                <p>Armenia</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/france.jpg" className='w-1/5 mx-auto' alt='France' />
                                                <p>France</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/greece.jpg" className='w-1/5 mx-auto' alt='Greece' />
                                                <p>Greece</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/italy.jpg" className='w-1/5 mx-auto' alt='Italy' />
                                                <p>Italy</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/portugal.jpg" className='w-1/5 mx-auto' alt='Portugal' />
                                                <p>Portugal</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/romania.jpg" className='w-1/5 mx-auto' alt='Romania' />
                                                <p>Romania</p>
                                            </div>
                                            <div className="country w-1/4 mb-6">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/spain.jpg" className='w-1/5 mx-auto' alt='Spain' />
                                                <p>Spain</p>
                                            </div>
                                            <div className="country w-1/4">
                                                <img src="https://assets.prenatal-it.prenatal-services.com/assets/turkmenistan.jpg" className='w-1/5 mx-auto' alt='Turkmenistan' />
                                                <p>Turkmenistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                    <p className='text-xs pb-10 text-gray-800'>Managed by <span className='text-primary cursor-pointer'>NMC</span></p>
                </div>
                <div className='py-4 text-gray-600 text-xs leading-6 text-center font-normal'>
                    <p>© 2023 Prenatal S.p.A. All rights reserved. Via Bertani 6 20154 Milano (MI) - P.I. 00857680151</p>
                </div>
                <div className='py-4 space-x-4'>
                    <Link to={'https://www.facebook.com/prenatalitalia'} target={'_blank'}>
                        <FontAwesomeIcon icon={faFacebook} className='text-primary text-xl' />
                    </Link>
                    <Link to={'https://www.youtube.com/user/prenatalworld'} target={'_blank'}>
                        <FontAwesomeIcon icon={faYoutube} className='text-primary text-xl' />
                    </Link>
                    <Link to={'https://www.pinterest.it/prenatalworld/'} target={'_blank'}>
                        <FontAwesomeIcon icon={faPinterest} className='text-primary text-xl' />
                    </Link>
                    <Link to={'https://www.instagram.com/prenatal'} target={'_blank'}>
                        <FontAwesomeIcon icon={faInstagram} className='text-primary text-xl' />    
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;
