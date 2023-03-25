import React from 'react'
import { Link } from 'react-router-dom'
import LogoDesktop from '../../logo/LogoDesktop'

function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="sticky bg-white w-full left-0 top-0 z-50 py-3 md:py-6 flex items-center justify-center">
            <Link to={'/'} className='inline-block bg-primary rounded-lg' >
                <LogoDesktop />
            </Link>
        </div>
        <div className="flex-grow">
            <div className="container">
                <h1 className="py-4 text-primary text-lg lg:text-3xl">
                    Carrello
                </h1>
                <div className="w-full flex flex-col lg:flex-row my-6">
                    <div className="w-full flex-col lg:w-auto lg:flex-1 mb-7 lg:mb-0">
                        <div className='lg:sticky lg:top-28'>
                            <div className="flex border-b pb-2">
                                <div className="w-3/5 flex">
                                    <div className="w-4/6">
                                        <span className='font-normal'>Proddoto</span>
                                    </div>
                                    <div className="hidden md:block w-2/6 text-center">
                                        <span className='font-normal'>Quantità</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-2/5">
                                    <div className='w-1/2 text-center'>
                                        <span className='font-normal'>Prezzo listino</span>
                                    </div>
                                    <div className='w-1/2 text-right'>
                                        <span className='font-normal'>Prezzo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="divide-y divide-gray-200">
                                    <div className="flex flex-col md:flex-row py-6">
                                        <div className="w-full md:w-3/5 flex">
                                            <div className='w-4/6 flex items-center'>
                                                <div className="w-16 md:w-20 flex-shrink-0 flex justify-center">
                                                    <div className="relative w-full aspect-3/4">
                                                        <Link></Link>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col ml-4">
                                                    <Link><span className='block truncate uppercase text-xs font-light'></span></Link>
                                                    <Link><span className='block text-sm font-normal'></span></Link>
                                                </div>
                                            </div>
                                            <div className='w-2/6 flex flex-col md:flex-row-reverse space-y-1 md:space-y-0 md:space-x-3'></div>
                                        </div>
                                        <div className="w-full md:w-2/5 flex mt-3 md:mt-0">
                                            <div className='md:w-1/2 flex items-center md:justify-center'>
                                                <div className="text-xs font-normal flex"></div>
                                            </div>
                                            <div className="flex-1 md:w-1/2 flex items-center justify-end">
                                                <div className="flex flex-row md:flex-col text-right items-center md:items-end"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto lg:pl-20">
                    <div className='lg:sticky lg:top-28 lg:max-w-sm lg:w-screen'>
                        <div className="flex flex-col mt-6 lg:mt-0">
                            <div className="flex items-center justify-between pb-1.5">
                                <span className='text-xl text-primary'>Il tuo ordine</span>
                                <Link className='inline-block text-primary font-normal underline text-base cursor-pointer'>Torna indietro</Link>
                            </div>
                            <div className="flex flex-col border border-primary mt-1">
                                <div className="p-4 pt-4 flex flex-col space-y-2">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-normal">Subtotale:</span>
                                            <span className="text-base font-medium flex-shrink-0 ml-2 text-primary">

                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="text-sm font-normal">Spedizione:</span>
                                            </div>
                                            <div>
                                                <Link className='text-primary flex flex-col'>
                                                    <span className='text-base font-medium flex-shrink-0 ml-2 text-right'>Gratis</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="border-t border-primary py-6 px-4">
                                        <div className="flex items-center justify-between">
                                            <span className="flex flex-col">
                                                <span className="uppercase text-sm font-normal flex flex-wrap gap-1">
                                                    Totale :
                                                </span>
                                            </span>
                                            <span className="text-primary text-lg md:text-xl font-medium flex-shrink-0 ml-2"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart