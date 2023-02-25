import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "./FormInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import LogoDesktop from "../logo/LogoDesktop";

export default function Login(){

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleShowHide = () => {
        setShow(!show);
    }

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: show ? "text" : "password",
            message: "La password deve avere almeno 6 caratteri, con lettere maiuscole e minuscole e numeri.",
            placeholder: "Password",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
            butoni: show ? 
                (<FontAwesomeIcon icon={faEye} id="show_hide" className="absolute" onClick={handleShowHide} />) 
                : 
                (<FontAwesomeIcon icon={faEyeSlash} id="show_hide" className="absolute" onClick={handleShowHide} />),
            required: true,
        },
        
    ];

    async function Login(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post("http://localhost:8000/api/login-user", values).then(res => {
                if(res.data.status === 200){

                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_nome", res.data.username);

                    Swal.fire({
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/');
                }
                else if(res.data.status === 400){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data.message,
                    })
                }
            });
        })
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return(
        <div className="container pt-16">
            {/* <div className="mb-4 flex flex-row items-center justify-center text-center">
                <div className="bg-primary px-4 py-3 rounded-lg">
                    <a href="https://www.prenatal.com/my-account/">
                        <svg width="397" height="77" className="h-8 w-auto block" data-logo-icon="data-logo-icon" viewBox="0 0 397 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0625 38.5508H27.9023C30.5586 38.5508 32.2539 37.9102 33.4062 36.7461C34.4766 35.6562 35.1445 34.1641 35.1445 32.5156C35.1445 27.9883 29.918 25.6914 28.0664 27.543C29.918 25.6914 27.6211 20.4727 23.0938 20.4727C21.4453 20.4727 19.9531 21.1367 18.8633 22.207C17.7031 23.3633 17.0586 25.0586 17.0586 27.7109" fill="white"></path>
                            <path d="M138.414 15.0586C138.414 13.2578 136.949 11.7969 135.152 11.7969C133.352 11.7969 131.891 13.2578 131.891 15.0586C131.891 16.8594 133.352 18.3242 135.152 18.3242C136.949 18.3242 138.414 16.8594 138.414 15.0586Z" fill="white"></path>
                            <path d="M27.9766 0.00390989C20.2578 3.63967e-06 13.0078 3.14063 7.91407 8.15625C1.64454 14.3164 -0.00389933 21.0547 6.92108e-06 30.0391V76.3672C4.31251 76.332 7.86719 75.1719 10.3164 72.6133C12.9649 69.8477 14.0313 66.3906 14.0313 60.9844V29.6523C14.0313 24.0156 14.7813 20.7031 17.9219 17.5742C20.5234 15.0078 24.1172 13.6953 27.9766 13.6914C31.8477 13.6953 35.4492 15.168 38.0547 17.7188C40.6406 20.2773 41.918 23.7617 41.9258 27.6328C41.918 31.5039 40.4492 34.9961 37.9024 37.5547C34.9766 40.4648 31.5078 41.5703 26.3594 41.5742H17.082C17.1211 44.2734 18.1641 47.5078 19.9922 49.6719C22.168 52.2617 25.4297 53.8633 29.8984 53.8633C37.7891 53.8633 43.0703 51.5938 47.6445 47.5273C52.9883 42.7695 56.0899 35.957 56.0938 27.6328C56.0859 11.5781 43.8906 0.00781614 27.9766 0.00390989Z" fill="white"></path>
                            <path d="M244.441 20.6328C252.168 20.6289 259.547 23.5625 264.68 28.625C271.004 34.832 272.43 41.6875 272.426 50.6719V76.3711C268.109 76.3359 264.562 75.1758 262.109 72.6211C259.457 69.8516 258.395 66.4023 258.395 60.9922V50.7305C258.395 44.9414 257.57 41.582 254.449 38.3867C251.859 35.7578 248.313 34.332 244.441 34.3281C240.566 34.332 237.012 35.9219 234.426 38.5273C231.855 41.1445 230.496 44.6836 230.492 48.6641C230.496 52.6445 231.816 56.418 234.395 59.1172C237.348 62.1836 240.906 63.1914 246.066 63.1953H255.34C255.34 71.2969 250.555 75.7852 242.949 75.7852C235.055 75.7852 229.109 73.3789 224.555 69.1133C219.379 64.2617 216.465 57.2227 216.461 48.6641C216.469 32.7773 228.527 20.6328 244.441 20.6328Z" fill="white"></path>
                            <path d="M114.125 48.1875C114.309 43.7421 115.965 40.039 118.985 37.1796C123.137 33.25 129.567 32.332 133.715 34.6054C131.711 36.4882 120.606 46.8164 114.547 52.4531C114.219 51.1015 114.067 49.6836 114.125 48.1875ZM139.809 58.0312C134.527 62.7968 131.485 63.6367 127.078 63.4023C125.676 63.3242 124.27 62.9687 122.934 62.3984C131.36 54.7968 152.285 35.9257 152.887 35.3867C147.391 25.5976 138.602 21.2421 129.379 20.7265C122.246 20.3203 114.645 23.1992 109.531 27.8476C103.93 32.914 100.75 39.7265 100.344 46.9921C99.9025 54.8046 102.406 62.1796 107.098 67.3906C112.254 73.1132 119.36 76.0781 126.453 76.4726C133.492 76.875 141.516 73.8632 146.457 68.375C150.828 63.2929 151.754 56.8476 147.395 51.1484" fill="white"></path>
                            <path d="M170.246 60.9883C170.246 66.3906 169.188 69.8477 166.531 72.6172C164.082 75.1719 160.527 76.3359 156.211 76.3711L156.207 49.707C156.203 40.9297 158.363 34.207 164.176 28.6953C169.242 23.8633 176.379 20.7109 184.023 20.7148C191.66 20.7109 198.926 23.6563 204.035 28.5195C209.758 33.9453 211.84 41.0156 211.832 49.707L211.84 74.832H197.805V49.832C197.801 44.1836 196.914 41.2422 194.047 38.3711C191.469 35.8125 187.867 34.4023 184.023 34.3984C180.18 34.4023 176.574 35.8125 174 38.3711C170.992 41.3789 170.246 44.6445 170.242 49.832" fill="white"></path>
                            <path d="M85.5117 20.6328C77.793 20.6289 70.543 23.7344 65.4336 28.7891C59.0117 35.1328 57.5312 41.9258 57.5312 51.2305V76.3672C61.8516 76.3359 65.4062 75.1719 67.8594 72.6133C70.5078 69.8477 71.5742 66.3906 71.5742 60.9883L71.5664 48.9727C71.5742 45.0781 72.5078 41.2461 75.3281 38.4492C77.918 35.9063 81.3008 34.3203 85.5117 34.3164C88.8008 34.3203 91.8867 35.457 94.3359 37.3906L104.277 27.4492C99.1836 22.9375 92.5469 20.6289 85.5117 20.6328Z" fill="white"></path>
                            <path d="M305.238 34.9414V21.4727H291.328V21.1641C291.328 15.7617 290.266 12.3047 287.613 9.54297C285.164 6.98437 281.609 5.82812 277.293 5.78906V46.4648C277.289 57.207 280.129 63.2539 285.34 68.4141C290.387 73.4297 297.469 76.3672 305.105 76.3633V62.5664C301.609 62.5664 297.715 61.2461 295.164 58.6875C292.563 56.0547 291.328 52.9805 291.324 47.582V34.9414" fill="white"></path>
                            <path d="M336.191 20.6328C343.91 20.6289 351.285 23.5625 356.422 28.625C362.742 34.832 364.176 41.6875 364.172 50.6719V76.3711C359.855 76.3359 356.301 75.1758 353.852 72.6211C351.203 69.8516 350.137 66.4023 350.137 60.9922V50.7305C350.133 44.9414 349.309 41.582 346.191 38.3867C343.598 35.7578 340.047 34.332 336.191 34.3281C332.316 34.332 328.762 35.9219 326.18 38.5273C323.605 41.1445 322.246 44.6836 322.246 48.6641C322.246 52.6445 323.566 56.418 326.145 59.1172C329.102 62.1836 332.656 63.1914 337.809 63.1953H347.082C347.082 71.2969 342.297 75.7852 334.699 75.7852C326.809 75.7852 320.855 73.3789 316.305 69.1133C311.129 64.2617 308.211 57.2227 308.211 48.6641C308.215 32.7773 320.277 20.6328 336.191 20.6328Z" fill="white"></path>
                            <path d="M386.902 58.6875C384.305 56.0547 383.07 52.9805 383.066 47.582L383.07 21.1719C383.07 15.7617 382.004 12.3047 379.355 9.54297C376.906 6.98437 373.352 5.82812 369.035 5.78906L369.031 46.4648C369.027 57.207 371.871 63.2539 377.078 68.4141C382.129 73.4297 389.207 76.3672 396.852 76.3633V62.5664C393.352 62.5664 389.453 61.2461 386.902 58.6875Z" fill="white"></path>
                        </svg>
                    </a>
                </div>
            </div> */}
            <LogoDesktop />

            <div className="w-full max-w-md shadow-2xl mx-auto px-3 md:px-8 rounded-xl">
                <h2 className="text-3xl font-norma pt-10">Effettua il login</h2>
                <div className="mt-6">
                    {inputs.map((input) => (
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    <div className="text-end text-sm underline decoration-1">
                        <Link to={'/forgot-password'}>Password dimenticata?</Link>
                    </div>
                    <div className="flex items-center pt-6">
                        <button onClick={Login} className="bg-primary hover:bg-white hover:text-primary duration-75 delay-75 outline-primary outline-1 hover:outline text-white w-full font-bold py-3 px-4 rounded-lg focus:outline-none focus:-outline text-sm">
                            ACCEDI
                        </button>
                    </div>
                    <div className="mt-2">
                        <p className="px-3 pt-8 md:px-8 text-sm">Dichiaro di aver letto ed accettato l'<Link className="text-primary underline decoration-1">Informativa sui dati personali</Link></p>
                    </div>
                    <div className="mt-8 px-3 md:px-8 py-4 text-center">
                        <p className="text-sm ">Non hai un account?</p>
                        <Link to={'/register'} className="text-primary uppercase mt-1 hover:underline hover:decoration-1 text-md font-semibold">Registrati</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}