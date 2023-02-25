import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputForm from "./InputForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import LogoDesktop from "../logo/LogoDesktop";

export const Register = (props) => {
    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);
    const [stateDisable, setStateDisable] = useState(true);

    const handleShowHide = () => {
        setShow(!show);
    }

    const [values, setValues] = useState({
        email: "",
        password: "",
        nome: "",
        cognome: "",
        birthday: "",
        sesso: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            errorMessage: "Deve essere un indirizzo email valido.",
            placeholder: "Email*",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: show ? "text" : "password",
            errorMessage: "Formato non valido.",
            message: "La password deve avere almeno 6 caratteri, con lettere maiuscole e minuscole e numeri.",
            placeholder: "Password*",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700 text-left",
            validatee: <div className="validation text-left hidden">
                            <div id="length">
                                <FontAwesomeIcon className="fa-xmark icon" icon={faXmark}/>  
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>  
                                <span className="ml-5">Mancano 8 caratteri</span>
                            </div>
                            <div id="lower">
                                <FontAwesomeIcon className="fa-xmark icon" icon={faXmark}/>  
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>  
                                <span className="ml-5">Lettera minuscola presente</span>
                            </div>
                            <div id="capital">
                                <FontAwesomeIcon className="fa-xmark icon" icon={faXmark}/>  
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>  
                                <span className="ml-5">Mancana una lettera maiuscola</span>
                            </div>
                            <div id="number">
                                <FontAwesomeIcon className="fa-xmark icon" icon={faXmark}/>  
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>  
                                <span className="ml-5">Numero non presente</span>
                            </div>
                            <div id="special">
                                <FontAwesomeIcon className="fa-xmark icon" icon={faXmark}/>  
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>  
                                <span className="ml-5">Carattere speciale</span>
                            </div>
                        </div>,
            butoni: show ? 
                (<FontAwesomeIcon icon={faEye} id="show_hide" className="absolute" onClick={handleShowHide} />) 
                : 
                (<FontAwesomeIcon icon={faEyeSlash} id="show_hide" className="absolute" onClick={handleShowHide} />),
            required: true,
        },
        {
            id: 3,
            name: "nome",
            type: "text",
            errorMessage: "Obbligatorio.",
            placeholder: "Nome*",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
            required: true,
        },
        {
            id: 4,
            name: "cognome",
            type: "text",
            errorMessage: "Obbligatorio.",
            placeholder: "Cognome*",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
            required: true,
        },
        {
            id: 5,
            name: "birthday",
            type: "date",
            placeholder: "Data di nascita*",
            className: "w-full border outline-gray-400 rounded py-3 px-3 text-gray-700",
        }
    ];

    async function Save(){
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post("http://localhost:8000/api/register-user", values).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_nome", res.data.username);

                    Swal.fire({
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 2500
                    }).then(function() {
                        navigate('/');
                    });
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            });
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const valid = (item, v_icon, inv_icon) => {

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "1";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "0";
    }

    const invalid = (item, v_icon, inv_icon) => {

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "0";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "1";
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});

        if(e.target.name === 'password'){
            var password = e.target.value;

            if(password.match(/[A-Z]/)){
                valid("capital", "fa-check", "fa-xmark");
            }
            else{
                invalid("capital", "fa-check", "fa-xmark");
            }
            if(password.match(/[0-9]/)){
                valid("number", "fa-check", "fa-xmark");
            }
            else{
                invalid("number", "fa-check", "fa-xmark");
            }
            if(password.match(/[a-z]/)){
                valid("lower", "fa-check", "fa-xmark");
            }
            else{
                invalid("lower", "fa-check", "fa-xmark");
            }
            if(password.length > 7){
                valid("length", "fa-check", "fa-xmark");
            }
            else{
                invalid("length", "fa-check", "fa-xmark");
            }
            if(password.match(/[!@#$%^&*]/)){
                valid("special", "fa-check", "fa-xmark");
            }
            else{
                invalid("special", "fa-check", "fa-xmark");
            }
        }

        if(e.target.name === 'password' && e.target.value !== ''){
            const validate = document.querySelector('.validation');
            validate.style.display = 'block';
        }
    }

    const canBeSubmitted = () => {

        const isValid = 
            values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") &&
            values.password.trim().match(/[A-Z]/) &&
            values.password.trim().match(/[a-z]/) &&
            values.password.trim().match(/[0-9]/) &&
            values.password.trim().length > 7 &&
            values.password.trim().match(/[!@#$%^&*]/) &&
            values.nome.trim().length > 0 && 
            values.cognome.trim().length > 0 &&
            checked;
        
        if(isValid){
            setStateDisable(false);
        }
        else{
            setStateDisable(true);
        }
    };

    useEffect(() => canBeSubmitted());
     
    const handleCheck = () => {
        setChecked(!checked);
    }

    return(
        <div className="container pt-16">
            <div className="items-center justify-center text-center">
                <LogoDesktop />
            </div>
            <div onSubmit={handleSubmit} className="w-full max-w-md shadow-2xl mx-auto px-3 md:px-8 rounded-xl mb-4">
                <h2 className="text-3xl font-norma pt-10 px-4">Effettua il register</h2>
                <div className="mt-6 px-4">
                    {inputs.map((input) => (
                        <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                </div>
                <div className="justify-between flex py-5 px-4">
                    <h3>Sesso</h3>
                    <div className="flex space-x-12">
                        <div className="mb-4">
                            <input id="femmina" onChange={onchange} type="radio" value="Femmina" name="sesso" className="w-4 h-4" />
                            <label htmlFor="femmina" className="ml-2">Femmina</label>
                        </div>
                        <div className="mb-4">
                            <input id="maschio" onChange={onChange} type="radio" value="Maschio" name="sesso" className="w-4 h-4" />
                            <label htmlFor="maschio" className="ml-2">Maschio</label>
                        </div> 
                    </div>
                </div>                   
                <div className="mb-4 flex px-4">
                    <input id="email" onChange={handleCheck} checked={checked} type="checkbox" className="w-6 h-6 items-center my-auto" />
                    <p className="ml-8">Dichiaro di aver letto ed accettato l’informativa sui dati personali. *</p>
                </div>
                <div className="px-4">
                    <p className="font-medium text-sm">Dichiaro di aver letto ed accettato l'<Link className="text-primary underline decoration-1">Informativa sui dati personali</Link></p>
                </div>
                <div className="py-4 px-4">
                    <button onClick={Save} disabled={stateDisable} id="register" className="text-center">REGISTRATI SENZA DIRCI DI PIÙ</button>
                </div>
            </div>
        </div>
    )
}

export default Register;