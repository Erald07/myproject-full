import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa2, faLock, faRotateLeft, faTruckMoving, faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

function FilterFooter() {
  return (
    <>
    <div className='py-16 flex flex-col justify-center items-center relative bg-cover bg-no-repeat bg-center bg-[url("https://storage.googleapis.com/assets.prenatal-it.prenatal-services.com/assets/ideale-con-bg.png")]'>
        <p className='text-white text-2xl font-medium mb-8 text-center px-4'>Esplora la categoria per attributi</p>
        <div className='flex justify-center container items-center'>
            <div className='flex justify-center flex-wrap ml-2 mb-2 md:ml-4 md:mb-4 max-h-36 md:max-h-full overflow-auto'>
                <div className="item mb-4">
                    <Link className=''>Borse passeggio</Link>
                </div>
                <div className="item">
                    <Link>Marsupi</Link>
                </div>
                <div className="item">
                    <Link>Ombrellini</Link>
                </div>
                <div className="item">
                    <Link>Parapioggia</Link>
                </div>
                <div className="item">
                    <Link>Passeggini basici</Link>
                </div>
                <div className="item">
                    <Link>Passeggini con chiusura a libro</Link>
                </div>
                <div className="item">
                    <Link>Passeggini ultra leggeri</Link>
                </div>
                <div className="item">
                    <Link>Sacchi passeggio</Link>
                </div>
                <div className="item">
                    <Link>Sistemi modulari trio</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-8">
        <div className="flex flex-col justify-center text-center items-center">
            <div className='px-2 mt-6'>
                <p className='text-2xl my-2'>Passeggini in Vendita Online</p>
                <p className='text-sm'>Su Prénatal trovi un ampio assortimento di comodi passeggini pensati per rispondere a tutte le necessità di neonati e genitori. A partire dai passeggini classici e leggeri capaci di assicurarti il minimo ingombro, che grazie al peso ridotto sono in grado di facilitare la guida anche nei percorsi più difficili e accidentati.</p>
                <p className='text-sm'>Progettati per essere ripiegati con una sola mano e facili da riporre anche in auto, i passeggini in vendita online sono la scelta perfetta per affrontare gli spostamenti insieme ai bambini: nel</p>
            </div>
        </div>
    </div>
    <div className="border-t border-gray-200">
        <div className="container py-8 md:py-16 flex justify-between px-6">
            <div className="flex justify-content space-x-3.5 items-center">
                <div className="image border-2 border-secondary border-solid rounded-full px-3.5 py-1.5 text-2xl text-secondary">
                    <FontAwesomeIcon icon={fa2} /> 
                </div>
                <div className="info">
                    <p className='text-secondary text-base leading-5 font-normal'>Garanzia di <br /> 2 anni</p>
                </div>
            </div>
            <div className="flex justify-content space-x-3.5 items-center">
                <div className="image border-2 border-secondary border-solid rounded-full px-3 py-1.5 text-2xl text-secondary">
                    <FontAwesomeIcon icon={faLock} /> 
                </div>
                <div className="info">
                    <p className='text-secondary text-base leading-5 font-normal'>Pagamenti <br /> sicuri e protetti</p>
                </div>
            </div>
            <div className="flex justify-content space-x-3.5 items-center">
                <div className="image border-2 border-secondary border-solid rounded-full px-2.5 py-1.5 text-2xl text-secondary">
                    <FontAwesomeIcon icon={faRotateLeft} /> 
                </div>
                <div className="info">
                    <p className='text-secondary text-base leading-5 font-normal'>Reso semplice <br />entro 30 giorni</p>
                </div>
            </div>
            <div className="flex justify-content space-x-3.5 items-center">
                <div className="image text-2xl">
                    <svg data-name="Livello 1" width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M20 1A19 19 0 111 20 19.021 19.021 0 0120 1m0-1a20 20 0 1020 20A20 20 0 0020 0z" fill="#779650"></path><path d="M10.327 17.4c.017-.341-.033-.767.022-1.19a1.337 1.337 0 011.473-1.179 1.27 1.27 0 011.156.8 1.3 1.3 0 01-.2 1.422 1.161 1.161 0 01-1.18.385.549.549 0 01-.42-.468c-.015-.1.013-.144.117-.142h.44a.618.618 0 00.63-.667.628.628 0 00-.634-.636.6.6 0 00-.67.62c-.007.48 0 .961 0 1.441a3.507 3.507 0 01-.027.423.593.593 0 01-.5.536c-.167.034-.2.01-.2-.159-.008-.363-.007-.732-.007-1.186zM16.556 18.769a1.319 1.319 0 01-1.339-1.193 1.378 1.378 0 012.516-.926.129.129 0 01-.025.2c-.417.368-.828.742-1.24 1.115-.029.026-.079.048-.06.094s.07.029.109.034a.745.745 0 00.625-.249c.086-.078.168-.161.256-.237.117-.1.155-.094.217.053a.635.635 0 01-.118.693 1.209 1.209 0 01-.941.416zm-.636-1.4c.009.041-.023.1.026.135.022.016.046-.011.064-.028q.366-.338.731-.678c.054-.051.039-.089-.031-.1a.512.512 0 00-.134-.016.7.7 0 00-.656.689zM23.609 17.94v.668c0 .149-.037.176-.185.148a.628.628 0 01-.524-.656c-.006-.233 0-.465 0-.7a.642.642 0 00-.71-.672.66.66 0 00-.614.669.641.641 0 00.591.685c.161.011.323.007.485.006.109 0 .143.048.126.152a.556.556 0 01-.549.491 1.3 1.3 0 01-1.26-1.866 1.4 1.4 0 012.395-.3 1.211 1.211 0 01.244.72c.008.217 0 .435 0 .652zM28.072 17.957v.652c0 .148-.039.175-.187.146a.631.631 0 01-.519-.653 6.325 6.325 0 00-.02-.8.635.635 0 00-.758-.56.675.675 0 00-.542.787.633.633 0 00.644.566h.425c.11 0 .14.046.121.152a.549.549 0 01-.562.491 1.228 1.228 0 01-1.338-1.108 1.372 1.372 0 011.065-1.57 1.35 1.35 0 011.673 1.352c-.005.181-.002.363-.002.545zM20.662 17.9v.652c0 .1-.041.147-.143.145h-.41c-.117 0-.161-.043-.159-.161v-1.137a.622.622 0 00-.511-.657.636.636 0 00-.788.615 6.586 6.586 0 01-.028.877.6.6 0 01-.549.524c-.087.009-.155 0-.153-.112.009-.484-.032-.97.024-1.453a1.245 1.245 0 01.879-1.077 1.365 1.365 0 011.418.268 1.2 1.2 0 01.417.939v.576zM23.814 16.515v-1.043c0-.135.041-.18.18-.151a.588.588 0 01.524.561c.014.145.077.194.215.184.1-.008.212 0 .318 0s.171.039.166.159 0 .263 0 .394c0 .1-.04.148-.144.145-.121 0-.243.006-.364 0s-.171.048-.166.17c.006.166 0 .333 0 .5a.58.58 0 00.509.618c.121.025.163.076.159.191a3.4 3.4 0 000 .364c.008.141-.061.172-.187.16a1.326 1.326 0 01-1.185-1.141c-.054-.396-.008-.791-.025-1.111zM29.008 16.8v.637a.574.574 0 00.5.609.174.174 0 01.168.214 3.386 3.386 0 000 .349c.006.132-.057.165-.177.155a1.332 1.332 0 01-1.2-1.116 4.9 4.9 0 01-.024-.726v-1.441c0-.178.02-.191.2-.154a.608.608 0 01.509.579c.033.294.016.594.024.894zM13.122 17.955a7.451 7.451 0 01.024-.756A1.264 1.264 0 0114 16.128a1.375 1.375 0 011.342.164c.087.058.084.11.01.178-.111.1-.218.212-.322.322a.125.125 0 01-.183.029.654.654 0 00-.995.6 3.986 3.986 0 01-.023.817.6.6 0 01-.516.522c-.149.026-.185 0-.187-.149-.006-.206-.004-.411-.004-.656z" fill="#779650"></path><path d="M11.5 16.941c-.382 0-.345.031-.348-.354a1.281 1.281 0 01.025-.315.288.288 0 01.272-.243.27.27 0 01.293.191.215.215 0 00.143.137.266.266 0 01.179.3.284.284 0 01-.233.263 1.419 1.419 0 01-.331.021zM16.929 15.945c-.114-.011-.179-.068-.177-.173a.168.168 0 01.336 0 .163.163 0 01-.159.173zM23.012 28.143h-.08v.325h.082a.184.184 0 00.127-.04.15.15 0 00.046-.12.163.163 0 00-.044-.122.186.186 0 00-.131-.043zM25.06 28.156a.165.165 0 00-.168 0 .168.168 0 00-.055.063.2.2 0 00-.019.086.2.2 0 00.019.086.158.158 0 00.055.062.148.148 0 00.084.024.145.145 0 00.083-.024.15.15 0 00.055-.062.191.191 0 00.02-.086.188.188 0 00-.02-.086.157.157 0 00-.054-.063zM31.8 26.61a.638.638 0 00-.149-.02h-.265v.458h.265a.686.686 0 00.148-.017.234.234 0 00.121-.064.2.2 0 00.045-.148.194.194 0 00-.044-.141.251.251 0 00-.121-.068zM31.8 26.07a.146.146 0 00.066-.144.155.155 0 00-.118-.17.4.4 0 00-.125-.019h-.235v.379h.235a.346.346 0 00.177-.046zM22.854 25.757h-.229v.5h.232a.231.231 0 00.176-.068.24.24 0 00.066-.177.26.26 0 00-.066-.186.231.231 0 00-.179-.069z" fill="#779650"></path><path d="M32.363 9.662H7.637a3.293 3.293 0 00-3.289 3.289v14.1a3.293 3.293 0 003.289 3.289h24.726a3.293 3.293 0 003.289-3.289v-14.1a3.293 3.293 0 00-3.289-3.289zM18.716 25.24h.67l.494 1.475.481-1.475h.647l-.845 2.3h-.6zm1.464 3.285h-.2v-.053h.073v-.3l-.085.046-.024-.047.116-.063h.053v.361h.072zm.438 0h-.263v-.043a.113.113 0 01.016-.061.232.232 0 01.04-.049.75.75 0 01.054-.049l.044-.037a.175.175 0 00.029-.034.063.063 0 00.011-.038.054.054 0 00-.007-.027.062.062 0 00-.022-.024.077.077 0 00-.041-.01.1.1 0 00-.04.008.126.126 0 00-.028.02l-.019.023-.044-.032a.148.148 0 01.027-.032.135.135 0 01.043-.029.18.18 0 01.139 0 .1.1 0 01.042.041.111.111 0 01.014.054.118.118 0 01-.013.056.244.244 0 01-.035.046.582.582 0 01-.045.04.815.815 0 00-.071.06.082.082 0 00-.028.059h.2zm.719 0l-.014-.336-.123.211h-.031l-.122-.205-.015.334h-.059l.02-.438h.061l.133.228.133-.228h.059l.021.438zm-.23-.983v-2.3h.609v2.3zm.749.983h-.292v-.438h.276v.056h-.213v.127h.16v.057h-.16v.141h.229zm.41-.051a.13.13 0 01-.055.045.179.179 0 01-.078.017.2.2 0 01-.073-.012.2.2 0 01-.054-.03.18.18 0 01-.037-.035l.045-.04a.256.256 0 00.029.027.143.143 0 00.038.023.131.131 0 00.05.009.1.1 0 00.068-.02.065.065 0 00.024-.053.061.061 0 00-.027-.054.228.228 0 00-.08-.029.2.2 0 01-.091-.043.106.106 0 01-.035-.083.112.112 0 01.017-.059.106.106 0 01.049-.044.167.167 0 01.081-.017.2.2 0 01.07.011.176.176 0 01.044.026.2.2 0 01.022.024l-.042.039-.018-.017a.117.117 0 00-.031-.019.115.115 0 00-.048-.008.1.1 0 00-.045.009.071.071 0 00-.027.024.06.06 0 00-.008.029.052.052 0 00.027.048.243.243 0 00.077.027.29.29 0 01.062.023.125.125 0 01.048.043.12.12 0 01.019.072.113.113 0 01-.021.067zm.244.051h-.063v-.438h.063zm.713-.1a.193.193 0 01-.085.072.3.3 0 01-.123.024h-.146v-.438h.147a.317.317 0 01.123.023.2.2 0 01.084.072.236.236 0 01.03.125.227.227 0 01-.03.126zm.245.1h-.063v-.438h.063zm.126-2.1a.73.73 0 01-.3.26.905.905 0 01-.391.086h-.281v.771h-.6v-2.3h.854a.917.917 0 01.471.108.673.673 0 01.269.284.823.823 0 01.085.37.761.761 0 01-.107.421zm.5 2.049a.137.137 0 01-.055.045.18.18 0 01-.079.017.2.2 0 01-.072-.012.206.206 0 01-.055-.03.2.2 0 01-.036-.035l.045-.04a.363.363 0 00.028.027.149.149 0 00.039.023.131.131 0 00.05.009.1.1 0 00.068-.02.065.065 0 00.024-.053.061.061 0 00-.027-.054.228.228 0 00-.08-.029.193.193 0 01-.091-.043.106.106 0 01-.035-.083.111.111 0 01.016-.059.114.114 0 01.05-.044.161.161 0 01.08-.017.2.2 0 01.071.011.168.168 0 01.043.026.157.157 0 01.023.024l-.042.039-.018-.017a.108.108 0 00-.032-.019.113.113 0 00-.047-.008.1.1 0 00-.046.009.076.076 0 00-.026.024.051.051 0 00-.008.029.052.052 0 00.027.048.236.236 0 00.076.027.28.28 0 01.063.023.132.132 0 01.048.043.128.128 0 01.019.072.113.113 0 01-.015.067zm.235-.082a.146.146 0 00.053.062.142.142 0 00.081.022.149.149 0 00.064-.012.157.157 0 00.04-.028l.023-.025.044.037a.245.245 0 01-.033.036.2.2 0 01-.058.036.2.2 0 01-.08.015.216.216 0 01-.114-.03.21.21 0 01-.078-.081.262.262 0 01-.011-.206.217.217 0 01.045-.074.2.2 0 01.069-.049.219.219 0 01.09-.018.194.194 0 01.08.014.166.166 0 01.055.034.238.238 0 01.035.038l-.045.038a.329.329 0 00-.026-.031.146.146 0 00-.04-.026.148.148 0 00-.059-.011.141.141 0 00-.082.024.146.146 0 00-.053.062.192.192 0 00-.019.087.187.187 0 00.024.086zm.848 0a.228.228 0 01-.047.074.231.231 0 01-.071.049.22.22 0 01-.088.018.213.213 0 01-.088-.018.22.22 0 01-.071-.049.228.228 0 01-.047-.074.221.221 0 01-.018-.089.244.244 0 01.017-.09.223.223 0 01.047-.073.219.219 0 01.072-.049.213.213 0 01.088-.018.22.22 0 01.088.018.215.215 0 01.071.049.233.233 0 01.064.163.221.221 0 01-.012.097zm.534.13h-.063l-.24-.343v.343h-.061v-.438h.063l.239.342v-.342h.062zm.512-.383h-.156v.383h-.063v-.383h-.157v-.055h.376zm.2.383h-.063v-.438h.063zm.171-1.41a1.132 1.132 0 01-.246.242 1.285 1.285 0 01-.335.175 1.19 1.19 0 01-.4.066 1.2 1.2 0 01-.613-.152 1.113 1.113 0 01-.418-.427 1.253 1.253 0 01-.15-.617 1.309 1.309 0 01.086-.475 1.186 1.186 0 01.243-.388 1.113 1.113 0 01.377-.259 1.223 1.223 0 01.483-.093 1.259 1.259 0 01.556.117 1.057 1.057 0 01.4.34l.029.039-.421.405-.038-.053a.761.761 0 00-.217-.207.541.541 0 00-.291-.075.551.551 0 00-.309.084.577.577 0 00-.2.229.719.719 0 00-.072.323.707.707 0 00.072.323.552.552 0 00.2.222.546.546 0 00.3.081.662.662 0 00.241-.038.555.555 0 00.162-.1 1.6 1.6 0 00.135-.138l.038-.043.419.381zm1.813-.126v.553h-1.651v-2.3h.608v1.749zm-1.334 1.536h-.291v-.438h.276v.056h-.213v.127h.16v.057h-.16v.141h.228zm.411-.051a.137.137 0 01-.055.045.179.179 0 01-.078.017.2.2 0 01-.073-.012.222.222 0 01-.055-.03.2.2 0 01-.036-.035l.045-.04a.256.256 0 00.029.027.143.143 0 00.038.023.131.131 0 00.05.009.1.1 0 00.068-.02.065.065 0 00.024-.053.061.061 0 00-.027-.054.228.228 0 00-.08-.029.2.2 0 01-.091-.043.106.106 0 01-.035-.083.121.121 0 01.016-.059.114.114 0 01.05-.044.163.163 0 01.08-.017.2.2 0 01.071.011.176.176 0 01.044.026.2.2 0 01.022.024l-.042.039-.018-.017a.108.108 0 00-.032-.019.107.107 0 00-.047-.008.1.1 0 00-.045.009.071.071 0 00-.027.024.06.06 0 00-.008.029.052.052 0 00.027.048.245.245 0 00.076.027.28.28 0 01.063.023.125.125 0 01.048.043.12.12 0 01.019.072.113.113 0 01-.017.07zm.235-.082a.153.153 0 00.053.062.145.145 0 00.081.022.149.149 0 00.064-.012.141.141 0 00.04-.028l.023-.025.044.037a.245.245 0 01-.033.036.192.192 0 01-.058.036.2.2 0 01-.08.015.216.216 0 01-.114-.03.2.2 0 01-.077-.081.234.234 0 01-.028-.116.244.244 0 01.016-.09.217.217 0 01.045-.074.212.212 0 01.069-.049.219.219 0 01.09-.018.194.194 0 01.08.014.182.182 0 01.056.034.227.227 0 01.034.038l-.045.038a.225.225 0 00-.026-.031.138.138 0 00-.1-.037.142.142 0 00-.083.024.153.153 0 00-.053.062.206.206 0 00-.019.087.2.2 0 00.025.089zm.739.133h-.291v-.438h.063v.382h.228zm.458-.167a.2.2 0 01-.019.09.136.136 0 01-.057.064.212.212 0 01-.2 0 .144.144 0 01-.058-.064.219.219 0 01-.018-.09v-.271h.063v.256a.248.248 0 00.009.07.092.092 0 00.035.047.148.148 0 00.134 0 .09.09 0 00.034-.047.215.215 0 00.01-.07v-.256h.063zm.439.116a.14.14 0 01-.056.045.179.179 0 01-.078.017.207.207 0 01-.073-.012.2.2 0 01-.054-.03.21.21 0 01-.037-.035l.045-.04a.256.256 0 00.029.027.16.16 0 00.038.023.135.135 0 00.05.009.1.1 0 00.068-.02.065.065 0 00.024-.053.061.061 0 00-.027-.054.228.228 0 00-.08-.029.2.2 0 01-.091-.043.106.106 0 01-.035-.083.112.112 0 01.017-.059.111.111 0 01.049-.044.167.167 0 01.081-.017.2.2 0 01.07.011.176.176 0 01.044.026.2.2 0 01.022.024l-.042.039-.018-.017a.117.117 0 00-.031-.019.115.115 0 00-.048-.008.1.1 0 00-.045.009.071.071 0 00-.027.024.06.06 0 00-.008.029.052.052 0 00.027.048.243.243 0 00.077.027.29.29 0 01.062.023.125.125 0 01.048.043.133.133 0 010 .139zm.243.051h-.063v-.438h.065zm.362 0h-.06l-.169-.438h.07l.134.36.133-.36h.066zm.36 0h-.063v-.438h.063zm.168-1.87a.987.987 0 01-.12.491.865.865 0 01-.341.335 1.047 1.047 0 01-.514.12 1.076 1.076 0 01-.513-.115.839.839 0 01-.342-.336.991.991 0 01-.121-.492V25.24h.612v1.353a.533.533 0 00.083.312.321.321 0 00.281.107.314.314 0 00.278-.107.539.539 0 00.082-.312V25.24h.615zm2.031 1.9h-1.77V28.5h1.77zm0-.214h-1.77v-.056h1.77zm-1.775-.224v-.056h1.77v.056zm1.569-.726a1.228 1.228 0 01-.655.153h-.878v-2.3h.878a1.047 1.047 0 01.459.086.577.577 0 01.259.233.626.626 0 01.08.308.5.5 0 01-.069.266.581.581 0 01-.154.17l-.019.013.012.005a.6.6 0 01.246.2.572.572 0 01.1.335.579.579 0 01-.25.532zM34.956 22h-.007.007zm0-1.166a3.118 3.118 0 01-1.717 2.049 4.27 4.27 0 01-1.8.4H5.386a.6.6 0 00-.061.013h-.281V12.951a2.6 2.6 0 012.593-2.593h24.726a2.6 2.6 0 012.593 2.593z" fill="#779650"></path></svg>
                </div>
                <div className="info">
                    <p className='text-secondary text-base leading-5 font-normal'>Servizi esclusivi <br />per i clienti VIP</p>
                </div>
            </div>
            <div className="flex justify-content space-x-3.5 items-center">
                <div className="image border-2 border-secondary border-solid rounded-full px-2 py-1.5 text-2xl text-secondary">
                    <FontAwesomeIcon icon={faTruckMoving} /> 
                </div>
                <div className="info">
                    <p className='text-secondary text-base leading-5 font-normal'>Spedizione gratuita <br />gli ordini VIP</p>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-[url("https://storage.googleapis.com/assets.prenatal-it.prenatal-services.com/assets/footer_nwl_bg.png")] bg-no-repeat bg-cover bg-right'>
        <div className="py-8 md:py-16 container flex space-x-5">
            <div className="bg-white px-16 lg:pl-20 w-full lg:w-1/2">
                <div className="py-2 lg:py-16 flex-col align-middle justify-center">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHeart} className='text-9xl text-primary absolute left-6 rotate-45' />
                        <p className='absolute left-20 mt-12 text-4xl font-medium text-white'>-5€</p>
                    </div>
                    <p className='text-base lg:text-xl text-gray-900 font-medium leading-5 md:leading-7'>Iscriviti alla newsletter.</p>
                    <p className='text-base text-gray-900 font-medium leading-4 block mb-2'>per te, subito un buono sconto da 5€ da spendere sul tuo prossimo ordine.</p>
                    <p className='text-sm text-gray-900 font-normal'>*Valido su una spesa minima di 30€. Non valido per l’acquisto di Gift Card e Vip Card.</p>
                    <div className="py-4">
                        <div className="input border-b border-solid border-gray-200 mb-2">
                            <input type="text" className='py-3 px-1 focus:outline-none w-full' placeholder='Inserisci il tuo indirizzo e-mail' />
                        </div>
                    </div>
                    <div className="condition flex items-center mt-2 pt-3 pb-1 md:pb-3">
                        <input type="checkbox" />
                        <p className='ml-3 text-xs'>Dichiaro di aver letto e accettato <span className='text-blue-400'>l’informativa privacy</span> e acconsento al trattamento dei miei dati per lo svolgimento da parte della Società di attività di marketing di vario tipo, inclusa la promozione di prodotti, servizi, distribuzione di materiale a carattere informativo, pubblicitario e promozionale, eventi, invio di newsletter e pubblicazioni (art. 2, lett. d)<span className='text-blue-400'> dell’informativa privacy</span>).</p>
                    </div>
                    <div className="button-iscriviti bg-primary text-white px-5 py-2 uppercase text-base text-center w-1/3 mx-auto rounded-full mt-5 border border-solid border-primary hover:bg-white hover:text-primary">
                        <button className='uppercase'>Iscriviti</button>
                    </div>
                </div>
            </div>
            <div className="bg-white px-16 w-full lg:w-1/2">
                <div className='h-1/2 items-start'>
                    <div className="py-2 lg:py-16 flex-col align-middle justify-center">
                        <div className="flex items-center">
                            <div className="card-image w-20">
                                <img src="https://storage.googleapis.com/assets.prenatal-it.prenatal-services.com/assets/giftcard_logo.jpeg" alt="Image" />
                            </div>
                            <div className="info-text ml-4">
                                <p className='text-base lg:text-xl text-gray-900 font-medium leading-5 md:leading-7'>Verifica il credito della tua gift card!</p>
                                <p className='text-base text-gray-900 font-medium leading-5 block mb-2'>Inserisci nello spazio sotto il codice della tua gift card e verifica il credito residuo.</p>
                            </div>
                        </div>
                        <div className="input flex items-center">
                            <input type="text" placeholder='Inserisci il codice della gift card' className='py-2 px-1 focus:outline-none w-full border-b border-solid border-gray-200' />
                            <div className="button-verifica items-center ml-2 bg-primary text-white px-5 py-2 text-base text-center w-1/3 mx-auto rounded-full border border-solid border-primary hover:bg-white hover:text-primary">
                                <button className='uppercase'>verifica</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-1/2 items-start'>
                    <div className="py-2 lg:py-16 flex-col align-middle justify-center">
                        <div className="flex items-center">
                            <div className="card-image w-20">
                                <img src="https://storage.googleapis.com/assets.prenatal-pt.prenatal-services.com/assets/vip-club.png" alt="Image" />
                            </div>
                            <div className="info-text ml-4">
                                <p className='text-base lg:text-xl text-gray-900 font-medium leading-5 md:leading-7'>Controlla la data di scadenza della tua carta VIP!</p>
                                <p className='text-base text-gray-900 font-medium leading-5 block mb-2'>Inserisci il codice della tua carta VIP nello spazio sottostante e verifica la data di scadenza.</p>
                            </div>
                        </div>
                        <div className="input flex items-center">
                            <input type="text" placeholder='Inserire il codice della carta VIP' className='py-2 px-1 focus:outline-none w-full border-b border-solid border-gray-200' />
                            <div className="button-verifica items-center ml-2 bg-primary text-white px-5 py-2 text-base text-center w-1/3 mx-auto rounded-full border border-solid border-primary hover:bg-white hover:text-primary">
                                <button className='uppercase'>verifica</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FilterFooter;
